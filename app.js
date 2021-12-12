
var sumPlayer = 0;
var sumMachine = 0;

function throwTheDice() {

  var randomNum = Math.random(); // get random number based on the list length
  var dice1Value = (Math.floor(randomNum * 6) + 1);

  var randomNum = Math.random(); // get random number based on the list length
  var dice2Value = (Math.floor(randomNum * 6) + 1);

  var randomNum = Math.random(); // get random number based on the list length
  var dice3Value = (Math.floor(randomNum * 6) + 1);

  var randomNum = Math.random(); // get random number based on the list length
  var dice4Value = (Math.floor(randomNum * 6) + 1);

  sumPlayer = dice1Value + dice2Value;
  if (dice1Value == dice2Value) {
    sumPlayer = sumPlayer * 2;
  }
  
  sumMachine = (dice3Value + dice4Value);
  if (dice3Value == dice4Value) {
    sumMachine = sumMachine * 2;
  }
   
  console.log(dice1Value + " " + dice2Value);
  console.log(dice3Value + " " + dice4Value);

  switch (dice1Value) {
    case 1: 
      document.getElementsByClassName("img1")[0].src="images/dice1.png";
      console.log("Dice value: " + dice1Value);
      break;
    case 2: 
      document.getElementsByClassName("img1")[0].src="images/dice2.png";
      console.log("Dice value: " + dice1Value);
      break;
    case 3: 
      document.getElementsByClassName("img1")[0].src="images/dice3.png";
      console.log("Dice value: " + dice1Value);
      break;
    case 4: 
      document.getElementsByClassName("img1")[0].src="images/dice4.png";
      console.log("Dice value: " + dice1Value);
      break;
    case 5: 
      document.getElementsByClassName("img1")[0].src="images/dice5.png";
      console.log("Dice value: " + dice1Value);
      break;
    case 6: 
      document.getElementsByClassName("img1")[0].src="images/dice6.png";
      console.log("Dice value: " + dice1Value);
      break;
    default:
      console.log("Dice 1 value not right! " + dice1Value);
  }

  switch (dice2Value) {
    case 1: 
      document.getElementsByClassName("img2")[0].src="images/dice1.png";
      console.log("Dice value: " + dice2Value);
      break;
    case 2: 
      document.getElementsByClassName("img2")[0].src="images/dice2.png";
      console.log("Dice value: " + dice2Value);
      break;
    case 3: 
      document.getElementsByClassName("img2")[0].src="images/dice3.png";
      console.log("Dice value: " + dice2Value);
      break;
    case 4: 
      document.getElementsByClassName("img2")[0].src="images/dice4.png";
      console.log("Dice value: " + dice2Value);
      break;
    case 5: 
      document.getElementsByClassName("img2")[0].src="images/dice5.png";
      console.log("Dice value: " + dice2Value);
      break;
    case 6: 
      document.getElementsByClassName("img2")[0].src="images/dice6.png";
      console.log("Dice value: " + dice2Value);
      break;
    default:
      console.log("Dice 2 value not right! " + dice2Value);
  }

  switch (dice3Value) {
    case 1: 
      document.getElementsByClassName("img3")[0].src="images/dice1.png";
      console.log("Dice value: " + dice3Value);
      break;
    case 2: 
      document.getElementsByClassName("img3")[0].src="images/dice2.png";
      console.log("Dice value: " + dice3Value);
      break;
    case 3: 
      document.getElementsByClassName("img3")[0].src="images/dice3.png";
      console.log("Dice value: " + dice3Value);
      break;
    case 4: 
      document.getElementsByClassName("img3")[0].src="images/dice4.png";
      console.log("Dice value: " + dice3Value);
      break;
    case 5: 
      document.getElementsByClassName("img3")[0].src="images/dice5.png";
      console.log("Dice value: " + dice3Value);
      break;
    case 6: 
      document.getElementsByClassName("img3")[0].src="images/dice6.png";
      console.log("Dice value: " + dice3Value);
      break;
    default:
      console.log("Dice 3 value not right! " + dice3Value);
  }

  switch (dice4Value) {
    case 1: 
      document.getElementsByClassName("img4")[0].src="images/dice1.png";
      console.log("Dice value: " + dice4Value);
      break;
    case 2: 
      document.getElementsByClassName("img4")[0].src="images/dice2.png";
      console.log("Dice value: " + dice4Value);
      break;
    case 3: 
      document.getElementsByClassName("img4")[0].src="images/dice3.png";
      console.log("Dice value: " + dice4Value);
      break;
    case 4: 
      document.getElementsByClassName("img4")[0].src="images/dice4.png";
      console.log("Dice value: " + dice4Value);
      break;
    case 5: 
      document.getElementsByClassName("img4")[0].src="images/dice5.png";
      console.log("Dice value: " + dice4Value);
      break;
    case 6: 
      document.getElementsByClassName("img4")[0].src="images/dice6.png";
      console.log("Dice value: " + dice4Value);
      break;
    default:
      console.log("Dice 4 value not right! " + dice4Value);
  }

  if (sumPlayer > sumMachine) {
    document.getElementsByClassName("winner")[0].innerText= "You beat the Machine!";
    document.getElementsByClassName("winner")[0].style.color="#57f542";
  }
  else if (sumPlayer < sumMachine) {
    document.getElementsByClassName("winner")[0].style.color="#ff0000";
    document.getElementsByClassName("winner")[0].innerText= "The Machine Beat You!";
  }
  else {
    document.getElementsByClassName("winner")[0].style.color="#ffffff";
    document.getElementsByClassName("winner")[0].innerText= "Nobody Won!";
  }
  
}  

throwTheDice();
// v.2021.12.12a