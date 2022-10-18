//----------------------Exercicio 3-------------------------------//

//Crie uma variável clickCount que irá acumular o número de clicks do botão
//Crie a lógica do evento, para que a cada click no botão, a variável seja atualizada com acréscimo de valor 1

const tagCLick = document.getElementById('click');
let button = document.getElementById('button');

const clickCount = () => {
 let click = 0;
 button.addEventListener('click', () => {
    button = click += 1;
    tagCLick.innerHTML = button;
 })

}
clickCount();

//-------------------------------------------------------------------------//


