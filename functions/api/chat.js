export async function onRequestPost({ env }) {
  return Response.json({
    openai: env.OPENAI_API_KEY ?? "MISSING",
    envKeys: Object.keys(env)
  });
}
