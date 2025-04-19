document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const res = await fetch('https://your-api-gateway-url.amazonaws.com/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });

  const result = await res.json();
  document.getElementById("responseMessage").innerText = result.message || "Message sent!";
});
