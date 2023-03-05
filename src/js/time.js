const body = document.body;
const clock = document.querySelector("#js-clock span");
const greetingByTime = document.querySelector("#js-greetingByTime");

const changingClass = (timeClass) => {
  if (!body.classList.contains(timeClass)) {
    body.classList.add(timeClass);
  }
}
const chagingGreeting = (greeting) => {
  if (!greetingByTime.classList.contains("is-active")) {
    greetingByTime.classList.add("is-active");
    greetingByTime.innerText = greeting;
  }
}
const setClock = () => {
  const date = new Date();
  let hours = null;
  const time = [
    date.getHours(),
    String(date.getMinutes()).padStart(2, "0"),
    String(date.getSeconds()).padStart(2, "0")
  ];
  const timeZone = {
    morning: 11,
    afternoon: 16,
    evening: 21,
    night: 5,
  };
  if (time[0] > 12) {
    hours = "PM ";
    hours += time[0] - 12;
  } else {
    hours = "AM " + time[0];
  }
  clock.innerHTML = `${hours}:${time[1]}:${time[2]}`;

  if (timeZone.night <= time[0] && time[0] <= timeZone.morning) {
    changingClass("is-morning");
    chagingGreeting("Good Morning ☕️")
  } else if (timeZone.morning < time[0] && time[0] <= timeZone.afternoon) {
    changingClass("is-afternoon");
    chagingGreeting("Good Afternoon 🧋")
  } else if (timeZone.afternoon < time[0] && time[0] <= timeZone.evening) {
    changingClass("is-evening");
    chagingGreeting("Good Evening 🌆")
  } else if (timeZone.evening < time[0] || time[0] < timeZone.night) {
    changingClass("is-night");
    chagingGreeting("Good Night ⭐️")
  }
}

setClock();
setInterval(setClock, 1000);