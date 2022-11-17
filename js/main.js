const icone = document.querySelector(".header__menu-icone")
const nav = document.querySelector(".header__navegacao")
const li = document.querySelectorAll(".header__navegacao li") 


function exibirNav(){
  if(nav.classList.contains("exibir")){
    nav.classList.remove("exibir")
  }else{
    nav.classList.add("exibir")
  }
}


icone.addEventListener("click",exibirNav)

li.forEach((li)=>{
  li.addEventListener("click",exibirNav)
})



