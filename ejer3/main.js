const boton = document.querySelector('button')

boton.addEventListener('click', evento =>{
  evento.preventDefault()

  const num = document.querySelector('input').value
  const span = document.querySelector('span')

  if(isNaN(parseInt(num)) === false){
    span.innerText = parseInt(num) + 1
  }else if(span !== null){
    span.innerText = "Valor incorrecto"
  }
})