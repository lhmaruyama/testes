
function addLine() {

  let celula
  let line = tableData.insertRow(-1);
  for (let i = 0; i < tableData.rows[0].cells.length; i++) {
    celula = line.insertCell(i);
    if (i == 0) {
      celula.innerHTML = String(tableData.rows.length - 3).padStart(2, "0");
    }
    if (i == cx) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkboxL'
      checkbox.type = 'checkbox';
      celula.appendChild(checkbox);

    }
    if (i <= cx) {
      celula.style.backgroundColor = "#dddddd"
    } else {
      celula.contentEditable = true;
    }
  }
  
}

function removeLine() {
  
  if (tableData.rows.length > 4) {
    tableData.deleteRow(-1);
  }
  
}


function addColumn() {

  for (let i = 0; i < tableData.rows.length; i++) {
    celula = tableData.rows[i].insertCell(-1);
    celula.contentEditable = true;

    if (i == ls) {
      const dropdown = document.createElement('select');
      celula.appendChild(dropdown);
      celula.contentEditable = false;
    }

    if (i == lx) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkboxC'
      checkbox.type = 'checkbox';
      celula.appendChild(checkbox);
      celula.contentEditable = false;

    }
    if (i < lh) {
      celula.style.backgroundColor = "#dddddd"
    }
  }
  
  transformations()
}

function removeColumn() {

  if (tableData.rows[0].cells.length > 4) {
    for (let i = 0; i < tableData.rows.length; i++) {
      tableData.rows[i].deleteCell(-1);
    }
  }

}

const buttonData=()=>{
  console.log(data)
  console.log(table)
}









