export async function onRequestPost({ env }) {
  return Response.json({
    keys: Object.keys(env),
    openai: env.OPENAI_API_KEY
  });
}
