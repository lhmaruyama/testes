
//INFORMAÇÕES COMPLEMENTARES
//let tabInfo = []
//let info = ["Variáveis e Dados do Modelo", "Total de variáveis","Variáveis utilizadas no modelo","Total de dados","Dados utilizados no modelo"]
const infoSet = () => {
  let DATA = tableLoad()
  let info = [["Variáveis e Dados do Modelo", "Total"], ["Total de variáveis", ""], ["Variáveis utilizadas no modelo", ""], ["Total de dados", ""], ["Dados utilizados no modelo", ""]]
  /* tabInfo = info.map((value, index)=>{
    //tabInfo[index]=[]
    //console.log(index)
  }) */

  info[1][1] = DATA.length - 2
  info[3][1] = DATA[0].length - 2

  if (DATA[1][1] == true) {
    info[2][1] = DATA.length - 2
    info[4][1] = DATA[0].length - 2
  } else {
    let cont = 0
    for (let i = 2; i < DATA.length; i++) {
      if (DATA[i][1] == true) {
        cont++
      }
    }
    info[2][1] = cont
    cont = 0
    for (let i = 2; i < DATA[1].length; i++) {
      if (DATA[1][i] == true) {
        cont++
      }
    }
    info[4][1] = cont

    //let n = DATA.map((value, index)=>{})
  }

  console.table(info)
}
//infoSet()

