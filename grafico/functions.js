//REFATORAR CODIGO E FUNÇÕES

const load_all_table = () => {

    let table = []
    for (let i = 0; i < tableData.rows[0].cells.length; i++) {

        table[i] = []

      for (let j = 0; j < tableData.rows.length; j++) {

        let item = tableData.rows[j].cells[i].querySelector("input[type=checkbox]")

        if (item) {
            table[i][j] = item.checked
        } else {
            table[i][j] = tableData.rows[j].cells[i].innerHTML
        }
      }
    }
    //console.table(DATA)
    //console.log(TABLE)
    return table
  }

  const load_data_variables = () => {

    let data = []
    let x = -1
    let y
    for (let i = 2; i < tableData.rows[0].cells.length; i++) {
      let variable = tableData.rows[1].cells[i].querySelector("input[type=checkbox]")
      let line = []
      if (variable.checked == true) {
        //x++
        //y=0
        //DATA[x] = []
      }
      for (let j = 2; j < tableData.rows.length; j++) {
        let amostra = tableData.rows[j].cells[1].querySelector("input[type=checkbox]")
        if (amostra.checked == true && variable.checked == true) {
          //DATA[x][y] = tableData.rows[j].cells[i].innerHTML
          //y++
          line.push(parseFloat(tableData.rows[j].cells[i].innerHTML))
        }
      }
      if (line.length > 0) {
        data.push(line)
      }
      //console.log(linha)
  
    }
  
    //console.table(DATA)
    console.log(data)
    //console.log(x,y)
    return data
  }