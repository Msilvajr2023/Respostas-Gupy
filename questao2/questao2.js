function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let proximo;

    while (b <= numero) {
        proximo = a + b;
        a = b;
        b = proximo;

        if (b === numero) {
            return true;
        }
    }

    return false;
}

const numeroInformado = 1;
const pertence = pertenceFibonacci(numeroInformado);

if (pertence) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}