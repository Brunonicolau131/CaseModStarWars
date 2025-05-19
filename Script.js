function galeria() {
    window.location.href = 'galeria.html';
}

function sobre() {
    window.location.href = 'Index.html';
}

function Motivos() {
    window.location.href = 'Motivos.html';
}

function Equipe() {
    window.location.href = 'Equipe.html';
}

function Arcade() {
    window.location.href = 'Arcade.html';
}

function Estrela() {
    window.location.href = 'Estrela.html';
}

function Processo() {
    window.location.href = 'Processocriacao.html';
}

function Agradecimento() {
    window.location.href = 'Agradecimento.html';
}

function GuerraNaEstrelas() {
    window.location.href = 'GuerraNasEstrelas.html';
}

function AjudeChewbacca() {
    window.location.href = 'AjudeChewbacca.html';

}function Asteroides() {
    window.location.href = 'Asteroides.html';
}


function iniciarJogoChewbacca() {
    document.getElementById("conteudoTela").innerHTML = `
        <iframe src="JogoAjudeChewbacca/index.html" allowfullscreen></iframe>
    `;
}

function iniciarJogoAsteroides() {
    document.getElementById("conteudoTela").innerHTML = `
        <iframe src="JogoAsteroides/index.html" allowfullscreen></iframe>
    `;
}

function iniciarJogoGuerra() {
    document.getElementById("conteudoTela").innerHTML = `
        <iframe src="JogoGuerraNasEstrelas/index.html" allowfullscreen></iframe>
    `;
}

function abrir(img) {
    let modal = document.getElementById("maximag");

    modal.style.display = "flex";
    slcimg.src = img.src; 
}

function fechar() {
    document.getElementById("maximag").style.display = "none";
}

function Menumob() {
    document.querySelector(".contheader").classList.toggle("active");
}