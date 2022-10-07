window.onload = function () {
    const getButton = document.getElementById('submit-button');
    getButton.addEventListener('click', stopPattern)
}

function stopPattern (e) {
 e.preventDefault()
}


function selected () {
    const getImput = document.getElementById('input-termos1');
    getImput.addEventListener('click', function(e){
        getImput.classList.add('selected')
        e.target
    })

    console.log(getImput)

}

selected();