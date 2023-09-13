let firstCard = 0;
let secondCard = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;
let cards = [];
let sum = 0;

let messageEl = document.getElementById("question");
let sumel = document.getElementById("sum-El");
// let sumel = document.querySelector("#sum-El"); This thing is also same as line number 9 it will search for first css id having name sum-El and store it in the variable. Query selector basically selects a class or id from the css.

let cardsel = document.getElementById("cards-El");

let player = {
    name: "Vineet: ",
    chips: "$100"
}

    let playerEl = document.getElementById("player-el");
    playerEl.textContent = player.name + " " + player.chips;

function startGame()
{
    isAlive = true;
    firstCard = getrandomcard();
    secondCard = getrandomcard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame()
{
    cardsel.textContent = "Cards: " + cards[0] + " " + cards[1] + " ";
    for(let i=2;i<cards.length;i++)
    {
        cardsel.textContent += cards[i] + " ";
    }
    sumel.textContent = "Sum: " + sum;
    if(sum < 21)
    {
        message = "Do you want to pull another card?";
    }

    else if(sum == 21)
    {
        message = "Wohoo! You got a BlackJack";
        hasBlackJack = true;
    }

    else 
    {
        message = "Better Luck next time buddy.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard()
{
        if (isAlive && sum < 21) {
        let newcard = getrandomcard();
        sum = sum + newcard;
        cardsel.textcontent = "Sum: " + sum;
        cards.push(newcard); 
        renderGame();
    }

}

function getrandomcard()
{
    let randomnumber = Math.ceil(Math.random()*13);
    if(randomnumber === 1) randomnumber = 11;
    else if(randomnumber === 11 || randomnumber===12 || randomnumber===13) randomnumber = 10;
    return randomnumber;
}