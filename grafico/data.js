
let list_trasnf = ["x", "1/x", "x²", "1/x²", "e(x)", "1/e(x)", "ln(x)", "1/ln(x)"]
const lh = 4 //número de linhas do cabeçalho: variaveis, avaliando, transformada e checkbox
const ch = 2 //número de colunas do cabeçalho da lateral: itens, checkbox
const lx = 3 //número da linha que contém o checkbox do cabeçalho
const cx = 1 //número da linha que contém o checkbox do cabeçalho lateral

const transformations = ()=>{
  let selects = document.querySelectorAll("select")
  
  for (let i = 1; i < selects.length; i++) {
    let select = selects[i]
    for (let j = 0; j < list_trasnf.length; j++) {
      let option = document.createElement("option");
      option.text = list_trasnf[j];
      select.add(option);    
    }
  }
}
transformations()
// carrega TODOS os dados da tabela
let data = []
let table = []
let transf = [] 
let asses = [] //avaliando

const tableLoad = () => {
  
  let TABLE = []
  let cont = 0

  for (let i = 0; i < tableData.rows[0].cells.length; i++) {
    TABLE[i] = []

    if (i > 1) {
      asses[i - 2] = parseFloat(tableData.rows[1].cells[i].innerHTML)
      
    }

    for (let j = 0; j < tableData.rows.length; j++) {
      let node_check = tableData.rows[j].cells[i].querySelector("input[type=checkbox]")
      let node_select = tableData.rows[j].cells[i].querySelector("select")

      //console.log(node_check)
      //console.log(node_select)
      if (node_check) {
        TABLE[i][j] = node_check.checked
        
      } else if (node_select){
        TABLE[i][j] = node_select.value
        transf[cont] = node_select.value
        cont++
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
//tableLoad()
console.log(asses)


//carrega dados apenas das variaveis
const dataLoad = () => {

  let DATA = []

  for (let i = 2; i < tableData.rows[0].cells.length; i++) {
    let variable = tableData.rows[3].cells[i].querySelector("input[type=checkbox]") //3 é a linha que começa o checkbox
    let line = []
    let menu = tableData.rows[2].cells[i].querySelector("select")
    let curve = menu.value
    
    for (let j = 4; j < tableData.rows.length; j++) { //4 é numero de linhas do cabeçario
      let sample = tableData.rows[j].cells[1].querySelector("input[type=checkbox]")

      if (sample.checked == true && variable.checked == true) {
        let number = parseFloat(tableData.rows[j].cells[i].innerHTML)
        
        let number_transf = dataTransformation(number, curve)

        line.push(number_transf)

        //line.push(parseFloat(tableData.rows[j].cells[i].innerHTML))
      }
    }
    if (line.length > 0) {
      DATA.push(line)
    }
    //console.log(line)

  }

  //dataTransformation()

  //console.table(DATA)
  console.log(DATA)

  return DATA
}
//dataLoad()
data = dataLoad()

