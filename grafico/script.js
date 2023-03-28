//array de testes
const VAR = ["VALOR", "AREA", "LOC", "ACAB"]
const AREA = [159.75, 120, 134.5, 140.25, 115, 68, 140, 107, 80, 54, 63, 58, 130, 50.6, 54, 54, 68.64, 70, 70, 100, 107.91, 110, 110, 130, 80, 50, 74, 62]
const LOC = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 3, 2, 2, 2, 2, 3, 3, 3]
const ACAB = [5, 5, 4, 4, 4, 5, 5, 4, 5, 6, 6, 5, 5, 5, 5, 6, 7, 6, 6, 6, 6, 6, 6, 5, 5, 7, 6, 6]
const VALOR = [3755.87, 3458.33, 3494.42, 2852.05, 4000, 4705.88, 4178.57, 3037.38, 5062.5, 5370.37, 5873.02, 5344.83, 5000, 5533.6, 5703.7, 5425.93, 6993.01, 6214.29, 5214.29, 4900, 5930.87, 4909.09, 4909.09, 5000, 4875, 7500, 5135.14, 6854.84]
const VALUES = [VALOR, AREA, LOC, ACAB]
//console.log(jStat.sum(AREA))
//console.log(jStat.sum(LOC))
//console.log(jStat.sum(ACAB))
//console.log(jStat.sum(VALOR))


//adiciona linhas e colunas à tabela de forma automatica para receber dados de teste
let celula
//let linha
//let coluna
for (let i = tabela.rows.length; i < VALOR.length+2; i++) {

  let linha = tabela.insertRow();
  //celula = linha.insertCell();
  //celula.contentEditable = true;
  //linha = tabela.insertRow(-1);
  for (let j = 0; j < VAR.length; j++) {
    celula = linha.insertCell();
    celula.contentEditable = true;
    if (j == 0) {
      celula.innerHTML = String(tabela.rows.length - 2).padStart(2, "0");
    }
    if (j == 1) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkbox'
      checkbox.type = 'checkbox';
      celula.appendChild(checkbox);
      //celula.innerHTML = '<input class="checkbox" type="checkbox">'
    }
    if (j <= 1) {
      celula.style.backgroundColor = "#dddddd"
    }
    //celula = tabela.rows[i].insertCell(-1);
    //celula.contentEditable = true;
  }
}

//preenche os dados na tabela
/* for (let i = 1; i < tabela.rows.length; i++) {

  tabela.rows[0].cells[2].innerHTML = VAR[0]
  tabela.rows[0].cells[3].innerHTML = VAR[1]
  tabela.rows[0].cells[4].innerHTML = VAR[2]
  tabela.rows[0].cells[5].innerHTML = VAR[3]

  tabela.rows[i].cells[2].innerHTML = VALOR[i - 1]
  tabela.rows[i].cells[3].innerHTML = AREA[i - 1]
  tabela.rows[i].cells[4].innerHTML = LOC[i - 1]
  tabela.rows[i].cells[5].innerHTML = ACAB[i - 1]

} */


// carrega os dados
let DATA = []
/* let checkboxes = document.querySelectorAll("input[type=checkbox]")
for (let i = 0; i < tabela.rows[0].cells.length; i++) {
  DATA[i] = []
  for (let j = 0; j < tabela.rows.length; j++) {
    //DATA[i][j]=`${i}${j}`
    if (i == 0) {
      DATA[i][j] = checkboxes[j].checked
    } else {
      DATA[i][j] = tabela.rows[j].cells[i].innerHTML
    }
  }
} */
//console.table(DATA)
//console.log(DATA)

//

//console.log(tabela.rows[0].cells.length)
const alpha = .8//nivel confiança
const nc = 1 - alpha//

const mean = jStat.mean(VALOR)//media
const mode = Math.max(...jStat.mode(VALOR))
const median = jStat.median(VALOR)
const sd = jStat.stdev(VALOR, true)//desvio adrão amostral
const tciMean = jStat.tci(mean, nc, VALOR)// limites do intervalo de confiança
const tciMode = jStat.tci(mode, nc, VALOR)
const tciMedian = jStat.tci(median, nc, VALOR)
const fatortciMean = tciMean[1] - mean
//const fatortciMode = tciMode[1] - mode
const fatortciMedian = tciMedian[1] - median
const amptciMean = 100 * (tciMean[1] - tciMean[0]) / mean
//const amptciMode = 100 * (tciMode[1] - tciMode[0]) / mode
const amptciMedian = 100 * (tciMedian[1] - tciMedian[0]) / median
const degree = 1 //grau da regressao
const k = 1 //qtd variaveis indep
const corrAREA = jStat.corrcoeff(AREA, VALOR)
const corrACAB = jStat.corrcoeff(ACAB, VALOR)
const corrLOC = jStat.corrcoeff(LOC, VALOR)


//console.table(correlacao[2][4])
//const corr2 = corr ** 2
//const corr2aj = 1 - (1 - corr ** 2) * (VALOR.length - 1) / (VALOR.length - k - 1)


console.log("media: " + mean);
console.log("moda: " + mode);
console.log("mediana: " + median);
console.log("desv padrao: " + sd);
console.log("Intervalo Conf (Média): ");
console.log(tciMean);
console.log("Intervalo Conf (Moda): ");
console.log(tciMode);
console.log("Intervalo Conf (Mediana): ");
console.log(tciMedian);
console.log("Fator Int. Conf: " + fatortciMean);
//console.log(fatortciMode);
//console.log(fatortciMedian);
console.log("Amplitude Int. Conf.: " + amptciMean);
//console.log(amptciMode);
//console.log(amptciMedian);
console.log("R: " + corrLOC);
//console.log("R²: " + corr2);
//console.log("R² aj: " + corr2aj);


