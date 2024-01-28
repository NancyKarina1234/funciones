/*bg negro */

const divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function (event) {
    event.target.style.backgroundColor = "black";
  });
}

/*cambio colores */
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  let newColor;
  switch (key) {
    case "a":
      newColor = "pink";
      break;
    case "s":
      newColor = "orange";
      break;
    case "d":
      newColor = "skyblue";
      break;
    default:
      return;
  }

  const keyDiv = document.getElementById("key");
  keyDiv.style.backgroundColor = newColor;
});