const main = document.querySelector("main");

const MORNING_CLASS = "is-morning";
const AFTERNOON_CLASS = "is-afternoon";
const EVENING_CLASS = "is-evening";
const NIGHT_CLASS = "is-night";

let timing;

const img = ["01", "02", "03", "04"];

const changeBg = () => {
  const randomImg = img[Math.floor(Math.random() * img.length)];

  if (document.body.classList.contains(MORNING_CLASS)) {
    timing = "morning";
  } else if (document.body.classList.contains(AFTERNOON_CLASS)) {
    timing = "afternoon";
  } else if (document.body.classList.contains(EVENING_CLASS)) {
    timing = "evening";
  } else if (document.body.classList.contains(NIGHT_CLASS)) {
    timing = "night";
  }
  main.style.backgroundImage = `url(./src/img/${timing}${randomImg}.jpg)`;
}

changeBg();
setInterval(changeBg, 216000)

