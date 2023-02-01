const quadroPixel = document.getElementById('pixel-board');
const quadroQuery = document.querySelector('#pixel-board');
const tabelaCores = document.querySelector('#color-palette');
const tabelaElements = document.getElementById('color-palette');
const buttonLimpar = document.getElementById('clear-board');
const pixelQuadro = document.getElementsByClassName('pixel');
const tagBr = document.getElementsByTagName('br');
const buttonQuadro = document.getElementById('generate-board');
const inputTamanho = document.getElementById('board-size');
const corDiv1 = document.querySelector('.div1');
const corDiv2 = document.querySelector('.div2');
const corDiv3 = document.querySelector('.div3');

document.querySelector('.div0').style.backgroundColor = 'black';
document.querySelector('.div1').style.backgroundColor = 'red';
document.querySelector('.div2').style.backgroundColor = 'blue';
document.querySelector('.div3').style.backgroundColor = 'green';

function criaPixels() {
  const novaDiv = document.createElement('div');
  novaDiv.style.display = 'inline-block';
  novaDiv.classList = 'pixel';
  novaDiv.innerText = '';
  novaDiv.style.backgroundColor = 'white';
  quadroPixel.appendChild(novaDiv);
}

function juntarPixels(altura, quantidade) {
  for (let i = 0; i < quantidade; i += 1) {
    criaPixels();

    if (altura > 0) {
      quadroQuery.style.width = (altura * 42) + 'px';
    }
  }
}

window.onload = juntarPixels('5', '25');

function regularAltura(height, width) {
  const quadrados = document.getElementsByClassName('pixel');
  for (let i = 0; i < quadrados.length; i += 1) {
    quadrados.item(i).style.height = height + 'px';
    quadrados.item(i).style.width = width + 'px';
    quadrados.item(i).style.border = '1px solid black';
  }
}

window.onload = regularAltura('40', '40');

tabelaCores.addEventListener('click', function (event) {
  for (let i = 0; i < tabelaCores.childElementCount; i += 1) {
    const comparador = tabelaElements.children.item(i);
    if (comparador.classList.item(2) === 'selected') {
      comparador.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
});

quadroQuery.addEventListener('click', function (event) {
  const teste1 = document.querySelector('.selected');
  const copia = event.target;
  copia.style.backgroundColor = teste1.style.backgroundColor;
});

buttonLimpar.addEventListener('click', function () {
  for (let i = pixelQuadro.length - 1; i >= 0; i -= 1) {
    pixelQuadro[i].remove();
  }

  for (let index = tagBr.length - 1; index >= 0; index -= 1) {
    tagBr[index].remove();
  }

  juntarPixels('5', '25');
  regularAltura('40', '40');
  inputTamanho.value = '';
});

buttonQuadro.addEventListener('click', function () {
  for (let i = pixelQuadro.length - 1; i >= 0; i -= 1) {
    pixelQuadro[i].remove();
  }

  for (let index = tagBr.length - 1; index >= 0; index -= 1) {
    tagBr[index].remove();
  }
  const totalQuadros = (inputTamanho.value ** 2);
  const totalString = totalQuadros.toString();
  const valorFinal = inputTamanho.value;
  if (inputTamanho.value < 1) {
    window.alert('Board inválido!')
  }
  juntarPixels(valorFinal, totalString);
  regularAltura('40', '40');
  inputTamanho.value = '';
});

const valor1 = Math.floor(Math.random() * 255);
const valor2 = Math.floor(Math.random() * 255);
const valor3 = Math.floor(Math.random() * 255);
const valor4 = Math.floor(Math.random() * 255);
const valor5 = Math.floor(Math.random() * 255);
const valor6 = Math.floor(Math.random() * 255);
const valor7 = Math.floor(Math.random() * 255);
const valor8 = Math.floor(Math.random() * 255);
const valor9 = Math.floor(Math.random() * 255);

corDiv1.style.backgroundColor = 'rgb(' + valor1 + ',' + valor2 + ',' + valor3 + ')';
corDiv2.style.backgroundColor = 'rgb(' + valor4 + ',' + valor5 + ',' + valor6 + ')';
corDiv3.style.backgroundColor = 'rgb(' + valor7 + ',' + valor8 + ',' + valor9 + ')';

// código finalizado
