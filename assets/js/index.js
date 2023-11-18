// Ejercicio 1
const img = document.querySelector("#img1");

document.querySelector("#img1").addEventListener("click", function () {
  if (img.style.borderColor === "transparent" || img.style.borderColor === "") {
    img.style.borderColor = "red";
  } else {
    img.style.borderColor = "transparent";
  }
});
// Ejercicio 2
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const sticker1 = document.querySelector("#emote1").value;
  const sticker2 = document.querySelector("#emote2").value;
  const sticker3 = document.querySelector("#emote3").value;

  const total = +sticker1 + +sticker2 + +sticker3;

  if (total <= 10) {
    document.querySelector("#totalSticker").innerHTML =
      "Llevas " + total + " stickers";
  } else document.querySelector("#totalSticker").innerHTML = "Llevas demasiados stickers";
});
// Ejercicio 3
const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", function () {
  const option1 = document.querySelector("#opt-1").value;
  const option2 = document.querySelector("#opt-2").value;
  const option3 = document.querySelector("#opt-3").value;

  let password = "";
  password += option1 + option2 + option3;

  if (password == 911 || password == 714) {
    document.querySelector("#password").innerHTML = "Clave Correcta";
  } else {
    document.querySelector("#password").innerHTML = "Clave Incorrecta";
  }
});
