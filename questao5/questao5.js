function inverterString(str) {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaString += str[i];
    }
    return novaString;
  }
  
  // Exemplo de uso:
  const minhaString = "agav a oreuq ,ypuG álO!";
  const stringInvertida = inverterString(minhaString);
  console.log(stringInvertida);