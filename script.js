const form = document.getElementById("rsvp-form");
const thankyou = document.getElementById("thankyou");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  thankyou.classList.remove("hidden");
  form.reset();
});
