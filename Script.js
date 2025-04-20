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


const imagens = document.querySelectorAll(".galeria img");
const modal = document.getElementById("modal");
const imagemExpandida = document.getElementById("imagemExpandida");
const mensagemImagem = document.getElementById("mensagemImagem");

const mensagens = {
    "Unifecaf.jpg": "Nossa gratidão à UNIFecaf por oferecer um ambiente educacional que estimula a inovação e a prática. A estrutura, os recursos e o apoio institucional foram fundamentais para a realização deste projeto, que representa um marco importante na nossa formação acadêmica.",
    
    "2.jpg": "Agradecemos ao Professor Rodrigo Moreira dos Santos, da disciplina de Cyber Security, por compartilhar seu vasto conhecimento e nos guiar com excelência nas práticas de segurança da informação. Sua orientação foi essencial para a implementação eficaz do firewall e da proteção da nossa rede.",

    "3.jpg": "Nosso reconhecimento ao Professor Nilvan Garcia de Almeida, responsável pela disciplina de Server and Data Center Administration, por seu suporte técnico e pedagógico na criação e configuração do servidor. Seu ensinamento foi crucial para compreendermos a importância da administração de servidores em ambientes profissionais.",

    "4.jpg": "Agradecemos ao Professor Robinson Lemos Bezerra, da disciplina de Computer Network, por nos proporcionar uma base sólida sobre redes de computadores. Seu apoio foi determinante para a estruturação e configuração da rede utilizada em nosso projeto.",

    "5.jpg": "Nossa gratidão ao Professor Robson Rodrigues da Silva, da disciplina de Computer Architecture and Organization, por nos orientar com clareza sobre os fundamentos de hardware e arquitetura. Seu ensinamento foi essencial para a montagem do nosso casemod e para a integração entre os diferentes componentes do projeto.",

    "6.jpg": "Agradecemos imensamente aos integrantes da nossa equipe — Bruno, Fabia, Kayke, Maicon e Rhafael — pelo comprometimento, dedicação e colaboração em todas as etapas deste projeto. Cada contribuição foi essencial para que conseguíssemos transformar ideias em resultados concretos, unindo conhecimento técnico e trabalho em equipe.!"
};

imagens.forEach(img => {
    img.addEventListener("click", () => {
        const nomeArquivo = img.src.split("/").pop();
        imagemExpandida.src = img.src;
        mensagemImagem.textContent = mensagens[nomeArquivo] || "Imagem do projeto.";
        modal.style.display = "flex";
    });
});

function fecharModal() {
    modal.style.display = "none";
}

const modalContent = document.querySelector(".modal-content");

modalContent.addEventListener("mousemove", function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    modalContent.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

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