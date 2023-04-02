
// carrega os dados
const table = () => {

  let TABLE = []
  //let checkboxes = document.querySelectorAll("input[type=checkbox]")
  // tabela completa
  for (let i = 0; i < tabela.rows[0].cells.length; i++) {
    TABLE[i] = []
    for (let j = 0; j < tabela.rows.length; j++) {
      //TABLE[i][j]=`${i}${j}`
      /*       if (i == 1 || (j == 1 && i > 0)) {
              TABLE[i][j] = checkboxes[j].checked
              //TABLE[i][j] = true
            } else {
            } */
      let item = tabela.rows[j].cells[i].querySelector("input[type=checkbox]")
      if (item) {
        //let checkboxes = tabela.rows[j].cells[i].innerHTML
        TABLE[i][j] = item.checked

      } else {

        TABLE[i][j] = tabela.rows[j].cells[i].innerHTML

      }
    }
  }

  //console.table(DATA)
  console.log(TABLE)
  return TABLE
}

table()

const data = () => {

  let DATA = []
  let x = -1
  let y
  for (let i = 2; i < tabela.rows[0].cells.length; i++) {
    let variavel = tabela.rows[1].cells[i].querySelector("input[type=checkbox]")
    let linha = []
    if (variavel.checked == true) {
      //x++
      //y=0
      //DATA[x] = []
    }
    for (let j = 2; j < tabela.rows.length; j++) {
      let amostra = tabela.rows[j].cells[1].querySelector("input[type=checkbox]")
      if (amostra.checked == true && variavel.checked == true) {
        //DATA[x][y] = tabela.rows[j].cells[i].innerHTML
        //y++
        linha.push(tabela.rows[j].cells[i].innerHTML)
      }
    }
    if (linha.length > 0) {
      DATA.push(linha)
    }
    //console.log(linha)

  }

  //console.table(DATA)
  console.log(DATA)
  //console.log(x,y)
  return DATA
}
data()


//teste
const dataCheck = () => {

  let checkboxesC = document.querySelectorAll("input[type=checkbox].checkboxC")
  // tabela completa
  for (let i = 0; i < checkboxesC.length; i++) {

    console.log(checkboxesC[i].checked)

  }

}