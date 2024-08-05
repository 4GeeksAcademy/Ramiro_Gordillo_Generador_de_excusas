import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  loadExcuse();
};


function randomIndex(length) {
  let number = Math.floor(Math.random() * length);
  return number;
}


function getString(array) {
  let length = array.length;
  let index = randomIndex(length);
  let string = array[index];
  return string;
}


function getExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  let whoString = getString(who);
  let actionString = getString(action);
  let whatString = getString(what);
  let whenString = getString(when);

  let excuse = `${whoString} ${actionString} ${whatString} ${whenString}`;

  return excuse;
}


function loadExcuse() {
  let excuseLoad = document.querySelector("#excuse");
  let excuse = getExcuse();
  excuseLoad.innerHTML = excuse;
}
