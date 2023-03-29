
function grafico() {
  const isActive = update()
  //console.log(isActive);
  //console.log(tabela.rows[3].cells[3].innerHTML);
  let xData = []
  let yData = []
  let j = 0
  for (let i = 1; i < tabela.rows.length; i++) {
    if (isActive[i] == true) {
      xData[j] = parseFloat(tabela.rows[i].cells[3].innerHTML)
      yData[j] = parseFloat(tabela.rows[i].cells[2].innerHTML)
      j++
    }
    //console.log(tabela.rows[i].cells[3].innerHTML);

  }

  const sd = ss.standardDeviation(yData)
  console.log(sd);

  //const xData = [1, 2, 3, 4, 5];

  // Dados do eixo y
  //const yData = [10, 20, 30, 40, 50];

  // Criar o contexto do canvas
  const canvas = document.getElementById('grafico');
  const ctx = canvas.getContext('2d');

  // Criar o gráfico de dispersão
  const scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Dispersão',
        data: xData.map((value, index) => ({ x: value, y: yData[index] })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    /*       options: {
            scales: {
              x: [{
                type: 'linear',
                position: 'bottom'
              }]
            }
          } */
  });
}