//console.log(tableData.rows[1].cells[1].innerHTML.checked)
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
const correlacao = () => {

  let correlacao = []
  for (let i = 0; i < tableData.rows[0].cells.length - 1; i++) {
    correlacao[i] = [] //cria array dentro de array

    for (let j = 0; j < tableData.rows[0].cells.length - 1; j++) {
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
        let num = jStat.corrcoeff(VALUES[i - 1], VALUES[j - 1])
        correlacao[i][j] = num.toExponential(2)
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

  //console.log("correlacao")
  console.table(correlacao)
  //console.log(correlacao)
}
correlacao()

//REGRESSÃO LINEAR MULTIPLA

const regressao = () => {
  let DATA = dataLoad()
  let Y = DATA[0].map(valor => { return [valor] })
  //console.log("Y")
  //console.log(Y)
  //let ataque = [5, 13, 20, 28, 41, 49, 61, 62]
  //let duracao = [118, 132, 119, 153, 91, 118, 132, 105]
  //let indice = [[8.1], [6.8], [7], [7.4], [7.7], [7.5], [7.6], [8]]
  //let Y = [8.1, 6.8, 7, 7.4, 7.7, 7.5, 7.6, 8]
  //let fill = Array(ataque.length).fill(1)
  //let XT = [fill, ataque, duracao]
  let fill = Array(DATA[0].length).fill(1)
  let XT = DATA
  XT[0] = fill
  //console.log("XT")
  //console.log(XT)
  //console.log("Y")
  //console.log(indice)

  const X = transposta(XT)
  //console.log("X")
  //console.log(X)


  const XTX = multiplicacao(XT, X)
  //console.log("XTX")
  //console.log(XTX)
  //matriz = XTX


  let det = determinante(XTX);
  //console.log("det")
  //console.log(det)
  let adjunta = matrizAdjunta(XTX);
  //console.log("adjunta")
  //console.log(adjunta)
  const inversa = matrizInversa(XTX, det, adjunta)
  console.log("Inversa")
  console.log(inversa)


  //coeficientes
  const XTY = multiplicacao(XT, Y)
  //console.log("XTY")
  //console.log(XTY)

  const b = multiplicacao(inversa, XTY)
  //console.log("b")
  console.log(b)
  let TABLE = tableLoad()
  let coefficients = []
  let title = ["Variáveis", "Coeficientes"]
  for (let index = 0; index < b.length; index++) {
    let line = []
    if (index == 0) {
      line[0] = "Intersecção"
    }
    if (index > 0) {
      line[0] = TABLE[index + 2][0]
    }

    line[1] = b[index][0]

    coefficients.push(line)

  }
  coefficients.unshift(title)
  /*   let variables = TABLE.map((value, index) =>{
      if (index>1) {
        //console.log(value[0])
        return value[0]
      }
    }) */

  //let line1 = ["Resíduos situados entre -1s e +1s", "68%", qtd68, res68]

  //console.table([title, line1, line2, line3])
  console.table(coefficients)
  //console.table(b)


  let equation = "Valor unitário = "
  for (let index = 0; index < b.length; index++) {
    if (index == 0) {
      equation = equation + "(" + b[index][0] + ")"
    }
    if (index > 0) {
      equation = equation + " + " + "(" + b[index][0] + ")" + "*" + TABLE[index + 2][0]
    }

  }

  console.log(equation)

  //estimado
  //let estimado = []
  /*   for (let i = 0; i < Y.length; i++) {
      estimado[i] = []
      //estimado[i] = (b[0][0] + b[1][0]*ataque[i] + b[2][0]*duracao[i]).toExponential(2)
      estimado[i][0] = b[0][0] + b[1][0] * ataque[i] + b[2][0] * duracao[i]
    } */

  const estimado = multiplicacao(X, b)


  let c = []
  for (let i = 0; i < inversa.length; i++) {
    let line = []
    for (let j = 0; j < inversa.length; j++) {
      if (i == j) {
        line = inversa[i][j]
        c.push(line)
      }
    }
  }
  console.log("c")
  console.log(c)

  //SSE soma dos quadrados da diferença entre Yi amostra e o Yj estimado (excel SQ residuo)
  const SSE = Y.reduce((acumulado, valor, index) => acumulado + ((valor - estimado[index][0]) ** 2), 0)
  console.log("SST")
  console.log(SSE)

  //erro padrão das variaveis independentes
  let errsd = c.map(valor => Math.sqrt(SSE*valor/24))
  console.log("errsd")
  console.log(errsd)

  //stat t = coeficientes / erro padrão

  //valor p de cada variavel
  const t_test = jStat.ttest(3.3874316452915,25,2)
  console.log("t_test")
  console.log(t_test)

  //valor t tabelado
  const t_student = jStat.studentt.inv(0.2/2, 27)
  console.log("t_student")
  console.log(-t_student)


  //console.log("estimado")
  //console.log(estimado)
  return estimado

}
//regressao()

const estatistica = () => {
  let DATA = dataLoad()
  let estimado = regressao()
  //erros
  /*   const erros = indice.map((value, index) => [
      estimado[index][0] - value[0]
    ])
  
    console.log("erros")
    console.log(erros) */

  //R2 coeficiente de determinação multiplo
  //R2 = SSR/SST
  //const Y = indice.map(valor => { return valor[0] })
  //let Y = [8.1, 6.8, 7, 7.4, 7.7, 7.5, 7.6, 8]
  //const mean = jStat.mean(Y)//media Ym
  const Y = DATA[0]
  const mean = jStat.mean(Y)//media Ym
  console.log("mean")
  console.log(mean)


  //SSR soma dos quadrados da diferença entre o Yj estimado e a média Ym da amostra (excel SQ regressão)
  const SSR = estimado.reduce((acumulado, valor) => acumulado + ((valor[0] - mean) ** 2), 0)
  console.log("SSR")
  console.log(SSR)
  //SST soma dos quadrados da diferença entre Yi amostra e a média Ym da amostra 
  const SST = Y.reduce((acumulado, valor) => acumulado + ((valor - mean) ** 2), 0)
  console.log("SST")
  console.log(SST)
  //R2
  const R2 = SSR / SST
  console.log("R2")
  console.log(R2)
  //R
  const R = Math.sqrt(R2)
  console.log("R")
  console.log(R)
  //SSE soma dos quadrados da diferença entre Yi amostra e o Yj estimado (excel SQ residuo)
  const SSE = Y.reduce((acumulado, valor, index) => acumulado + ((valor - estimado[index][0]) ** 2), 0)
  console.log("SST")
  console.log(SSE)

  //R2 ajustado
  const n = Y.length //tamanho da amostra
  const k = DATA.length - 1 //grau de liberdade do modelo, numero de variaveis
  const r = (n - k - 1) //grau de liberdade dos residuos
  const R2aj = 1 - (n - 1) * (1 - R2) / r
  console.log("n")
  console.log(n)
  console.log("k")
  console.log(k)
  console.log("R2aj")
  console.log(R2aj)

  //erro padrão
  let errsd = Math.sqrt(SSE / r)

  //média dos quadrados da regressão (excel MQ regressão)
  const MQR = SSR / k
  console.log("MQR")
  console.log(MQR)

  //média dos quadrados dos residuos (excel MQ residuos)
  const MQE = SSE / (n - k - 1)
  console.log("MQE")
  console.log(MQE)

  //F significancia
  const F = MQR / MQE
  console.log("F")
  console.log(F)

  const p_valor = jStat.ftest(F, k, r)
  console.log("p-valor")
  console.log(p_valor)

  let nivelSignificancia //probabilidade
  switch (true) {
    case (p_valor <= 0.01):
      nivelSignificancia = 0.01;
      break;
    case (p_valor > 0.01 && p_valor <= 0.02):
      nivelSignificancia = 0.02;
      break;
    case (p_valor > 0.02 && p_valor <= 0.05):
      nivelSignificancia = 0.05;
      break;
    default:
      nivelSignificancia = "Não significativo";
  }
  console.log("nivelSignificancia")
  console.log(nivelSignificancia)
  let prob = 1 - nivelSignificancia

  const Ftab = jStat.centralF.inv(prob, k, r)
  console.log("Ftab")
  console.log(Ftab)

  if (F > Ftab) {
    console.log("Fcalc > Ftab")
  } else {
    console.log("Fcalc < Ftab")
  }
}

//estatistica()
const normalidade = () => {
  let DATA = dataLoad()
  const Y = DATA[0]
  let estimado = regressao()

  //erros ou residuos
  const erros = Y.map((value, index) =>
    value - estimado[index]
  )

  console.log("erros")
  console.log(erros)

  //erros relativos
  const errel = erros.map((value, index) =>
    value / Y[index]
  )
  console.log("erros relativos")
  console.log(errel)

  //erro padrão
  const n = Y.length //tamanho da amostra
  const k = DATA.length - 1 //grau de liberdade do modelo, numero de variaveis
  const r = (n - k - 1) //grau de liberdade dos residuos
  const SSE = Y.reduce((acumulado, valor, index) => acumulado + ((valor - estimado[index][0]) ** 2), 0)
  let errsd = Math.sqrt(SSE / r)

  console.log("errsd")
  console.log(errsd)


  // residuo/erro padrão
  const ressd = erros.map((value, index) =>
    value / errsd
  )
  console.log("ressd")
  console.log(ressd)

  let qtd68 = ressd.reduce((qtd68, valor) => {
    if (valor >= 1 || valor <= -1) {
      qtd68++
    } else {
      qtd68
    }

    return qtd68
  }, 0)
  let res68 = (n - qtd68) / n
  console.log("res68")
  console.log(res68)

  let qtd90 = ressd.reduce((qtd90, valor) => {
    if (valor >= 1.64 || valor <= -1.64) {
      qtd90++
    } else {
      qtd90
    }

    return qtd90
  }, 0)
  let res90 = (n - qtd90) / n
  console.log("res90")
  console.log(res90)


  let qtd95 = ressd.reduce((qtd95, valor) => {
    if (valor >= 1.96 || valor <= -1.96) {
      qtd95++
    } else {
      qtd95
    }

    return qtd95
  }, 0)
  let res95 = (n - qtd95) / n
  console.log("res95")
  console.log(res95)

  let title = ["Distribuição dos Resíduos", "Curva Normal", "Quantidade", "Modelo"]
  let line1 = ["Resíduos situados entre -1s e +1s", "68%", qtd68, res68]
  let line2 = ["Resíduos situados entre -1,64s e +1,64s", "90%", qtd90, res90]
  let line3 = ["Resíduos situados entre -1,96s e +1,96s", "95%", qtd95, res95]
  console.table([title, line1, line2, line3])


}
//normalidade()


const outliers = () => {
  let DATA = dataLoad()
  const Y = DATA[0]
  let estimado = regressao()

  //erros ou residuos
  const erros = Y.map((value, index) =>
    value - estimado[index]
  )

  //console.log("erros")
  //console.log(erros)

  //erros relativos
  const errel = erros.map((value, index) =>
    value / Y[index]
  )
  //console.log("erros relativos")
  //console.log(errel)

  //erro padrão
  const n = Y.length //tamanho da amostra
  const k = DATA.length - 1 //grau de liberdade do modelo, numero de variaveis
  const r = (n - k - 1) //grau de liberdade dos residuos
  const SSE = Y.reduce((acumulado, valor, index) => acumulado + ((valor - estimado[index][0]) ** 2), 0)
  let errsd = Math.sqrt(SSE / r)

  //console.log("errsd")
  //console.log(errsd)


  // residuo/erro padrão
  const ressd = erros.map((value) =>
    value / errsd
  )
  //console.log("ressd")
  //console.log(ressd)

  let qtdOutliers = ressd.reduce((qtdOutliers, valor) => {
    if (valor >= 2 || valor <= -2) {
      qtdOutliers++
    } else {
      qtdOutliers
    }

    return qtdOutliers
  }, 0)
  let porcentageOutliers = qtdOutliers / n
  console.log("porcentageOutliers")
  console.log(porcentageOutliers)


  let title = ["Quantidade de outliers", "% de outliers"]
  let line1 = [qtdOutliers, porcentageOutliers]
  console.table([title, line1])

}
//outliers()


const anova = () => {
  let DATA = dataLoad()
  let estimado = regressao()
  //erros
  /*   const erros = indice.map((value, index) => [
      estimado[index][0] - value[0]
    ])
  
    console.log("erros")
    console.log(erros) */

  //R2 coeficiente de determinação multiplo
  //R2 = SSR/SST
  //const Y = indice.map(valor => { return valor[0] })
  //let Y = [8.1, 6.8, 7, 7.4, 7.7, 7.5, 7.6, 8]
  //const mean = jStat.mean(Y)//media Ym
  const Y = DATA[0]
  const mean = jStat.mean(Y)//media Ym
  //console.log("mean")
  //console.log(mean)


  //SSR soma dos quadrados da diferença entre o Yj estimado e a média Ym da amostra (excel SQ regressão)

  const SSR = estimado.reduce((acumulado, valor) => acumulado + ((valor[0] - mean) ** 2), 0)
  //console.log("SSR")
  //console.log(SSR)

  //SSE soma dos quadrados da diferença entre Yi amostra e o Yj estimado (excel SQ residuo)
  const SSE = Y.reduce((acumulado, valor, index) => acumulado + ((valor - estimado[index][0]) ** 2), 0)
  //console.log("SST")
  //console.log(SSE)
  //SST soma dos quadrados da diferença entre Yi amostra e a média Ym da amostra 
  const SST = Y.reduce((acumulado, valor) => acumulado + ((valor - mean) ** 2), 0)
  //console.log("SST")
  //console.log(SST)
  //graus de liberdade
  const n = Y.length //tamanho da amostra
  const k = DATA.length - 1 //grau de liberdade do modelo, numero de variaveis
  const r = (n - k - 1) //grau de liberdade dos residuos

  //média dos quadrados da regressão (excel MQ regressão)
  const MQR = SSR / k
  //console.log("MQR")
  //console.log(MQR)

  //média dos quadrados dos residuos (excel MQ residuos)
  const MQE = SSE / (n - k - 1)
  //console.log("MQE")
  //console.log(MQE)

  //F significancia
  const F = MQR / MQE
  //console.log("F")
  //console.log(F)


  let title = ["Fonte de variação", "Graus de liberdade", "Soma dos quadrados", "Quadrado médio", "F"]
  let line1 = ["Explicada", k, SSR, MQR, F]
  let line2 = ["Não explicada", r, SSE, MQE, ""]
  let line3 = ["Total", k + r, SSR + SSE, "", ""]
  console.table([title, line1, line2, line3])


}
//anova()



///////////////////////////////////


function determinante(matriz) {
  if (matriz.length === 1) {
    return matriz[0][0];
  }
  if (matriz.length !== matriz[0].length) {
    throw new Error('A matriz deve ser quadrada');
  }
  var det = 0;
  for (var i = 0; i < matriz.length; i++) {
    var sinal = (i % 2 === 0) ? 1 : -1;
    var submatriz = [];
    for (var j = 1; j < matriz.length; j++) {
      submatriz[j - 1] = matriz[j].slice(0, i).concat(matriz[j].slice(i + 1));
    }
    det += sinal * matriz[0][i] * determinante(submatriz);
  }
  return det;
}

function matrizAdjunta(matriz) {
  var adjunta = [];
  for (var i = 0; i < matriz.length; i++) {
    adjunta[i] = [];
    for (var j = 0; j < matriz.length; j++) {
      var sinal = ((i + j) % 2 === 0) ? 1 : -1;
      var submatriz = [];
      for (var k = 0; k < matriz.length; k++) {
        if (k !== i) {
          submatriz.push(matriz[k].slice(0, j).concat(matriz[k].slice(j + 1)));
        }
      }
      adjunta[i][j] = sinal * determinante(submatriz);
    }
  }
  return transposta(adjunta);
}

function transposta(matriz) {
  var transposta = [];

  /*   for (var i = 0; i < matriz[0].length; i++) {
      transposta[i] = [];
      for (var j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
      }
    } */

  //ou usando metodo de array

  for (let j = 0; j < matriz[0].length; j++) {
    let linha = [];
    for (let i = 0; i < matriz.length; i++) {
      linha.push(matriz[i][j]);
    }
    transposta.push(linha);
  }

  return transposta;
}


function multiplicacao(matriz1, matriz2) {
  if (matriz1[0].length !== matriz2.length) {
    throw new Error('As matrizes não são compatíveis para multiplicação.');
  }
  let multiplicacao = [];

  for (let i = 0; i < matriz1.length; i++) {
    multiplicacao[i] = [];
    for (let j = 0; j < matriz2[0].length; j++) {
      //multiplicacao[i][j] = 0;
      let sum = 0
      for (let k = 0; k < matriz2.length; k++) {

        //multiplicacao[i][j] += matriz1[i][k] * matriz2[k][j];
        sum += matriz1[i][k] * matriz2[k][j];

      }
      multiplicacao[i][j] = sum
    }
  }



  return multiplicacao

}

function matrizInversa(matriz, det, adjunta) {
  if (matriz.length !== matriz[0].length) {
    throw new Error('A matriz deve ser quadrada');
  }
  if (det === 0) {
    throw new Error('A matriz não tem inversa');
  }
  var inversa = [];
  for (var i = 0; i < matriz.length; i++) {
    inversa[i] = [];
    for (var j = 0; j < matriz.length; j++) {
      inversa[i][j] = adjunta[i][j] / det;
    }
  }
  return inversa;
}