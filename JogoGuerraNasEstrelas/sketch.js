//Variáveis Da Bolinha
let xBolinha = 500;
let yBolinha = 300;
let dBolinha = 20;
let raio = dBolinha / 2;

let vxBolinha = 9;
let vyBolinha = 11;

//Variáveis Da Raquete1
let xRaquete = -30;
let yRaquete = 258;
let aRaquete = 150;
let cRaquete = 20;

//Variáveis Da Raquete2
let xRaquete2 = 940;
let yRaquete2 = 258;

//Pontos
let pontosP1 = 0;
let pontosP2 = 0;
let errar = 0;

function preload(){
 ponto = loadSound("ponto.mp3")
  raquete = loadSound("raquete.mp3")
  trilha = loadSound("trilha.mp3")

  imgSabre1 = loadImage("sabre0.png");
  imgSabre2 = loadImage("sabre4.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  trilha.loop()
  
}

function draw() {
  background(0);
  mostraObjetos();
  movimentaBolinha();
  movimentoRaquete1Player();
  //movimentoRaquete2Players();
  //movimento0Player();
  colisaoDeObjetos();
  placar();
  resolucaoDeBug();
}


function mostraObjetos(){
  circle(xBolinha, yBolinha, dBolinha);
  image(imgSabre1, xRaquete, yRaquete, cRaquete * 5, aRaquete); // multiplica largura para ajustar se necessário
  image(imgSabre2, xRaquete2, yRaquete2, cRaquete * 5, aRaquete);
  rect(width / 2, 0, 2, height);
  fill(0);
  arc(width / 2 + 1, height / 2, 50, 50, 0, PI + PI);
}  

function movimentaBolinha(){
 xBolinha += vxBolinha;
 yBolinha += vyBolinha;
}

function movimentoRaquete1Player(){
  if (keyIsDown(87))
    {yRaquete -= 7}
  if(keyIsDown(83))
    {yRaquete += 7} 
  
  
movimentoP2 = yBolinha - yRaquete2 - aRaquete / 2 - errar;
yRaquete2 += movimentoP2
  
   if (pontosP2 >= pontosP1)
   {errar = 100 }
   if(pontosP1 > pontosP2)
    {errar = 0 }
  
yRaquete = constrain(yRaquete,5 ,450)
yRaquete2 = constrain(yRaquete2,5 ,450)
}  

function movimentoRaquete2Players(){
  if (keyIsDown(87))
    {yRaquete -= 7}
  if(keyIsDown(83))
    {yRaquete += 7} 
  
  if (keyIsDown(UP_ARROW))
    {yRaquete2 -= 7}
  if(keyIsDown(DOWN_ARROW))
    {yRaquete2 += 7}
  
yRaquete = constrain(yRaquete,5 ,600)
yRaquete2 = constrain(yRaquete2,5 ,600)
}

function movimento0Player(){
 movimentoP1 = yBolinha - yRaquete - aRaquete / 2 - -20;
yRaquete += movimentoP1
  
  movimentoP2 = yBolinha - yRaquete2 - aRaquete / 2 - 20;
yRaquete2 += movimentoP2
  
yRaquete = constrain(yRaquete,5 ,310)
yRaquete2 = constrain(yRaquete2,5 ,310)
  
  
  
}

function colisaoDeObjetos(){
  if (xBolinha > width || xBolinha < 0)
    {vxBolinha *= -1 }
  if (yBolinha > height || yBolinha < 0)
    {vyBolinha *= -1 }
  
    colidiu = collideRectCircle(20, yRaquete,cRaquete,aRaquete, xBolinha,yBolinha,raio);
  if (colidiu)
  {vxBolinha *= -1
   raquete.play()}
    
    colidiu2 = collideRectCircle(xRaquete2, yRaquete2,cRaquete,aRaquete, xBolinha,yBolinha,raio);
  if (colidiu2)
  {vxBolinha *= -1
  raquete.play()}
}

function placar(){
    stroke(255);
    textAlign(CENTER);
    textSize(24);
    fill(0, 0, 255);
    rect(425, 10 , 50, 30);
    rect(525, 10 , 50, 30);
    fill(255);
    text(pontosP1, 450, 32);
    text(pontosP2, 550, 32);
  
  
    if (xBolinha < 0) {
      pontosP2 += 1;
      ponto.play();
      xBolinha = width / 2;
    }
    
    if (xBolinha > width) {
      pontosP1 += 1;
      ponto.play();
      xBolinha = width / 2;
    }
  }

function resolucaoDeBug(){
  if (xBolinha < 0)
     {xBolinha = 30}

  if (xBolinha > width) {
    xBolinha = width - 30;
 }
  
}
