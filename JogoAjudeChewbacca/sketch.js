let cenario;
let imagemCarros;
let gifTransicao;
let mostrarGif = false;
let podeAtivarGif = true;


function preload(){
  cenario = loadImage("imagens/plano_de_fundo_game.jpg")

  nave1 = loadImage("imagens/ship3-semfundo.png")
  nave2 = loadImage("imagens/ship-semfundo.png")
  nave3 = loadImage("imagens/ship-semfundo.png")
  nave4 = loadImage("imagens/ship2-semfundo.png")
  nave5 = loadImage("imagens/ship3-semfundo.png")
  nave6 = loadImage("imagens/ship2-semfundo.png")
  
  imagemCarros = [nave1, nave2, nave3, nave4, nave5, nave6];
  
  ator1 = loadImage("imagens/chewbacca_space_ship4-semfundo.png")
  
  gifTransicao = loadImage("imagens/transicao.gif");
  
  colidiu = loadSound("sons/colidiu.mp3")
  trilha = loadSound("sons/trilha.mp3")
  ponto = loadSound("sons/pontos.wav")
   
}


function setup() {
  createCanvas(windowWidth, windowHeight);;
  trilha.loop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // redimensiona se a janela mudar
}

function draw() {
  background(cenario);
  atores();
  carros();
  movimentaCarros();
  movimentaAtores();
  loopDosCarros();
  colisaoAtor1();
  pontos();
  verificaGif();
  marcaPontos();
 
}

