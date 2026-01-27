const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  msg.textContent = result.message;
  form.reset();
});
