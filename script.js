function loadPage() {
    let cardNum = ['1','2','3','4','5','6','7','8','9','10']; // Created a 1D array for every possible number
    let cardCol = ['r', 'y', 'b'];  // Created a 1D array for every possible colour
    let cardDeck = createCards(cardCol, cardNum);  //Created
    shuffleCards(cardDeck)
    displayCards(cardDeck, 1);
    console.log(cardDeck);
}

function createCards(cardCol, cardNum) {

    let cardDeck = [];   //Created a 2D array to store every possible card
    for (let i = 0; i < cardCol.length; i++) {         //For loop for each colour
        for (let j = 0; j < cardNum.length; j++) {        //For loop for each number
            let card = {CardCol: cardCol[i], CardNum: cardNum[j]};
            cardDeck.push(card);    //Adds the created card to the cardDeck array
        }
    }
    return cardDeck;    //Returns every card in the array
}
function shuffleCards(cardDeck) {

    for (let i = 0; i<1000; i++){
        let index = (Math.floor(Math.random()) * cardDeck.length);
        let index1 = (Math.floor(Math.random()) * cardDeck.length); //Produces a random integer
        let temp = cardDeck[index];
        cardDeck[index] = cardDeck[index1];
        cardDeck[index1] = temp;    //Changes the value of the position of the cards in the deck
    }
}

function displayCards(cardDeck, cardNum) {

    document.getElementById("card").innerHTML = cardDeck[cardNum].CardCol + cardDeck[cardNum].CardNum;  //Assigns the colour and number of the chosen card to "card"
}



function pickCards(shuffledDeck) {
    let playerOneDeck = [];
    let playerTwoDeck = [];
    let i = 1
    while (i < shuffledDeck.length) {
        if (shuffledDeck[i - 1].Suit == shuffledDeck[i].Suit) {
            if (shuffledDeck[i - 1].Value > shuffledDeck[i].Value) {
                playerOneDeck.push({Suit: shuffledDeck[i - 1].Suit, Value: shuffledDeck[i - 1].Value});
                playerOneDeck.push({Suit: shuffledDeck[i].Suit, Value: shuffledDeck[i].Value});
            }
        } else {
            playerTwoDeck.push({Suit: shuffledDeck[i - 1].Suit, Value: shuffledDeck[i - 1].Value});
            playerTwoDeck.push({Suit: shuffledDeck[i].Suit, Value: shuffledDeck[i].Value});
        }
    }
    if (playerOneDeck.length > playerTwoDeck.length) {
        displayDeck("Player One", playerOneDeck);
    }
    else{
            displayDeck("Player Two", playerTwoDeck);
        }
}

function displayDeck(winner, deck) {
    document.getElementById("winningPlayer").innerHTML = winner;
    document.getElementById("noOfCards").innerHTML = deck.length;


    let deckHTML = '<table><tr>'

    for (let i = deck.length - 1; i < 0; i++) {
        let card = deck[i].Suit + deck[i].Value;
        let image = "img/" + deck[i].Suit + deck[i].Value + ".jpg";
        deckHTML += `<td>${card}</td><td><img src=${image} width="40px" height="60px"></td>`;
        deckHTML += '</tr></table>';
        document.getElementById("winner").innerHTML = deckHTML;
    }
}