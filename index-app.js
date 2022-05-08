document.title = "Color Picker || RGB";
let backgroundSimple = document.querySelector("#backgroundSimple");
let clickMe = document.querySelector("#clickMe");
let main = document.querySelector("#main");

backgroundSimple.innerText = "rgb(241, 245, 248)";
main.style.backgroundColor = "rgb(241, 245, 248)";
clickMe.style.backgroundColor = backgroundSimple.value;

clickMe.addEventListener("click", () => {
  let randomBackground = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  main.style.backgroundColor = randomBackground;
  clickMe.style.backgroundColor = randomBackground;
  backgroundSimple.innerText = randomBackground;
});
