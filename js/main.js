console.log("FileOpened..");

var count = 0;
var bankCount = 0;

console.log("count", count);
let myBankScale = 0;
let myPlayerScale = 0;
console.log("myBankScale in main.js ..", myBankScale);

let removeNumber;
// console.log("Number1 - ", removeNumber);
let cardArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
];
// console.log("cardArray", cardArray);

function randomArray() {
  let rand = cardArray;
  //   console.log("Rand", rand);
  let randNumber = cardArray[Math.floor(Math.random() * cardArray.length)];
  window.removeNumber = randNumber + 1;
  //   console.log("Random number = ", randNumber);
  //   console.log("window.removeNumber = ", window.removeNumber);
  //   console.log("cardArray[randNumber] = ", cardArray[window.removeNumber]);

  rand.splice(cardArray[window.removeNumber], 1); // начиная с позиции 1, удалить 1 элемент
  //   console.log("new rand - ", rand);
  cardArray = rand;
  //   console.log("New cardArray - ", cardArray);
}

function newGame() {
  console.log("Function newGame..");
  console.log("window.count 1 - ", window.count);
  window.count++;
  //   let con = window.count;
  //   con++;
  //   window.count = con;
  console.log("window.count 2 - ", window.count);

  if (window.count) {
    let newGameButton = document.getElementById("addItem");
    newGameButton.innerHTML = `More card`;
    let enoughCardButton = document.getElementById("enough");
    enoughCardButton.style.visibility = "visible";
    let PlayerHeaderScale = document.getElementById("bankScale");
    PlayerHeaderScale.style.visibility = "visible";
  }

  //   console.log(window.count);
  let myCard = document.createElement("img");
  // document.body.appendChild(contentDiv).className = "Content";
  let allCards = document.getElementById("busitalsep");
  allCards.appendChild(myCard).className = "minaden";
  myCard.setAttribute("id", "moveCardID");
  myCard.setAttribute("src", "/image/back.gif");

  //   console.log(conter);
  let start = Date.now(); // запомнить время начала
  //   console.log(start);
  let timer = setInterval(function () {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;
    // console.log(timePassed);
    if (timePassed >= 2400) {
      clearInterval(timer); // закончить анимацию через 2 секунды
      return;
    }
    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    draw(timePassed);
  }, 20);
  // в то время как timePassed идёт от 0 до 2000
  // left изменяет значение от 0px до 400px
  function draw(timePassed) {
    let position = 60 - Math.round(timePassed / 30);
    moveCardID.style.marginLeft = timePassed / 2 + "px";
    moveCardID.style.marginBottom = timePassed / 10 + "px";
    moveCardID.style.width = 100 + position + "px";
    let round = Math.round(timePassed / 10);
    // console.log(round);
    moveCardID.style.transform = "rotate(" + round + "deg)";
    // console.log("position", position);
    if (position >= -20 && position <= -19) {
      //   console.log("done");
      moveCardID.style.visibility = "hidden";

      switch (window.count) {
        case 1:
          let bankCardDeck1 = document.getElementById("bankCardDeck1");
          bankCardDeck1.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.Number, cardArray, window.count, true); // Choose card from array.
          break;
        case 2:
          let bankCardDeck2 = document.getElementById("bankCardDeck2");
          bankCardDeck2.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
        case 3:
          let bankCardDeck3 = document.getElementById("bankCardDeck3");
          bankCardDeck3.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
        case 4:
          let bankCardDeck4 = document.getElementById("bankCardDeck4");
          bankCardDeck4.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
        case 5:
          let bankCardDeck5 = document.getElementById("bankCardDeck5");
          bankCardDeck5.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
      }

      document.getElementById("moveCardID").remove();
    }
  }
}

// function addCard() {
//   console.log("Function add card..");
// }

function BankGame() {
  console.log("BankGame..");
  console.log("window.bankCount..", window.bankCount);

  let playerButton = document.getElementById("addItem");
  playerButton.style.visibility = "hidden";
  let enoughCardButton = document.getElementById("enough");
  enoughCardButton.style.visibility = "hidden";
  let bankHeaderScale = document.getElementById("PlayerScale");
  bankHeaderScale.style.visibility = "visible";

  window.bankCount++;

  //   console.log(window.count);
  let bankCard = document.createElement("img");

  let allCards = document.getElementById("busitalsep");
  allCards.appendChild(bankCard).className = "minaden";
  bankCard.setAttribute("id", "moveCardID");
  bankCard.setAttribute("src", "/image/back.gif");

  //   console.log(conter);
  let start = Date.now(); // запомнить время начала
  //   console.log(start);
  let timer = setInterval(function () {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;
    // console.log(timePassed);
    if (timePassed >= 2000) {
      clearInterval(timer); // закончить анимацию через 2 секунды
      return;
    }
    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
    draw(timePassed);
  }, 20);
  // в то время как timePassed идёт от 0 до 2000
  // left изменяет значение от 0px до 400px
  function draw(timePassed) {
    let position = 60 - Math.round(timePassed / 30);

    moveCardID.style.marginLeft = timePassed / 2 + "px";
    moveCardID.style.marginTop = timePassed / 5 + "px";
    moveCardID.style.width = 100 + position + "px";

    let round = Math.round(timePassed / 10);

    moveCardID.style.transform = "rotate(" + round + "deg)";
    // console.log("position", position);
    if (position >= -6 && position <= -3) {
      console.log("done");
      moveCardID.style.visibility = "hidden";
      //   console.log("con bank", con);
      console.log("window.bankCount..", window.bankCount);
      switch (window.bankCount) {
        case 1:
          let bankCardDeck1 = document.getElementById("bankCardDeck6");
          bankCardDeck1.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.bankCount, false); // Choose card from array.
          break;
        case 2:
          let bankCardDeck2 = document.getElementById("bankCardDeck7");
          bankCardDeck2.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.bankCount, false); // Choose card from array.
          break;
        case 3:
          let bankCardDeck3 = document.getElementById("bankCardDeck8");
          bankCardDeck3.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.bankCount, false); // Choose card from array.
          break;
        case 4:
          let bankCardDeck4 = document.getElementById("bankCardDeck9");
          bankCardDeck4.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.bankCount, false); // Choose card from array.
          break;
        case 5:
          let bankCardDeck5 = document.getElementById("bankCardDeck10");
          bankCardDeck5.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.bankCount, false); // Choose card from array.
          break;
      }
      document.getElementById("moveCardID").remove();
      //   //   console.log("was removed...");
    }
  }
}
