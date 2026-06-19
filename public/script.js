async function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const message = input.value;
  if (!message) return;

  chat.innerHTML += `<div class="msg user">You: ${message}</div>`;
  input.value = "";

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });
if (!res.ok) {
  const errorText = await res.text();
  chat.innerHTML += `<div class="msg bot">Error: ${errorText}</div>`;
  return;
}
    let data;
try {
  data = await res.json();
} catch (e) {
  chat.innerHTML += `<div class="msg bot">Invalid JSON response</div>`;
  return;
}

    chat.innerHTML += `<div class="msg bot">AI: ${data.reply}</div>`;
    chat.scrollTop = chat.scrollHeight;

  } catch (err) {
    chat.innerHTML += `<div class="msg bot">Error: ${err.message}</div>`;
  }
}
