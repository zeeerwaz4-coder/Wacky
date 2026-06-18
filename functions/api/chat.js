export async function onRequestPost({ env }) {
  return Response.json({
    hasKey: !!env.OPENAI_API_KEY
  });
}
