const sumSquaresArrayNumber = (array, number) => {
  return array.reduce((accumulated, value) => accumulated + ((value - number) ** 2), 0)
}

const sumSquaresArrayArray = (array1, array2) => {
  return array1.reduce((accumulated, value, index) => accumulated + ((value - array2[index]) ** 2), 0)
}

const subtractionArrays = (array1, array2) => {
  return array1.map((value, index) => value - array2[index])
}

const subtractionNumberArray = (number, array) => {
  return array.map(value => number - value)
}

const relativeArrays = (array1, array2) => {
  return array1.map((value, index) => value / array2[index])
}

const relativeArrayNumber = (array, number) => {
  return array.map(value => value / number)
}

//let list_trasnf = ["x", "1/x", "x²", "1/x²", "e(x)", "1/e(x)", "ln(x)", "1/ln(x)"]
const dataTransformation = (number, curve) => {
  let result = 0

  if (curve == "x" || curve == "y") {
    result = number
  }

  if (curve == "1/x") {
    result = 1 / number
  }

  if (curve == "x²") {
    result = number * number
  }

  if (curve == "1/x²") {
    result = 1 / (number * number)
  }

  if (curve == "e(x)") {
    result = Math.exp(number)
  }

  if (curve == "1/e(x)") {
    result = 1 / Math.exp(number)
  }

  if (curve == "ln(x)") {
    result = Math.log(number)
  }

  if (curve == "1/ln(x)") {
    result = 1 / Math.log(number)
  }

  return result
}


const regression = (matrix) => {
    const Y = matrix[0].map(value => { return [value] })
    const FIL = Array(matrix[0].length).fill(1)
    const XT = matrix.slice()
    XT[0] = FIL
    const X = transposeMatrix(XT)
    const XTX = multiplyMatrix(XT, X)
    const DET =  determinantMatrix(XTX)
    const ADJ = adjunctMatrix(XTX)
    const INV = inverseMatrix(XTX, DET, ADJ)
    let VAR = [] //matriz de variancia e covariancia
    for (let i = 0; i < INV.length; i++) {
      let line = []
      for (let j = 0; j < INV.length; j++) {
        if (i == j) {
          line = INV[i][j]
          VAR.push(line)
        }
      }
    }
    const XTY = multiplyMatrix(XT, Y)
    const B = multiplyMatrix(INV, XTY)
    const C = B.map(value => { return value[0] })
    const Yp = multiplyMatrix(X, B)
    const P = Yp.map(value => { return value[0] })
    return [P, C, VAR]
}
const regressionCoefficients = (matrix) => {
  const Y = matrix[0].map(value => { return [value] })
  const FIL = Array(matrix[0].length).fill(1)
  const XT = matrix.slice()
  XT[0] = FIL
  const X = transposeMatrix(XT)
  const XTX = multiplyMatrix(XT, X)
  const DET =  determinantMatrix(XTX)
  const ADJ = adjunctMatrix(XTX)
  const INV = inverseMatrix(XTX, DET, ADJ)
  const XTY = multiplyMatrix(XT, Y)
  const B = multiplyMatrix(INV, XTY)
  return B
}
const regressionPredicted = (matrix) => {
  const Y = matrix[0].map(value => { return [value] })
  const FIL = Array(matrix[0].length).fill(1)
  const XT = matrix.slice()
  XT[0] = FIL
  const X = transposeMatrix(XT)
  const XTX = multiplyMatrix(XT, X)
  const DET =  determinantMatrix(XTX)
  const ADJ = adjunctMatrix(XTX)
  const INV = inverseMatrix(XTX, DET, ADJ)
  const XTY = multiplyMatrix(XT, Y)
  const B = multiplyMatrix(INV, XTY)
  const Yp = multiplyMatrix(X, B)
  return Yp
}

const regressionVariance = (matrix) => {
  const Y = matrix[0].map(value => { return [value] })
  const FIL = Array(matrix[0].length).fill(1)
  const XT = matrix.slice()
  XT[0] = FIL
  const X = transposeMatrix(XT)
  const XTX = multiplyMatrix(XT, X)
  const DET =  determinantMatrix(XTX)
  const ADJ = adjunctMatrix(XTX)
  const INV = inverseMatrix(XTX, DET, ADJ)
  let VAR = [] //matriz de variancia e covariancia
  for (let i = 0; i < INV.length; i++) {
    let line = []
    for (let j = 0; j < INV.length; j++) {
      if (i == j) {
        line = INV[i][j]
        VAR.push(line)
      }
    }
  }
  return VAR
}

const transposeMatrix = (matrix) => {
    let transpose = [];
  
    for (let j = 0; j < matrix[0].length; j++) {
      let line = [];

      for (let i = 0; i < matrix.length; i++) {
        line.push(matrix[i][j]);
      }
      transpose.push(line);
    }

    return transpose;
}

