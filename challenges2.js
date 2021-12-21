// Desafio 10
function techList(tech, name) {
  
  let array = [];
  tech.sort();
  if (tech.length === 0) {
    return "Vazio!";
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      let objetos = {};
      objetos.tech = tech[index];
      objetos.name = name;
      array.push(objetos);
    }
    return array;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  if(array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let contagem = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        contagem += 1;
      }
    }
    // ajuda de um amigo para resolver essa parte do código
    if (contagem >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    contagem = 0;
  }

  
  return '(' + array[0] + array[1] + ')' + ' ' +  array[2] + array[3] + array[4] + array[5] + array [6] + '-' + array[7] + array[8] + array[9] + array[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let linhaA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)
  
  if (linhaA) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(drinks) {
  // criei uma variavel para o numero de drinks e outra para o tanto de copos de agua

  let numeroDeDrinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let coposDeAgua = 0;

  // percorrer para comparar os valores de drinks e a variavel que criei (tive ajuda nessa parte)

  for (let index of drinks) {
    for (let index2 = 0; index2 < numeroDeDrinks.length; index2 += 1) {
      if (index == numeroDeDrinks[index2]) {
        coposDeAgua += numeroDeDrinks[index2];
      }
    }
  }
  
  // numero de copos de água

    if (coposDeAgua === 1) {
      return coposDeAgua + ' copo de água';
    } else if (coposDeAgua > 1) {
      return coposDeAgua + ' copos de água'
    }
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
