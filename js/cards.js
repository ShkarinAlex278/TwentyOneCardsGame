// console.log("Cards..");

function cards(idCard, cardArray, repit, type) {
  console.log("idCard", idCard);
  console.log("cardArray", cardArray);
  console.log("repit", repit);
  console.log("type", type);
  class Card {
    constructor(id, model, scale) {
      this.id = id;
      this.model = model;
      this.scale = scale;
    }
  }

  const b6 = new Card(1, "b6", 6);
  const b7 = new Card(2, "b7", 7);
  const b8 = new Card(3, "b8", 8);
  const b9 = new Card(4, "b9", 9);
  const b10 = new Card(5, "b10", 10);
  const bV = new Card(6, "bV", 2);
  const bD = new Card(7, "bD", 3);
  const bK = new Card(8, "bK", 4);
  const bT = new Card(9, "bT", 11);

  const c6 = new Card(10, "c6", 6);
  const c7 = new Card(11, "c7", 7);
  const c8 = new Card(12, "c8", 8);
  const c9 = new Card(13, "c9", 9);
  const c10 = new Card(14, "c10", 10);
  const cV = new Card(15, "cV", 2);
  const cD = new Card(16, "cD", 3);
  const cK = new Card(17, "cK", 4);
  const cT = new Card(18, "cT", 11);

  const p6 = new Card(19, "p6", 6);
  const p7 = new Card(20, "p7", 7);
  const p8 = new Card(21, "p8", 8);
  const p9 = new Card(22, "p9", 9);
  const p10 = new Card(23, "p10", 10);
  const pV = new Card(24, "pV", 2);
  const pD = new Card(25, "pD", 3);
  const pK = new Card(26, "pK", 4);
  const pT = new Card(27, "pT", 11);

  const t6 = new Card(28, "t6", 6);
  const t7 = new Card(29, "t7", 7);
  const t8 = new Card(30, "t8", 8);
  const t9 = new Card(31, "t9", 9);
  const t10 = new Card(32, "t10", 10);
  const tV = new Card(33, "tV", 2);
  const tD = new Card(34, "tD", 3);
  const tK = new Card(35, "tK", 4);
  const tT = new Card(36, "tT", 11);

  let myCardArray = [
    b6,
    b7,
    b8,
    b9,
    b10,
    bV,
    bD,
    bK,
    bT,
    c6,
    c7,
    c8,
    c9,
    c10,
    cV,
    cD,
    cK,
    cT,
    p6,
    p7,
    p8,
    p9,
    p10,
    pV,
    pD,
    pK,
    pT,
    t6,
    t7,
    t8,
    t9,
    t10,
    tV,
    tD,
    tK,
    tT,
  ];

  console.log("myBankScale before loop..", myBankScale);

  if (type) {
    // Player steck
    for (let i = 0; i <= 35; i++) {
      let scale;
      if (myCardArray[i].id === window.removeNumber) {
        //   console.log("!!!-", myCardArray[i].model);
        //   console.log("repit", repit);

        switch (repit) {
          case 1:
            let openCard = document.getElementById("bankCardDeck1");
            openCard.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            myPlayerScale = myPlayerScale + myCardArray[i].scale;
            //   console.log("bankScale1", myBankScale);
            scale = document.getElementById(
              "bankScale"
            ).innerHTML = `${myPlayerScale}`;
            //   scale.getElementById("bankScale").color = "green";
            break;
          case 2:
            let openCard2 = document.getElementById("bankCardDeck2");
            openCard2.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            myPlayerScale = myPlayerScale + myCardArray[i].scale;
            scale = document.getElementById(
              "bankScale"
            ).innerHTML = `${myPlayerScale}`;
            break;
          case 3:
            let openCard3 = document.getElementById("bankCardDeck3");
            openCard3.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            myPlayerScale = myPlayerScale + myCardArray[i].scale;
            scale = document.getElementById(
              "bankScale"
            ).innerHTML = `${myPlayerScale}`;
            break;
          case 4:
            let openCard4 = document.getElementById("bankCardDeck4");
            openCard4.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            //   console.log("myCardArray[i].scale 2", myCardArray[i].scale);
            myPlayerScale = myPlayerScale + myCardArray[i].scale;
            // console.log("bankScale4", myBankScale);
            scale = document.getElementById(
              "bankScale"
            ).innerHTML = `${myPlayerScale}`;
            break;
          case 5:
            let bankCardDeck5 = document.getElementById("bankCardDeck5");
            bankCardDeck5.setAttribute(
              "src",
              `/image/${myCardArray[i].model}.gif`
            );
            myPlayerScale = myPlayerScale + myCardArray[i].scale;
            scale = document.getElementById(
              "bankScale"
            ).innerHTML = `${myPlayerScale}`;
            break;
        }

        if (myPlayerScale > 21) {
          scale = document.getElementById("bankScale");
          scale.innerHTML = `You are lose!!!`;
          scale.style.color = "red";

          // let lose = window.confirm("You are lose");
          // if (lose == true) {
          //   location.reload();
          // } else {
          //   location.reload();
          // }
        }
      }
    } // ens for
  } // end if
  else {
    // Bank steck

    console.log("Bank card move..");

    for (let i = 0; i <= 35 - window.count; i++) {
      let scale;
      //   console.log("I..", i);
      if (myCardArray[i].id === window.removeNumber) {
        console.log("!!!-", myCardArray[i].model);
        console.log("repit", repit);

        switch (repit) {
          case 1:
            let openCard = document.getElementById("bankCardDeck6");
            openCard.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            console.log("myCardArray[i].scale 1", myCardArray[i].scale);
            myBankScale = myBankScale + myCardArray[i].scale;
            checkScale();
            break;
          case 2:
            let openCard2 = document.getElementById("bankCardDeck7");
            openCard2.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            myBankScale = myBankScale + myCardArray[i].scale;
            checkScale();
            break;
          case 3:
            let openCard3 = document.getElementById("bankCardDeck8");
            openCard3.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            myBankScale = myBankScale + myCardArray[i].scale;
            checkScale();
            break;
          case 4:
            let openCard4 = document.getElementById("bankCardDeck9");
            openCard4.setAttribute("src", `/image/${myCardArray[i].model}.gif`);
            myBankScale = myBankScale + myCardArray[i].scale;
            checkScale();
            break;
          case 5:
            let bankCardDeck5 = document.getElementById("bankCardDeck10");
            bankCardDeck5.setAttribute(
              "src",
              `/image/${myCardArray[i].model}.gif`
            );
            myBankScale = myBankScale + myCardArray[i].scale;
            checkScale();
            break;
        }

        // if (myBankScale >= 15 || myBankScale <= 21) {
        //   scale = document.getElementById("PlayerScale");
        //   scale.style.color = "Uhhhaaa";

        // let lose = window.confirm("You are lose");
        // if (lose == true) {
        //   location.reload();
        // } else {
        //   location.reload();
        // }
        // }
      }
    } // ens for
  }
  console.log("Card done..");
}

