console.log("FileOpened..");

var count = 0;
var bankCount = 0;
let myBankScale = 0;
let myPlayerScale = 0;
let removeNumber;
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
console.log("cardArray 1 -", cardArray);

function randomArray() {
  let randNumber = cardArray[Math.floor(Math.random() * cardArray.length)];
  window.removeNumber = randNumber;
  cardArray.splice(randNumber, 1);
}

function newGame() {
  window.count++;

  if (window.count) {
    let newGameButton = document.getElementById("addItem");
    newGameButton.innerHTML = `More card`;
    let enoughCardButton = document.getElementById("enough");
    enoughCardButton.style.visibility = "visible";
    let PlayerHeaderScale = document.getElementById("PlayerScale");
    PlayerHeaderScale.style.visibility = "visible";
  }

  let myCard = document.createElement("img");
  let allCards = document.getElementById("busitalsep");
  allCards.appendChild(myCard).className = "minaden";
  myCard.setAttribute("id", "moveCardID");
  myCard.setAttribute("src", "/image/back.gif");

  let start = Date.now(); // запомнить время начала
  let timer = setInterval(function () {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

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
    moveCardID.style.transform = "rotate(" + round + "deg)";

    if (position >= -20 && position <= -19) {
      moveCardID.style.visibility = "hidden";
      switch (window.count) {
        case 1:
          let playerCardDeck1 = document.getElementById("bankCardDeck1");
          playerCardDeck1.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.Number, cardArray, window.count, true); // Choose card from array.
          break;
        case 2:
          let playerCardDeck2 = document.getElementById("bankCardDeck2");
          playerCardDeck2.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
        case 3:
          let playerCardDeck3 = document.getElementById("bankCardDeck3");
          playerCardDeck3.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
        case 4:
          let playerCardDeck4 = document.getElementById("bankCardDeck4");
          playerCardDeck4.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
        case 5:
          let playerCardDeck5 = document.getElementById("bankCardDeck5");
          playerCardDeck5.style.visibility = "visible";
          randomArray(); // create random card and change array of cards..
          cards(window.removeNumber, cardArray, window.count, true); // Choose card from array.
          break;
      }
      document.getElementById("moveCardID").remove();
    }
  }
}

function BankGame() {
  let playerButton = document.getElementById("addItem");
  playerButton.style.visibility = "hidden";
  let enoughCardButton = document.getElementById("enough");
  enoughCardButton.style.visibility = "hidden";
  let bankHeaderScale = document.getElementById("BankScale");
  bankHeaderScale.style.visibility = "visible";

  window.bankCount++;

  let bankCard = document.createElement("img");
  let allCards = document.getElementById("busitalsep");
  allCards.appendChild(bankCard).className = "minaden";
  bankCard.setAttribute("id", "moveCardID");
  bankCard.setAttribute("src", "/image/back.gif");

  let start = Date.now(); // запомнить время начала
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
    if (position >= -6 && position <= -3) {
      moveCardID.style.visibility = "hidden";

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
    }
  }
}
