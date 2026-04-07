// Netlify serverless function — proxies all Claude API calls
// API key stored as CLAUDE_API_KEY environment variable in Netlify
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders(), body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders(), body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: { message: 'CLAUDE_API_KEY not configured in Netlify environment variables' } })
    };
  }

  try {
    const body = JSON.parse(event.body);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: body.model || 'claude-sonnet-4-20250514',
        max_tokens: body.max_tokens || 2048,
        messages: body.messages
      })
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      headers: corsHeaders(),
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: { message: err.message } })
    };
  }
};

function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };
}
