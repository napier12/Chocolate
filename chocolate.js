/** @format */

let showCal = true;

const showCalories = () => {
  console.log("toggle");
  showCal = !showCal;
  if (showCal) $("p.calories").show();
  else $("p.calories").hide();
};

const highlightRandomChocolate = () => {
  $(".wrapper .box").css("background-color", "#f2f4d4");
  let randomIndex = Math.floor(Math.random() * 50) + 1;
  alert("Bring this number to the cashier: " + randomIndex);
  randomIndex = randomIndex % 10;
  $(".wrapper .box:eq" + randomIndex + ")").css("background-color", "yellow");
};
