const pantalla = document.querySelector('#resultado');
const botones = document.querySelectorAll('button');

let operando1 = 0;
let operando2 = 0;
let operador = '';

function calcular() {
  switch (operador) {
    case '+':
      resultado = operando1 + operando2;
      break;
    case '-':
      resultado = operando1 - operando2;
      break;
    case '*':
      resultado = operando1 * operando2;
      break;
    case '/':
      if (operando2 === 0) {
        alert('No se puede dividir por cero');
        return;
      }
      resultado = operando1 / operando2;
      break;
  }

  pantalla.textContent = resultado;
}

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    switch (boton.id) {
      case '0':
        ingresarNumero(0);
        break;
      case '1':
        ingresarNumero(1);
        break;
      case '2':
        ingresarNumero(2);
        break;
      case '3':
        ingresarNumero(3);
        break;
      case '4':
        ingresarNumero(4);
        break;
      case '5':
        ingresarNumero(5);
        break;
      case '6':
        ingresarNumero(6);
        break;
      case '7':
        ingresarNumero(7);
        break;
      case '8':
        ingresarNumero(8);
        break;
      case '9':
        ingresarNumero(9);
        break;
      case 'mas':
        operador = '+';
        break;
      case 'menos':
        operador = '-';
        break;
      case 'por':
        operador = '*';
        break;
      case 'div':
        operador = '/';
        break;
      case 'igual':
        calcular();
        break;
    }
  });
});

function ingresarNumero(numero) {
  if (operador === '') {
    operando1 = numero;
  } else {
    operando2 = numero;
  }
}
