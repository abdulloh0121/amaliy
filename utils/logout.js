const elForim = document.activeElement('.forim_action')
const elInputUsername = document.activeElement('.err')
const elInputPassword = document.activeElement('.err2')
const elButton  = document.addEventListener('.login_button')


elForim.addEventListener('submit' , () =>{


  if(elInputUsername.value.length ==  0 || elInputUsername.value.length < 6){
    alert(`iltimos togri malimot kirgizing`)
  }else{

  }
})