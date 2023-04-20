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
//let line
//let coluna
for (let i = tableData.rows.length; i < VALOR.length + 2; i++) {

  let line = tableData.insertRow();
  //celula = line.insertCell();
  //celula.contentEditable = true;
  //line = tableData.insertRow(-1);
  for (let j = 0; j < VAR.length; j++) {
    celula = line.insertCell();
    celula.contentEditable = true;
    if (j == 0) {
      celula.innerHTML = String(tableData.rows.length - 2).padStart(2, "0");
    }
    if (j == 1) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkboxL'
      checkbox.type = 'checkbox';
      checkbox.checked = true
      celula.appendChild(checkbox);
      //celula.innerHTML = '<input class="checkbox" type="checkbox">'
    }
    if (j <= 1) {
      celula.style.backgroundColor = "#dddddd"
    }
    //celula = tableData.rows[i].insertCell(-1);
    //celula.contentEditable = true;
  }

}

for (let i = 0; i < VALOR.length + 2; i++) {
  for (let j = 0; j < VAR.length - 2; j++) {
    celula = tableData.rows[i].insertCell(-1);
    celula.contentEditable = true;

    if (i == 1) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkboxC'
      checkbox.type = 'checkbox';
      checkbox.checked = true
      celula.appendChild(checkbox);
      celula.contentEditable = false;

    }
    if (i < 2) {
      celula.style.backgroundColor = "#dddddd"
    }
  }
}

//preenche os dados na tabela
for (let i = 2; i < tableData.rows.length; i++) {

  tableData.rows[0].cells[2].innerHTML = VAR[0]
  tableData.rows[0].cells[3].innerHTML = VAR[1]
  tableData.rows[0].cells[4].innerHTML = VAR[2]
  tableData.rows[0].cells[5].innerHTML = VAR[3]

  tableData.rows[i].cells[2].innerHTML = VALOR[i - 2]
  tableData.rows[i].cells[3].innerHTML = AREA[i - 2]
  tableData.rows[i].cells[4].innerHTML = LOC[i - 2]
  tableData.rows[i].cells[5].innerHTML = ACAB[i - 2]

}




