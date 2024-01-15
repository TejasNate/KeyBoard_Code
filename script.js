document.addEventListener("keydown", function (event) {
  const keyDisplay = document.getElementById("keyDisplay");
  const pressedKey = event.key;
  const keyCode = event.which;
  const H2Tag = document.querySelector(".container h2");

  keyDisplay.innerText = `Pressed Key: ${pressedKey}\n Key Code : ${keyCode}`;

  H2Tag.remove();
});
