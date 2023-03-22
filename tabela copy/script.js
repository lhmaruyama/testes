function adicionarLinha() {
  let tabela = document.getElementById("tabela");
  let linha = tabela.insertRow(-1);
  let coluna, celula;
  for (let i = 0; i < tabela.rows[0].cells.length; i++) {
    coluna = linha.insertCell(i);
    coluna.contentEditable = true;
    //celula = document.createElement("td");
    //coluna.appendChild(celula);
  }
}

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

function removerLinha() {
  let tabela = document.getElementById("tabela");
/*   if (tabela.rows.length > 1) {
    tabela.deleteRow(-1);
  } */
  tabela.ariaRowIndex()
}

/* function removerColuna() {
  let tabela = document.getElementById("tabela");
  if (tabela.rows[0].cells.length > 1) {
    for (let i = 0; i < tabela.rows.length; i++) {
      tabela.rows[i].deleteCell(-1);
    }
  }
} */



/* window.onload = function() {
  var tabela = document.getElementById("tabela");
  var celulas = tabela.getElementsByTagName("td");
  for (var i = 0; i < celulas.length; i++) {
    celulas[i].addEventListener("click", function() {
      console.log("Clique na célula " + this.cellIndex);
    });
  }
}; */


for (let i = 0; i < tabela.rows.length; i++) {
  for (let j = 0; j < tabela.rows[i].cells.length; j++) {
/*     tabela.rows[i].cells[j].addEventListener('click', function() {
      console.log(`Linha ${i+1}, Coluna ${j+1}`);
      this.style.backgroundColor = "yellow"
    }); */
    tabela.rows[i].cells[j].addEventListener('click', function() {
      console.log(`Linha ${i+1}, Coluna ${j+1}`);
      /* this.style.backgroundColor = "yellow" */
    });
  }
}
