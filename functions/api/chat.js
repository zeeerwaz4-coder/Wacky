export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const message = body.message;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are Wacky, a helpful chatbot." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    return Response.json({
      reply: data.choices?.[0]?.message?.content || "No response from AI"
    });

  } catch (err) {
    return Response.json({
      reply: "Server error: " + err.message
    }, { status: 500 });
  }
      }
