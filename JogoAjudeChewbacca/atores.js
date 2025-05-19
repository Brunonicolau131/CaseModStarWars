let pontos1 = 0
let pontos2 = 0
let colidiu1 = false


let yAtor1 = 530
let xAtor1 = 300
let alturaAtores = 70


function atores(){
  image(ator1,xAtor1,yAtor1, alturaAtores,alturaAtores)
 yAtor1 = constrain(yAtor1,-150,570)

}

function movimentaAtores(){
  if (keyIsDown(87))
    {yAtor1 -= 3}
  if(keyIsDown(83))
    {yAtor1 += 3}
  
}
function colisaoAtor1(){
 
  for(let i = 0;i < imagemCarros.length; i++){ 
  colidiu1 =collideRectRect(xCarros[i],yCarros[i],cCarros[i],aCarros[i],xAtor1,yAtor1,20,35) 
    if(colidiu1){
      yAtor1 = 530
      colidiu.play()}
    if(colidiu1 && pontos1 > 0 ){
      pontos1 -= 1 }
   }

}

function pontos(){
  textAlign(CENTER)
  textSize(40)
  fill(color(255,255,255))
  text(pontos1,20,50)
}
function marcaPontos(){
  if (yAtor1 < -70){
    pontos1 += 1
    yAtor1 = 530
    ponto.play()
    
  }  
}

function verificaGif() {
  if (yAtor1 <= -70 && podeAtivarGif) {
    mostrarGif = true;
    podeAtivarGif = false;

    setTimeout(() => {
      mostrarGif = false;
      podeAtivarGif = true;
    }, 2000);
  }
  if (mostrarGif) {
    image(gifTransicao,0, 0, width, height);
}
}