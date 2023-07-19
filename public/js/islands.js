
// DARK MODE AND LIGHT MODE START
const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load", ()=>{
  if(document.body.classList.contains("dark")){
      dayNight.querySelector("i").classList.add("fa-sun")
  }else {
      dayNight.querySelector("i").classList.add("fa-moon")
  }
})
// DARK MODE AND LIGHT MODE END







window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})








//   


