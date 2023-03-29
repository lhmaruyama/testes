
//INFORMAÇÕES COMPLEMENTARES
//let tabInfo = []
//let info = ["Variáveis e Dados do Modelo", "Total de variáveis","Variáveis utilizadas no modelo","Total de dados","Dados utilizados no modelo"]
let DATA = data()
let info = [["Variáveis e Dados do Modelo", "Total"], ["Total de variáveis", ""], ["Variáveis utilizadas no modelo", ""], ["Total de dados", ""], ["Dados utilizados no modelo", ""]]
/* tabInfo = info.map((value, index)=>{
  //tabInfo[index]=[]
  //console.log(index)
}) */

info[1][1] = DATA.length - 2

if (DATA[1][1] == true) {
  info[2][1] = DATA.length - 2
  info[3][1] = DATA[0].length - 2
  info[4][1] = DATA[0].length - 2
} else {
  //info[2][1] = 100
  //let n = DATA.map((value, index)=>{})
}


console.table(info)
//console.log(tabela.rows[1].cells[1].innerHTML.checked)
/*
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

 */
//console.table(correlacao[2][4])
//const corr2 = corr ** 2
//const corr2aj = 1 - (1 - corr ** 2) * (VALOR.length - 1) / (VALOR.length - k - 1)

/*
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
 */

//calcula R (correlação)
/* let correlacao = []
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
} */
//let tabcorrVAR = ["Correlação"]
//tabcorrVAR = tabcorrVAR.concat(VAR)
//console.log(tabcorrVAR)
//let correlacao = [tabcorrVAR, ["VALOR", 11, 21, 31, 41], ["AREA", 12, 22, 32, 42], ["LOC", 13, 23, 33, 43], ["ACAB", 14, 24, 34, 44]]

//console.table(correlacao)
