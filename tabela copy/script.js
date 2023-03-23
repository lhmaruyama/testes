function adicionarLinha() {
  // let tabela = document.getElementById("tabela");
  let linha = tabela.insertRow(-1);
  let celula
  //isActive.push(false)
  //console.log(isActive);

  for (let i = 0; i < tabela.rows[0].cells.length; i++) {

    celula = linha.insertCell(i);
    celula.contentEditable = true;
    if (i == 0) {
      const checkbox = document.createElement('input');
      checkbox.className = 'checkbox'
      checkbox.type = 'checkbox';
      celula.appendChild(checkbox);
      //celula.innerHTML = '<input class="checkbox" type="checkbox">'
    }
    if (i == 1) {

      celula.innerHTML = String(tabela.rows.length - 1).padStart(2, "0");
    }
    if (i <= 1) {
      celula.style.backgroundColor = "#dddddd"
    }

  }
  update()
}

function removerLinha() {
  //let tabela = document.getElementById("tabela");
  let linhas = tabela.rows

  if (tabela.rows.length > 1) {
    tabela.deleteRow(-1);
  }
  //tabela.ariaRowIndex()
  //isActive.pop()
  //console.log(isActive);
  update()
}

//let tabela = document.getElementById("tabela");
for (let i = 0; i < tabela.rows.length; i++) {
  tabela.rows[i].cells[0].addEventListener('click', function () { 
    update()

   })
}

//console.log(checkboxes[0].checked)
//if(checkboxes[0].checked==true){}

const update = () => {
  let checkboxes = document.querySelectorAll("input[type=checkbox]")
  let isActive = []
  checkboxes.forEach(val => {
    isActive.push(val.checked)
  })
  console.log(isActive);
}

const selectAll = document.querySelector("input[type=checkbox]")
//selectAll[0].addEventListener() usado se document.querySelectorAll for definido como seletor
selectAll.addEventListener("click",()=>{
  console.log("isActive")
  let checkboxes = document.querySelectorAll("input[type=checkbox]")
  for (var i = 1; i < checkboxes.length; i++) {
    if(checkboxes[0].checked==true){
      checkboxes[i].checked=true
    }else{
      checkboxes[i].checked=false
    }
    //console.log(checkboxes[i].checked=true)
    //checkboxes[i].checked = this.checked;
  }
  //update()
})




//let isActive = [];
//let isActive = [false, false, false, false, false, false, false, false, false, false]


/* let checkboxes = document.querySelectorAll("input[type=checkbox]");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function () {
    //isActive[i] = checkboxes[i].checked;
    //console.log(isActive);
    
    //console.log(checkboxes.forEach(isActive=>{console.log(isActive)}));
  });
} */

/* function adicionarColuna() {
  let tabela = document.getElementById("tabela");
  let coluna, celula;
  for (let i = 0; i < tabela.rows.length; i++) {
    coluna = tabela.rows[i].insertCell(-1);
    coluna.contentEditable = true;
    //celula = document.createElement("td")
    //coluna.appendChild(celula)
  }
} */


/* function removerColuna() {
  let tabela = document.getElementById("tabela");
  if (tabela.rows[0].cells.length > 1) {
    for (let i = 0; i < tabela.rows.length; i++) {
      tabela.rows[i].deleteCell(-1);
    }
  }
} */


/* 
window.onload = function() {
  var tabela = document.getElementById("tabela");
  var celulas = tabela.getElementsByTagName("td");
  for (var i = 0; i < celulas.length; i++) {
    celulas[i].addEventListener("click", function() {
      console.log("Clique na célula " + this.cellIndex);
    });
  }
}; */

/* let selected = [false, false, false, false, false, false, false, false, false, false]
for (let i = 0; i < tabela.rows.length; i++) {
  for (let j = 0; j < tabela.rows[i].cells.length; j++) {
    //tabela.rows[i].cells[j].addEventListener('click', function() {
    // console.log(`Linha ${i+1}, Coluna ${j+1}`);
    // this.style.backgroundColor = "yellow"
    // });
    tabela.rows[i].cells[0].addEventListener('click', function () {
      //selected[i] = !selected[i]
      //console.log(selected)
      if (selected[i] == true) {
        tabela.rows[i].style.backgroundColor = "yellow"
        tabela.rows[i].cells[0].style.backgroundColor = "yellow"
      } else {
        tabela.rows[i].style.backgroundColor = ""
        tabela.rows[i].cells[0].style.backgroundColor = "#dddddd"
      }
      
    });
  }
} */




