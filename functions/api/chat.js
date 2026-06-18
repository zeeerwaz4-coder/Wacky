export async function onRequestPost({ env }) {
  return Response.json({
    projectEnvKeys: Object.keys(env),
    openai: env.OPENAI_API_KEY || "MISSING"
  });
}
