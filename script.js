

//let buttonAgain = document.querySelector('.again')
//let buttonAgain = document.querySelector('.tie')
//let buttonAgain = document.querySelectorAll('.again')
//let buttonAgain = document.getElementById('again')
//let buttonAgain = document.getElementsByClassName('.again')


/* function blabla (){
    let buttonAgain = document.querySelectorAll('.again')
    console.log(buttonAgain[0])
} */

/* let buttonAgain = document.querySelectorAll('.again')
buttonAgain[1].onclick = function(){
    console.log("lsiforiu")
} */

let buttonAgain = document.querySelector('.tie')
buttonAgain.onclick = function(){
    //let token = Math.random().toString(10).substring(2)
    let token = Math.floor(Date.now() * Math.random()).toString(36)
    console.log(token)
}


/* export function teste(){
    let blabla = 1 + 2
    return blabla
  } */
  /*     const variavel = teste()
  alert(variavel) */