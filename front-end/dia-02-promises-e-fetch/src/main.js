import Swal from 'sweetalert2';
import './style.css';

const getImage = document.getElementById('image');
const getButton = document.getElementById('button');
const getName = document.getElementById('name');

const ACESS_TOKEN = '6016416748382545';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACESS_TOKEN}`;
const MAX_HEROES = 800;

const randomId = () => Math.floor(Math.random() * MAX_HEROES)

getButton.addEventListener('click', (event) => {
   event.preventDefault();
   const id = randomId();

   fetch(`${BASE_URL}/${id}`)
   .then((result) => result.json())
   .then((data) => {
     getImage.src = data.image.url;
     getName.innerHTML = data.name;
   })

   .catch((error) => Swal.fire({
    title: 'Hero not found',
    text: error.message,
    icon: 'error',
    confirmButtonText: 'Cool',
   }));

});