function checkScale() {
  // console.log("checkScale() works..");
  // console.log("myBankScale..", myBankScale);
  if (myBankScale > 21) {
    // console.log("myBankScale > 21", myBankScale);
    scale = document.getElementById("PlayerScale").innerHTML = `${myBankScale}`;
    let result = (document.getElementById("bigHeader").innerHTML =
      "Player Win!!!");
  } else {
    if (myBankScale >= 17 && myBankScale <= 21) {
      scale = document.getElementById(
        "PlayerScale"
      ).innerHTML = `${myBankScale}`;

      if (myPlayerScale > myBankScale) {
        // console.log("myBankScale Pl win", myBankScale);
        // console.log("myPlayerScale Pl win", myPlayerScale);
        scale = document.getElementById(
          "PlayerScale"
        ).innerHTML = `${myBankScale}`;
        let result = (document.getElementById("bigHeader").innerHTML =
          "Player Win!!!");
      } else {
        // console.log("myBankScale Bank win", myBankScale);
        // console.log("myPlayerScale bank win", myPlayerScale);
        scale = document.getElementById(
          "PlayerScale"
        ).innerHTML = `${myBankScale}`;
        let result = (document.getElementById("bigHeader").innerHTML =
          "Bank Win!");
      }
    } else {
      scale = document.getElementById(
        "PlayerScale"
      ).innerHTML = `${myBankScale}`;
      setTimeout("BankGame()", 1000);
    }
  }
}
