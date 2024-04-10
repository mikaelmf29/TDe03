const carrossel = document.querySelector(".carrossel");
const imagens = carrossel.querySelectorAll("img");
const setaEsquerda = carrossel.querySelector(".seta-esquerda");
const setaDireita = carrossel.querySelector(".seta-direita");
const campoTexto = document.getElementById('campo');

const botaoFoto = document.getElementById('botao-foto');
const imagemAleatoria = document.getElementById('imagem-aleatoria');

const imagensalea = [
  
  'fotos/nirvana1.jpg',
  'fotos/nirvana2.jpg',
  'fotos/nirvana4.jpg',
  'fotos/nirvana5.jpg',
  'fotos/nirvana6.jpg',
  'fotos/nirvana7.jpg',
  'fotos/nirvana8.jpg',
  'fotos/nirvana9.jpg',
  'fotos/nirvana10.jpg',
  'fotos/nirvana11.jpg',
];

botaoFoto.addEventListener('click', function() {
  const imagemAleatoriaIndex = Math.floor(Math.random() * imagensalea.length);
  const imagemAleatoriaSrc = imagensalea[imagemAleatoriaIndex];

  const novaImagem = document.createElement('img');
  novaImagem.src = imagemAleatoriaSrc;
  
  imagemAleatoria.innerHTML = '';
  imagemAleatoria.appendChild(novaImagem);
  
});


let indiceAtual = 0;

function mostrarSetaEsquerda() {
  setaEsquerda.style.display = "block";
}

function esconderSetaEsquerda() {
  setaEsquerda.style.display = "none";
}

function mostrarSetaDireita() {
  setaDireita.style.display = "block";
}

function esconderSetaDireita() {
  setaDireita.style.display = "none";
}

function trocarImagem(novaImagem) {
  imagens[indiceAtual].classList.remove("ativa");
  imagens[novaImagem].classList.add("ativa");
  indiceAtual = novaImagem;

  if (indiceAtual === 0) {
    esconderSetaEsquerda();
  } else {
    mostrarSetaEsquerda();
  }

  if (indiceAtual === imagens.length - 1) {
    esconderSetaDireita();
  } else {
    mostrarSetaDireita();
  }
}

setaEsquerda.addEventListener("click", () => {
  trocarImagem(indiceAtual - 1);
});

setaDireita.addEventListener("click", () => {
  trocarImagem(indiceAtual + 1);
});


imagens[0].classList.add("ativa");

mostrarSetaDireita();

