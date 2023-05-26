
function chart() {
  //const isActive = update()
  //console.log(isActive);
  //console.log(tabela.rows[3].cells[3].innerHTML);
  let xData = data[1]
  let yData = data[0]
/*

  let j = 0
  for (let i = 1; i < tabela.rows.length; i++) {
    if (isActive[i] == true) {
      xData[j] = parseFloat(tabela.rows[i].cells[3].innerHTML)
      yData[j] = parseFloat(tabela.rows[i].cells[2].innerHTML)
      j++
    }
    //console.log(tabela.rows[i].cells[3].innerHTML);

  }
  
  */

  //const sd = ss.standardDeviation(yData)
  //console.log(sd);

  //const xData = [1, 2, 3, 4, 5];

  // Dados do eixo y
  //const yData = [10, 20, 30, 40, 50];

  // Criar o contexto do canvas
  const canvas = document.getElementById('chart');
  const ctx = canvas.getContext('2d');

  // Criar o gráfico de dispersão
/*   const scatterChart = new Chart(ctx, {
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
    options: {
            scales: {
              x: [{
                type: 'linear',
                position: 'bottom'
              }]
            }
          } 
  }); */

  // Criar o gráfico de regressão
  const scatterChart2 = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'Regressão',
          data: [{x: 1, y: 1},{x: 100, y: 100}],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Dispersão',
          data: xData.map((value, index) => ({ x: value, y: yData[index] })),
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
    ]

    },
    options: {
            scales: {
              x: {
                type: 'linear',
                position: 'bottom'
              },
              y: {
                type: 'linear',
                position: 'left',
                beginAtZero: true
              }
            }
          }
  });

}
//chart()

let yData = data[0]
let xData = data[1]
let matrix = []
matrix[0] = yData
matrix[1] = xData
let coefReg = regressionCoefficients(matrix)

//console.log(matrix)
//console.log(coefReg[1][0])

function drawScatterPlotWithRegression(xData, yData, coefReg) {
  var scatterChartCanvas = document.getElementById('chart').getContext('2d');

  // Dados da dispersão
  var scatterData = {
      datasets: [{
          label: 'Dados',
          data: [],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
      }]
  };

  // Adicionar dados de dispersão
  for (var i = 0; i < xData.length; i++) {
      scatterData.datasets[0].data.push({ x: xData[i], y: yData[i] });
  }

  // Dados da reta de regressão
  var regressionData = {
      datasets: [{
          label: 'Regressão Linear',
          data: [
              { x: Math.min(...xData), y: coefReg[1][0] * Math.min(...xData) + coefReg[0][0] },
              { x: Math.max(...xData), y: coefReg[1][0] * Math.max(...xData) + coefReg[0][0] }
          ],
          type: 'line',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
      }]
  };

  // Configurações do gráfico
  var chartOptions = {
      scales: {
          x: {
              type: 'linear',
              position: 'bottom'
          },
          y: {
              type: 'linear',
              position: 'left'
          }
      },
      plugins: {
          title: {
              display: true,
              text: 'Gráfico de Dispersão com Regressão Linear'
          },
          tooltip: {
              callbacks: {
                  label: function (context) {
                      var label = context.dataset.label || '';
                      if (label) {
                          label += ': ';
                      }
                      label += '(' + context.parsed.x + ', ' + context.parsed.y + ')';
                      return label;
                  }
              }
          }
      }
  };

  // Criar gráfico de dispersão com reta de regressão
  var scatterChart = new Chart(scatterChartCanvas, {
      type: 'scatter',
      data: scatterData,
      options: chartOptions
  });

  // Adicionar a reta de regressão ao gráfico
  scatterChart.data.datasets.push(regressionData.datasets[0]);
  scatterChart.update();
}
//var xData = [1, 2, 3, 4, 5];
//var yData = [3, 4, 7, 8, 11];
//var coefReg = [2, 0.5];

//drawScatterPlotWithRegression(xData, yData, coefReg);


function drawNBR14653Chart(arbitrageSup, arbitrageInf, estimate) {
  var chartCanvas = document.getElementById('chart').getContext('2d');

  var data = {
    labels: ["hbb"],
    datasets: [{
      label: 'Valores',
      data: [arbitrageSup, arbitrageInf, estimate],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2
    }]
  };

  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  var chart = new Chart(chartCanvas, {
    type: 'line',
    data: data,
    options: options
  });
}


var arbitrageSup = {x: 10, y:1000};
var arbitrageInf = {x: 10, y:2000};
var estimate = {x: 10, y:3000};

drawNBR14653Chart(arbitrageSup, arbitrageInf, estimate);