const multiplyMatrix = (matrix1, matrix2) => {

    if (matrix1[0].length !== matrix2.length) {
        throw new Error('As matrizes não são compatíveis para multiplicação.');
      }
      let multiply = [];
    
      for (let i = 0; i < matrix1.length; i++) {
        multiply[i] = [];

        for (let j = 0; j < matrix2[0].length; j++) {
          let sum = 0

          for (let k = 0; k < matrix2.length; k++) {
            sum += matrix1[i][k] * matrix2[k][j];
    
          }
          multiply[i][j] = sum

        }
      }   
    
      return multiply   
}

const determinantMatrix = (matrix) => {
    if (matrix.length === 1) {
        return matrix[0][0];
      }
      if (matrix.length !== matrix[0].length) {
        throw new Error('A matriz deve ser quadrada');
      }
      let determinant = 0;
      for (let i = 0; i < matrix.length; i++) {
        let signal = (i % 2 === 0) ? 1 : -1;
        let submatrix = [];
        for (let j = 1; j < matrix.length; j++) {
            submatrix[j - 1] = matrix[j].slice(0, i).concat(matrix[j].slice(i + 1));
        }
        determinant += signal * matrix[0][i] * determinantMatrix(submatrix);
      }
      return determinant;
}

const adjunctMatrix = (matrix) => {
    let adjunct = [];
    for (let i = 0; i < matrix.length; i++) {
        adjunct[i] = [];
      for (let j = 0; j < matrix.length; j++) {
        let signal = ((i + j) % 2 === 0) ? 1 : -1;
        let submatrix = [];
        for (let k = 0; k < matrix.length; k++) {
          if (k !== i) {
            submatrix.push(matrix[k].slice(0, j).concat(matrix[k].slice(j + 1)));
          }
        }
        adjunct[i][j] = signal * determinantMatrix(submatrix);
      }
    }
    return transposeMatrix(adjunct);
}


const inverseMatrix = (matrix, determinant, adjunct) => {
    if (matrix.length !== matrix[0].length) {
        throw new Error('A matriz deve ser quadrada');
      }
      if (determinant === 0) {
        throw new Error('A matriz não tem inversa');
      }
      let inverse = [];
      for (let i = 0; i < matrix.length; i++) {
        inverse[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            inverse[i][j] = adjunct[i][j] / determinant;
        }
      }
      return inverse;
}




//1. DADOS E VARIÁVEIS DO MODELO

    //total de variáveis coletadas do modelo

    //total de variáveis utilizadas no modelo

    //total de dados coletados do modelo

    //total de dados utilizados no modelo

//2. ESTATÍSTICA DO MODELO

    //coeficiente de correlação R

    //coeficiente de determinação R2

    //coeficiente de determinação R2 ajustado

    //desvio padrão / erro padrão

    //Fisher - Snedecor calculado

    //significância do modelo

    //Fisher - Snedecor tabelado

//3. NORMALIDADE DOS RESÍDUOS
    //quantidade e porcentagem dos resíduos situados entre -1s e +1s

    //quantidade e porcentagem dos resíduos situados entre -1,64s e +1,64s

    //quantidade e porcentagem dos resíduos situados entre -1,96s e +1,96s


//4. OUTLIERS DO MODELO DE REGRESSÃO
    //quantidade e porcentagem dos resíduos situados entre -2s e +2s


//5. ANÁLISE DA VARIÂNCIA (ANOVA)
    //soma dos quadrados - explicada (regressão)

    //soma dos quadrados - não explicada (resíduos)

    //soma dos quadrados - total

    //graus de liberdade - explicada (regressão)

    //graus de liberdade - não explicada (resíduos)

    //graus de liberdade - total

    //quadrado médio - explicada (regressão)

    //quadrado médio - não explicada (resíduos)

    //F

//6. EQUAÇÃO DA REGRESSÃO

    //coeficientes da equação

    //equação da regressão
 
//7. TESTES DE HIPÓTESE
    
    //t calculado
    
    //significância
    
    //t tabelado

//8. PROJEÇÃO
    
    //transformações de cada variável
    
    //valor da variável do avaliando
    
    //valor da variável transformada

    //estimativa calculada unitária

    //estimativa calculada total

    //nível de confiança

    //desvio padrão observado

    //fator intervalo de confiança

    //média, moda e mediana observado

    //amplitude do intervalo de confiança

    //valor unitário máximo e mínimo do intervalo de confiança

    //valor total máximo e mínimo do intervalo de confiança

//9. CAMPO DE ARBÍTRIO

    //limite inferior unitário, total e do campo de arbítrio

    //estimativa calculada unitário, total e do campo de arbítrio

    //limite superior unitário, total e do campo de arbítrio

    //gráfico do campo de arbítrio

//10. CORRELAÇÕES

    //tabela de correlações das variáveis utilizadas no modelo

    //gráfico das correlações

//11. GRÁFICO DE ADRÊNCIA

    //tabela de dados observado e estimado

    //gráfico

//12. GRÁFICO DE RESÍDUOS

    //tabela de dados estimado e res./erro padrão

    //gráfico

//13. GRÁFICO HISTOGRAMA x DISTRIBUIÇÃO NORMAL

    //tabela

    //gráfico