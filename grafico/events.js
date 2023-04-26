
const selectAll = document.querySelector("input[type=checkbox]")

selectAll.addEventListener("click", () => {
  let checkboxes = document.querySelectorAll("input[type=checkbox]")

  for (let i = 1; i < checkboxes.length; i++) {
    if (checkboxes[0].checked == true) {
      checkboxes[i].checked = true
    } else {
      checkboxes[i].checked = false
    }
  }
})

let filldAll = document.querySelectorAll("td")

for (let i = 1; i < filldAll.length; i++) {
  filldAll[i].addEventListener("input", function () {

    console.log("input");
    data = dataLoad()
    table = tableLoad()

  });
}

/* let dropdown = document.querySelectorAll("select")

for (let i = 1; i < dropdown.length; i++) {
  dropdown[i].addEventListener("input", function () {

    console.log("select");


  });
} */


let selectOne = document.querySelectorAll("input[type=checkbox]");
for (let i = 1; i < selectOne.length; i++) {

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

  });
}

