console.log("connected");

//array of div elements with a class pixel and 400 elements called pixels
var pixel = "<div class='pixel'></div>";
var box = [];

var pixelCanvas = document.getElementById("pixel-canvas");
var pressed = false;

for (var i = 0; i < 2880; i += 1) {
  box.push(pixel);
};

pixelCanvas.innerHTML = box.join("");

pixelCanvas.addEventListener("mouseover", function (event) {
  if (pressed) {
    event.target.classList.add("filled-black")
  }
});

pixelCanvas.addEventListener("mousedown", function (event) {
  pressed = true;
});


document.addEventListener("mouseup", function (event) {
  pressed = false;
});
