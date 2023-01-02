// Let target ours variable


let message = document.querySelector('.message');
let playerOne = document.querySelector('#playerOne');
let playerTwo = document.querySelector('#playerTwo');
const play = document.querySelector('.startButton');
const nameField = document.querySelector('.nameField');
const spielFeld = document.querySelector('.spielFeld');
let playerOneOnDice = document.querySelector('.playerOneOnDice');
let playerTwoOnDice = document.querySelector('.playerTwoOnDice');
let dice = document.querySelector('dice')

// console.log(playerOneOnDice);
// console.log(playerTwoOnDice);
// console.log(playerOne);
// console.log(playerTwo);


let playFunction = (e) => {
    message.innerHTML = '⚔️💪️';
    play.style.display = 'none';
    nameField.style.display = 'none';
    spielFeld.style.display = 'flex';
    playerOneOnDice.innerHTML = playerOne.value;
    playerTwoOnDice.innerHTML = playerTwo.value;
}


let countOne = 0;
let countTwo = 0;
const result = [];



let throwFunction = (e) =>{
    let numOne = 0;
    let numTwo = 0;
    if(e.target.id == 'playerPlayButtonOne'){
        countOne++
        numOne = Math.floor(Math.random()*6)+1;
        img1.src = `/images/dice${numOne}.png`;
        result[0] = numOne;
    }
    if(e.target.id == 'playerPlayButtonTwo'){
        countTwo++
        numTwo = Math.floor(Math.random()*6)+1;
        img2.src = `/images/dice${numTwo}.png`
        result[1] = numTwo;
    }
    if(countOne === countTwo || countTwo === countOne){
               if(result[0] > result[1]){message.innerHTML= `Winner: ${playerOne.value}🎉️😊️`}
               if(result[1] > result[0]){message.innerHTML= `Winner: ${playerTwo.value}🎉️😊️`}

           }
    else {
    message.innerHTML = '⚔️💪️';

    }
    
}




spielFeld.addEventListener('click', throwFunction)
play.addEventListener('click', playFunction)

