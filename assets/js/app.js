var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var result = document.getElementById("result");
var wrapper = $(".input_fields_wrap");

// Random Number Generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Main Function
function run() {
  var choice = getRandomInt(2);
  console.log(choice);
  if (c1.value == "" || c2.value == "") {
    alert("Enter Choices");
  } else {
    if (choice == 0) {
      result.textContent = "You have to go with " + c1.value;
    } else if (choice == 1) {
      result.textContent = "You have to go with " + c2.value;
    }
  }
}
