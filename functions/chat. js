export async function onRequestPost({ request, env }) {
  try {
    const { message } = await request.json();

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are TalkiAI, a helpful assistant that answers clearly and naturally."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await openaiRes.json();

    return Response.json({
      reply: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (err) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