//calcula R (correlação)
let correlacao = []
for (let i = 0; i < tabela.rows[0].cells.length - 1; i++) {
  correlacao[i] = [] //cria array dentro de array

  for (let j = 0; j < tabela.rows[0].cells.length - 1; j++) {
    //correlacao[i][j] = `${i}${j}`

    if (i == 0 && j == 0) {
      correlacao[i][j] = "Correlação"
    }
    if (i == 0 && j > 0) {
      correlacao[i][j] = VAR[j - 1]
    }
    if (i > 0 && j == 0) {
      correlacao[i][j] = VAR[i - 1]
    }
    if (i < j && i != 0) {
      correlacao[i][j] = 0
    }
    if (i > j && j != 0) {
      correlacao[i][j] = jStat.corrcoeff(VALUES[i - 1], VALUES[j - 1])
    }
    if (i == j && i != 0) {
      correlacao[i][j] = 1
    }
  }
  //correlacao.push(linha)
}
//let tabcorrVAR = ["Correlação"]
//tabcorrVAR = tabcorrVAR.concat(VAR)
//console.log(tabcorrVAR)
//let correlacao = [tabcorrVAR, ["VALOR", 11, 21, 31, 41], ["AREA", 12, 22, 32, 42], ["LOC", 13, 23, 33, 43], ["ACAB", 14, 24, 34, 44]]

console.table(correlacao)

function adicionarLinha() {
  // let tabela = document.getElementById("tabela");
  //isActive.push(false)
  //console.log(isActive);
  let celula
  let linha = tabela.insertRow(-1);
  for (let i = 0; i < tabela.rows[0].cells.length; i++) {
    celula = linha.insertCell(i);
    celula.contentEditable = true;
    if (i == 0) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkbox'
      checkbox.type = 'checkbox';
      celula.appendChild(checkbox);
      //celula.innerHTML = '<input class="checkbox" type="checkbox">'
    }
    if (i == 1) {
      celula.innerHTML = String(tabela.rows.length - 1).padStart(2, "0");
    }
    if (i <= 1) {
      celula.style.backgroundColor = "#dddddd"
    }
  }
  update()
}

function removerLinha() {
  //let tabela = document.getElementById("tabela");
  //let linhas = tabela.rows

  if (tabela.rows.length > 1) {
    tabela.deleteRow(-1);
  }
  //tabela.ariaRowIndex()
  //isActive.pop()
  //console.log(isActive);
  update()
}

//let tabela = document.getElementById("tabela");
for (let i = 0; i < tabela.rows.length; i++) {
  tabela.rows[i].cells[0].addEventListener('click', function () {
    update()
  })
}

//console.log(checkboxes[0].checked)
//if(checkboxes[0].checked==true){}

const update = () => {
  let isActive = []
  let checkboxes = document.querySelectorAll("input[type=checkbox]")
  checkboxes.forEach(val => {
    isActive.push(val.checked)
  })
  console.log(isActive);
  return isActive
}

const selectAll = document.querySelector("input[type=checkbox]")
//selectAll[0].addEventListener() usado se document.querySelectorAll for definido como seletor
selectAll.addEventListener("click", () => {
  let checkboxes = document.querySelectorAll("input[type=checkbox]")
  for (var i = 1; i < checkboxes.length; i++) {
    if (checkboxes[0].checked == true) {
      checkboxes[i].checked = true
    } else {
      checkboxes[i].checked = false
    }
    //console.log(checkboxes[i].checked=true)
    //checkboxes[i].checked = this.checked;
  }
  update()
})

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

/* let checkboxes = document.querySelectorAll("input[type=checkbox]");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function () {
    //isActive[i] = checkboxes[i].checked;
    //console.log(isActive);
    
    //console.log(checkboxes.forEach(isActive=>{console.log(isActive)}));
  });
} */

function adicionarColuna() {
  //let tabela = document.getElementById("tabela");
  //let celula;
  for (let i = 0; i < tabela.rows.length; i++) {
    celula = tabela.rows[i].insertCell(-1);
    celula.contentEditable = true;
    //celula = document.createElement("td")
    //coluna.appendChild(celula)
    if (i < 2) {
      celula.style.backgroundColor = "#dddddd"
    }
  }
  update()

}

function removerColuna() {
  let tabela = document.getElementById("tabela");
  if (tabela.rows[0].cells.length > 1) {
    for (let i = 0; i < tabela.rows.length; i++) {
      tabela.rows[i].deleteCell(-1);
    }
  }
  update()

}

/*
window.onload = function() {
  var tabela = document.getElementById("tabela");
  var celulas = tabela.getElementsByTagName("td");
  for (var i = 0; i < celulas.length; i++) {
    celulas[i].addEventListener("click", function() {
      console.log("Clique na célula " + this.cellIndex);
    });
  }
}; */

//let selected = [false, false, false, false, false, false, false, false, false, false]
/* for (let i = 0; i < tabela.rows.length; i++) {
  for (let j = 0; j < tabela.rows[i].cells.length; j++) {
    //tabela.rows[i].cells[j].addEventListener('click', function() {
    // console.log(`Linha ${i+1}, Coluna ${j+1}`);
    // this.style.backgroundColor = "yellow"
    // });
    tabela.rows[i].cells[0].addEventListener('click', function () {
      //selected[i] = !selected[i]
      //console.log(selected)
      if (selected[i] == true) {
        tabela.rows[i].style.backgroundColor = "yellow"
        tabela.rows[i].cells[0].style.backgroundColor = "yellow"
      } else {
        tabela.rows[i].style.backgroundColor = ""
        tabela.rows[i].cells[0].style.backgroundColor = "#dddddd"
      }
      
    });
  }
} */




