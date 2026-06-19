export async function onRequestPost({ request }) {
  const body = await request.json();
  const message = body.message;

  return Response.json({
    reply: "You said: " + message
  });
}
