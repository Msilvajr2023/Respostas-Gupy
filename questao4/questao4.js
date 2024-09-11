// 1 Dados de faturamento por estado (em reais)
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // 2 Função para calcular o percentual de cada estado
  function calcularPercentualFaturamento(faturamento) {
    // Calcular o faturamento total
    let faturamentoTotal = 0;
    for (const estado in faturamento) {
      faturamentoTotal += faturamento[estado];
    }
  
    // 3 Calcular o percentual de cada estado
    const percentuais = {};
    for (const estado in faturamento) {
      percentuais[estado] = ((faturamento[estado] / faturamentoTotal) * 100).toFixed(2);
    }
  
    return percentuais;
  }
  
  // 4 Chamar a função e exibir os resultados
  const percentuaisPorEstado = calcularPercentualFaturamento(faturamentoPorEstado);
  
  console.log("Percentual de representação de cada estado:");
  for (const estado in percentuaisPorEstado) {
    console.log(`${estado}: ${percentuaisPorEstado[estado]}%`);
  }