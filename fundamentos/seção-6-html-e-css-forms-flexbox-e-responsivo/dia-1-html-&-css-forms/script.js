window.onload = function () {
    const getButton = document.getElementById('submit-button');
    getButton.addEventListener('click', stopPattern)
}

function stopPattern (e) {
 e.preventDefault()
}

