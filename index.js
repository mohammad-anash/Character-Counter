let textarea = document.querySelector("#textarea");
let character = document.querySelector(".character");
let word = document.querySelector(".word");
let limit = document.querySelector(".limit");

let counter = 0;

let limitvalue = 300;

textarea.addEventListener("input", function () {
  let text = this.value;
  character.innerHTML = text.length;

  text = text.trim();
  let wordcounter = text.split(" ");
  let cleanlist = wordcounter.filter(function (element) {
    return element != "";
  });
  word.innerHTML = cleanlist.length;

  let limitwords = limitvalue - text.length;
  limit.innerHTML = limitwords;

  if (limitwords < 0) {
    limit.style.color = "red";
  } else {
    limit.style.color = "";
  }
});
