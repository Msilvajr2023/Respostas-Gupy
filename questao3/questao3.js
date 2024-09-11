function calcularMetricasFaturamento(dadosFaturamento) {
   
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let somaTotal = 0;
    let diasComFaturamento = 0;
  
    dadosFaturamento.forEach(dia => {
      if (dia.valor > 0) {
        menorValor = Math.min(menorValor, dia.valor);
        maiorValor = Math.max(maiorValor, dia.valor);
        somaTotal += dia.valor;
        diasComFaturamento++;
      }
    });
  
    const mediaMensal = somaTotal / diasComFaturamento;
  
    const diasAcimaDaMedia = dadosFaturamento.reduce((count, dia) => {
      return dia.valor > mediaMensal ? count + 1 : count;
    }, 0);
  
    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia,
      mediaMensal
    };
  }
  
  const fs = require('fs');
  
  const dadosJson = fs.readFileSync('fs.json');
  const dadosFaturamento = JSON.parse(dadosJson);
  
  const resultado = calcularMetricasFaturamento(dadosFaturamento);
  
  console.log('Menor valor de faturamento:', resultado.menorValor);
  console.log('Maior valor de faturamento:', resultado.maiorValor);
  console.log('Número de dias acima da média:', resultado.diasAcimaDaMedia);
  console.log('Média mensal:', resultado.mediaMensal);