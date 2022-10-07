window.onload = function () {
    const getButton = document.getElementById('submit-button');
    getButton.addEventListener('click', stopPattern)
    const getEnableButton = document.getElementById('input-termos1')
      getEnableButton.addEventListener('change', enableImage)
      const alertNaoConcordo = document.getElementById('input-termos2')
      alertNaoConcordo.addEventListener('change', participationAlert)

}

function stopPattern (e) {
 e.preventDefault()
 const verify = validateChar()
 if (verify === false) {
    alert('Dados invalidos, digite novamente')
 }
 else {
    alert('Formulário enviado com sucesso!')
 }
}


function enableImage () {
    const button = document.getElementById('submit-button')
    const inputSim = document.getElementById('input-termos1')
    button.disabled = !inputSim.checked

}

function participationAlert () {
    const button = document.getElementById('submit-button')
    const naoConcordo = document.getElementById('input-termos2')
    button.enable = !naoConcordo.checked
    alert('Para concorrer a viagem você deve concordar que suas imagens possam ser usadas')
    enableImage()
}

function validateChar () {
 const inputName = document.getElementById('input-name').value.length;
 const nameError = inputName > 40 || inputName < 10


 const inputEmail = document.getElementById('input-email').value.length;
 const emailError = inputEmail > 40 || inputEmail < 10

 const textArea = document.getElementById('text-area').value.length
 const textError = textArea > 500
  
 if (nameError || emailError || textError) {
    return false
 }
 else {
    return true
 }

}
