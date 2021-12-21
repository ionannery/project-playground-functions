// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = 0;
  resultado = (base * height) / 2;

  return resultado;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(array) {
  array = [array[array.length - 1], array[0]];
  return array.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  // pesquisei sobre a função Math.max em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

  let maximo = Math.max(...numeros);
  let resultado = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maximo) {
      resultado += 1;
    }
  }
  return resultado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // pesquisei sobre a função Math.abs em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  if (gato1 < gato2) {
    return 'cat1';
  } if (gato2 < gato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let arrayNovo = [];
  
  for (let index = 0; index < numeros.length; index+=1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      arrayNovo.push("fizzBuzz");
    } else if (numeros[index] % 3 === 0) {
      arrayNovo.push("fizz");
    } else if (numeros[index] % 5 === 0) {
      arrayNovo.push("buzz");
    } else {
      arrayNovo.push("bug!");
    }
  }
  return arrayNovo;
}

// Desafio 9
function encode(string) {
  // pesquisei sobre a função replace e aprendi que ela percorre a string e substitui algum caracter, e utilizando o /(string que quer substituir)/g, (string que quer colocar), posso substituir mais de uma string.          
  
  //link de pesquisa : https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176

  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  
  return string;
};
