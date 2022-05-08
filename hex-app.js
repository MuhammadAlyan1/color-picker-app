document.title = "Color Picker || Hex";
let backgroundHex = document.querySelector("#backgroundHex");
let clickMe = document.querySelector("#clickMe");
let main = document.querySelector("#main");

let randomLetter = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

backgroundHex.innerText = "#F1f5f8";
main.style.backgroundColor = "#F1f5f8";
clickMe.style.backgroundColor = backgroundHex.value;

clickMe.addEventListener("click", () => {
  let randomBackground = ["#"];

  for (let i = 0; i < 6; i++) {
    randomBackground.push(
      randomLetter[Math.floor(Math.random() * randomLetter.length)]
    );
  }

  randomBackground = randomBackground.join("");

  main.style.backgroundColor = randomBackground;

  clickMe.style.backgroundColor = randomBackground;
  backgroundHex.innerText = randomBackground;
});
