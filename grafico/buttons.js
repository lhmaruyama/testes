
function addLine() {
  // let tabela = document.getElementById("tabela");
  //isActive.push(false)
  //console.log(isActive);
  let celula
  let line = tableData.insertRow(-1);
  for (let i = 0; i < tableData.rows[0].cells.length; i++) {
    celula = line.insertCell(i);
    if (i == 0) {
      celula.innerHTML = String(tableData.rows.length - 2).padStart(2, "0");
    }
    if (i == 1) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkboxL'
      checkbox.type = 'checkbox';
      celula.appendChild(checkbox);
      //celula.innerHTML = '<input class="checkbox" type="checkbox">'
    }
    if (i <= 1) {
      celula.style.backgroundColor = "#dddddd"
    } else {
      celula.contentEditable = true;
    }
  }
  //update()
  //dataLoad()
}

function removeLine() {
  //let tabela = document.getElementById("tabela");
  //let linhas = tableData.rows

  if (tableData.rows.length > 4) {
    tableData.deleteRow(-1);
  }
  //tableData.ariaRowIndex()
  //isActive.pop()
  //console.log(isActive);
  //update()
}

//let tabela = document.getElementById("tabela");
/* for (let i = 0; i < tableData.rows.length; i++) {
  tableData.rows[i].cells[0].addEventListener('click', function () {
    //update()
  })
} */

//console.log(checkboxes[0].checked)
//if(checkboxes[0].checked==true){}

const update = () => {
  let isActive = []
  //console.log(isActive);
  //console.log(allTrue);
  return isActive
}

const selectAll = document.querySelector("input[type=checkbox]")
//selectAll[0].addEventListener() usado se document.querySelectorAll for definido como seletor
selectAll.addEventListener("click", () => {
  let checkboxes = document.querySelectorAll("input[type=checkbox]")

  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[0].checked == true) {
      checkboxes[i].checked = true
    } else {
      checkboxes[i].checked = false
    }
    //checkboxes[i].checked = this.checked;
  }
  dataLoad()
  //update()
  //infoSet()
})

let fildAll = document.querySelectorAll("td")

for (let i = 1; i < fildAll.length; i++) {
  fildAll[i].addEventListener("input", function () {

    console.log("input");
    data = dataLoad()
    table = tableLoad()

  });
}

const buttonData=()=>{
  console.log(data)
  console.log(table)
}

let selectOne = document.querySelectorAll("input[type=checkbox]");
for (let i = 1; i < selectOne.length; i++) {
  //let n[i] = selectOne[i].checked
  selectOne[i].addEventListener("click", function () {
    let isActive = []
    selectOne.forEach(value => {
      isActive.push(value.checked)
    })
    const allTrue = isActive.slice(1).every(value => value === true)
    if (allTrue == true) {
      selectOne[0].checked = true
    } else {
      selectOne[0].checked = false
    }
    //update()
    //dataCheck()
    //let n = selectOne.length
    dataLoad()
    //infoSet()
    //console.log(DATA);




    //console.log(selectOne[i].checked);
    //isActive[i] = checkboxes[i].checked;
    //console.log(checkboxes.forEach(isActive=>{console.log(isActive)}));
  });
}






function addColumn() {
  //let tabela = document.getElementById("tabela");
  //let celula;
  for (let i = 0; i < tableData.rows.length; i++) {
    celula = tableData.rows[i].insertCell(-1);
    celula.contentEditable = true;
    //celula = document.createElement("td")
    //coluna.appendChild(celula)
    if (i == 1) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkboxC'
      checkbox.type = 'checkbox';
      celula.appendChild(checkbox);
      celula.contentEditable = false;

    }
    if (i < 2) {
      celula.style.backgroundColor = "#dddddd"
    }
  }
  //update()

}

function removeColumn() {
  //let tabela = document.getElementById("tabela");
  if (tableData.rows[0].cells.length > 4) {
    for (let i = 0; i < tableData.rows.length; i++) {
      tableData.rows[i].deleteCell(-1);
    }
  }
  //update()

}

/*
window.onload = function() {
  var tabela = document.getElementById("tabela");
  var celulas = tableData.getElementsByTagName("td");
  for (var i = 0; i < celulas.length; i++) {
    celulas[i].addEventListener("click", function() {
      console.log("Clique na célula " + this.cellIndex);
    });
  }
}; */

//let selected = [false, false, false, false, false, false, false, false, false, false]
/* for (let i = 0; i < tableData.rows.length; i++) {
  for (let j = 0; j < tableData.rows[i].cells.length; j++) {
    //tableData.rows[i].cells[j].addEventListener('click', function() {
    // console.log(`Linha ${i+1}, Coluna ${j+1}`);
    // this.style.backgroundColor = "yellow"
    // });
    tableData.rows[i].cells[0].addEventListener('click', function () {
      //selected[i] = !selected[i]
      //console.log(selected)
      if (selected[i] == true) {
        tableData.rows[i].style.backgroundColor = "yellow"
        tableData.rows[i].cells[0].style.backgroundColor = "yellow"
      } else {
        tableData.rows[i].style.backgroundColor = ""
        tableData.rows[i].cells[0].style.backgroundColor = "#dddddd"
      }
      
    });
  }
} */




