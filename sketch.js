// Variaves da bolinha
let positionX = 300;
let positionY = 200;
let diameter = 20;
let raio = diameter / 2

// variaveis de velocidade
let velocityX = 6
let velocityY = 6
let velocidadeYoponente;

// variaveis da raquete
let positionXraqueteOponente = 585;
let positionYraqueteOponente = 150;
let positionXraquete = 5;
let positionYraquete = 150;
let widthRaquete = 10;
let heightRaquete = 90;
let colidiu = false;

// placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

// sons do jog

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("audios/trilha.wav")
  ponto = loadSound("audios/Coin.wav")
  raquetada = loadSound("audios/raquetada.wav")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBorda();                                                           colisaoRaqueteBiblioteca(positionXraquete,positionYraquete);
  colisaoRaqueteBiblioteca(positionXraqueteOponente,                         positionYraqueteOponente);  
  mostraRaquete(positionXraquete,positionYraquete);                           mostraRaquete(positionXraqueteOponente,                                     positionYraqueteOponente)
  movimentaRaquete();  
  movimentaRaqueteOponente();
  incluiPlacar();
   bolinhaNaoFicaPresa()
}

function mostraRaquete(x,y){
  rect(x, y, widthRaquete, heightRaquete);

} 

function mostraBolinha(){
  circle(positionX,positionY,diameter)
}

function movimentaBolinha(){
  positionX += velocityX
  positionY += velocityY
}

function verificaBorda(){
  if(positionX + raio> width || positionX - raio < 0){
    velocityX *= -1;
    
  }
  
  if(positionY + raio > height || positionY - raio < 0){
    velocityY *= -1;
  }
  
  
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
   positionYraquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
   positionYraquete += 10; 
  }
}

function colisaoRaqueteBiblioteca(x,y){

  colidiu = collideRectCircle(x,y, widthRaquete, heightRaquete, positionX, positionY, raio);

  if(colidiu){
   velocityX *= -1;
    raquetada.play();
  
  }
  
  
}

function movimentaRaqueteOponente(){
  velocidadeYoponente = positionY - positionYraqueteOponente - heightRaquete / 2 - 47
  
  positionYraqueteOponente += velocidadeYoponente
  
  /*
  if(keyIsDown(87)){
   positionYraqueteOponente -= 10;
  }
  if(keyIsDown(83)){
   positionYraqueteOponente += 10; 
  }
  */
  
}

function incluiPlacar(){
  textAlign(CENTER)
  textSize(15)
  fill(color(153,51,153));
  rect(150,10,40,26);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(153,51,153));
  rect(450,10,40,26);
  fill(255);
  text(pontosOponente, 470, 26)
   
  if (positionX > 590){
    meusPontos += 1;
    ponto.play();
  }
  
  if (positionX < 10){
    pontosOponente += 1;
    ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
    if (positionX - raio < 0){
    positionX = 23
    }
}

