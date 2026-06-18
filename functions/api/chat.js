export async function onRequestPost({ env }) {
  return Response.json({
    test: "running",
    key: env.OPENAI_API_KEY ? "EXISTS" : "MISSING"
  });
}
