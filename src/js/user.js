const loginForm = document.querySelector("#js-loginForm");
const inputName = document.querySelector("#js-loginForm input");
const greetingHead = document.querySelector("#js-greeting");
const greetingUser = document.querySelector("#js-greetingTheUser");

const HIDDEN_CLASS = "is-hidden";
const USERNAME_KEY = "username";

const paintgreeting = (username) => {
  greetingUser.innerText = username;
  greetingHead.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
} else {
  paintgreeting(savedUsername);
}

const onLoginSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);

  const userName = inputName.value;

  localStorage.setItem(USERNAME_KEY, userName);
  paintgreeting(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);
