const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const grettings = document.querySelector(".grettings");

const USER_LS = "currentUser",
  SHOW_ON = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGretting(currentValue);
  saveName(currentValue);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function askForName() {
  form.classList.add(SHOW_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHOW_ON);
  grettings.classList.add(SHOW_ON);
  grettings.innerHTML = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGretting(currentUser);
  }
}

function init() {
  loadName();
}

init();
