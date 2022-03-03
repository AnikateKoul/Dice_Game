var count1 = 0;
var count2 = 0;

var player1 = prompt("Enter the name of player 1");
var player2 = prompt("Enter the name of player 2");

document.getElementById("player1").innerHTML = `${player1} : `;
document.getElementById("player11").innerHTML = `${player1} : `;
document.getElementById("player2").innerHTML = `${player2} : `;
document.getElementById("player22").innerHTML = `${player2} : `;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function run() {
  let random1 = randomNumber(1, 6);
  let random2 = randomNumber(1, 6);

  if (random1 == 1) {
    document.getElementById("score1").innerHTML = '<img src="Alea_1.png">';
  }
  if (random1 == 2) {
    document.getElementById("score1").innerHTML = '<img src="Alea_2.png">';
  }
  if (random1 == 3) {
    document.getElementById("score1").innerHTML = '<img src="Alea_3.png">';
  }
  if (random1 == 4) {
    document.getElementById("score1").innerHTML = '<img src="Alea_4.png">';
  }
  if (random1 == 5) {
    document.getElementById("score1").innerHTML = '<img src="Alea_5.png">';
  }
  if (random1 == 6) {
    document.getElementById("score1").innerHTML = '<img src="Alea_6.png">';
  }

  if (random2 == 1) {
    document.getElementById("score2").innerHTML = '<img src="Alea_1.png">';
  }
  if (random2 == 2) {
    document.getElementById("score2").innerHTML = '<img src="Alea_2.png">';
  }
  if (random2 == 3) {
    document.getElementById("score2").innerHTML = '<img src="Alea_3.png">';
  }
  if (random2 == 4) {
    document.getElementById("score2").innerHTML = '<img src="Alea_4.png">';
  }
  if (random2 == 5) {
    document.getElementById("score2").innerHTML = '<img src="Alea_5.png">';
  }
  if (random2 == 6) {
    document.getElementById("score2").innerHTML = '<img src="Alea_6.png">';
  }

  if (random1 > random2) {
    document.getElementById("result").innerHTML = `${player1} <br> wins`;
    count1++;
    document.getElementById("total_Score1").innerHTML = count1;
  }
  if (random1 == random2) {
    document.getElementById("result").innerHTML = "Draw";
  }
  if (random2 > random1) {
    document.getElementById("result").innerHTML = `${player2} <br> wins`;
    count2++;
    document.getElementById("total_Score2").innerHTML = count2;
  }
}
function reset() {
  count1 = 0;
  count2 = 0;
  document.getElementById("total_Score1").innerHTML = count1;
  document.getElementById("total_Score2").innerHTML = count2;
  timerStop();
  document.getElementById("result").innerHTML = "Start Playing";
  document.getElementById("score1").innerHTML = "";
  document.getElementById("score2").innerHTML = "";
  document.getElementById("button1").innerHTML = "Start";
  document.getElementById("button1").style.boxShadow = "4px 4px 2px #39FF14";
  document.getElementById("button2").style.boxShadow = "4px 4px 2px #39FF14";

}

var gameTimer;
var button;
function timer() {
  gameTimer = setInterval(run, 1000);
  button = document.querySelector("#button1");
  button.disabled = true;
  document.getElementById("button1").innerHTML = "Start";
  document.getElementById("button2").style.boxShadow = "4px 4px 2px #39FF14";
  document.getElementById("button1").style.boxShadow = "4px 4px 2px gray";


}
function timerStop() {
  clearInterval(gameTimer);
  button.disabled = false;
  document.getElementById("button1").innerHTML = "Resume";
  document.getElementById("button2").style.boxShadow = "4px 4px 2px #faed27";
  document.getElementById("button1").style.boxShadow = "4px 4px 2px gold";
}
