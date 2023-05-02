
function desenhaQuadrado(x, y, tamanho, cor) {
  let tela = document.querySelector('canvas');
  let pincel = tela.getContext('2d');

  pincel.fillStyle = cor;
  pincel.fillRect(x, y, tamanho, tamanho);
  pincel.stokeStyle = 'black';
  pincel.stokeRect(x, y, tamanho, tamanho);
}

function desenhaTexto(texto, x, y) {
  let tela = document.querySelector('canvas');
  let pincel = tela.getContext('2d');

  pincel.font = '20px Georgia';
  pincel.fillStyle = 'black';
  pincel.fillText(texto, x, y);
}

desenhaTexto("Qual é a fração?", 50, 30);

var y = 50; 

desenhaQuadrado(50, y, 100, 'green');
desenhaQuadrado(150, y, 100, 'green');
desenhaQuadrado(250, y, 100, 'green');
desenhaQuadrado(350, y, 100, 'white');