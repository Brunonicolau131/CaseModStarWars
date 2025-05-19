const modal = document.getElementById("modal");
const imagemExpandida = document.getElementById("imagemExpandida");
const mensagemImagem = document.getElementById("mensagemImagem");
const closeBtn = modal.querySelector(".close");

const mensagens = {
     "Unifecaf.jpg": "Nossa gratidão à UNIFecaf por oferecer um ambiente educacional que estimula a inovação e a prática. A estrutura, os recursos e o apoio institucional foram fundamentais para a realização deste projeto, que representa um marco importante na nossa formação acadêmica.",
    
    "Rodrigo.png": "Agradecemos ao Professor Rodrigo Moreira dos Santos, da disciplina de Cyber Security, por compartilhar seu vasto conhecimento e nos guiar com excelência nas práticas de segurança da informação. Sua orientação foi essencial para a implementação eficaz do firewall e da proteção da nossa rede.",

    "Nilvan.png": "Nosso reconhecimento ao Professor Nilvan Garcia de Almeida, responsável pela disciplina de Server and Data Center Administration, por seu suporte técnico e pedagógico na criação e configuração do servidor. Seu ensinamento foi crucial para compreendermos a importância da administração de servidores em ambientes profissionais.",

    "Robinson.png": "Agradecemos ao Professor Robinson Lemos Bezerra, da disciplina de Computer Network, por nos proporcionar uma base sólida sobre redes de computadores. Seu apoio foi determinante para a estruturação e configuração da rede utilizada em nosso projeto.",

    "Robson0.png": "Nossa gratidão ao Professor Robson Rodrigues da Silva, da disciplina de Computer Architecture and Organization, por nos orientar com clareza sobre os fundamentos de hardware e arquitetura. Seu ensinamento foi essencial para a montagem do nosso casemod e para a integração entre os diferentes componentes do projeto.",

    "equipe.jpg": "Agradecemos imensamente aos integrantes da nossa equipe — Bruno, Fabia, Kayke, Maicon e Rhafael — pelo comprometimento, dedicação e colaboração em todas as etapas deste projeto. Cada contribuição foi essencial para que conseguíssemos transformar ideias em resultados concretos, unindo conhecimento técnico e trabalho em equipe.!"

};

const imagensGaleria = document.querySelectorAll(".galeria img");

imagensGaleria.forEach(img => {
    img.addEventListener("click", () => {
        const src = img.src;
        const nomeArquivo = src.split("/").pop(); 

        imagemExpandida.src = src;
        mensagemImagem.textContent = mensagens[nomeArquivo] || "Imagem do projeto.";

        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const modalContent = modal.querySelector(".modal-content");

modalContent.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    modalContent.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});
