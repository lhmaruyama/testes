
// carrega os dados
const data = () => {

  let DATA = []
  let checkboxes = document.querySelectorAll("input[type=checkbox]")
  // tabela completa
  for (let i = 0; i < tabela.rows[0].cells.length; i++) {
    DATA[i] = []
    for (let j = 0; j < tabela.rows.length; j++) {
      //DATA[i][j]=`${i}${j}`
      if (i == 1 || (j == 1 && i > 0)) {
        DATA[i][j] = checkboxes[j].checked
        //DATA[i][j] = true
      } else {
        DATA[i][j] = tabela.rows[j].cells[i].innerHTML
      }
    }
  }

  //console.table(DATA)
  console.log(DATA)
  return DATA
}


