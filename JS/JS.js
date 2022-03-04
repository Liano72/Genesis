// 0 - red
// 1 - yellow
// 2 - green
// 3 - blue

//Principais Variaveis 
let order = [];
let clickdOrder = [];
let score = 0;

const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');

//Cria a ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    });
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 250);
}

// Check se a ordem de clicks é a correta
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! iniciando próximo nivel!`);
        nextLevel();
    }
}

//Função para o click do player
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função que retorna a cor

let createColorElement = (color) => {
    if(color == 0){
        return red;
    }else if(color == 1){
        return yellow;
    }else if(color == 2){
        return green;
    }else if(color == 3){
        return blue;
    }
}

//Função próximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função GameOver

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}


//Função inicio do jogo

let playGame = () => {
    score = 0;
    alert(`Bem Vindo ao Gênesis! Iniciando novo jogo!`);

    nextLevel();
}

//Evento de clicks
red.onclick = () => click(0);
yellow.onclick = () => click(1);
green.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicio
playGame();