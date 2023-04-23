
// carrega TODOS os dados da tabela
let data = []
let table = []

const tableLoad = () => {

  let TABLE = []

  for (let i = 0; i < tableData.rows[0].cells.length; i++) {
    TABLE[i] = []

    for (let j = 0; j < tableData.rows.length; j++) {
      let item = tableData.rows[j].cells[i].querySelector("input[type=checkbox]")

      if (item) {
        TABLE[i][j] = item.checked

      } else {
        TABLE[i][j] = tableData.rows[j].cells[i].innerHTML
      }
    }
  }

  //console.table(DATA)
  console.log(TABLE)
  return TABLE
}
table = tableLoad()
//table()


//carrega dados apenas das variaveis
const dataLoad = () => {

  let DATA = []

  for (let i = 2; i < tableData.rows[0].cells.length; i++) {
    let variable = tableData.rows[1].cells[i].querySelector("input[type=checkbox]")
    let line = []

    for (let j = 2; j < tableData.rows.length; j++) {
      let amostra = tableData.rows[j].cells[1].querySelector("input[type=checkbox]")
      if (amostra.checked == true && variable.checked == true) {

        line.push(parseFloat(tableData.rows[j].cells[i].innerHTML))
      }
    }
    if (line.length > 0) {
      DATA.push(line)
    }
    //console.log(line)

  }

  //console.table(DATA)
  console.log(DATA)

  return DATA
}
//data()
data = dataLoad()

