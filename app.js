const planetasLink = document.querySelector('.planetasAbaLink');
const planetasAba = document.querySelector('#planetasAba');

console.log(planetasLink);

planetasLink.addEventListener('click', abrindoFechandoAbaPlanetas)


let mostrandoFechandoAba = false;

function abrindoFechandoAbaPlanetas () {

    if (mostrandoFechandoAba !== true) {
        planetasAba.classList.remove('hide');
        mostrandoFechandoAba = true;
    } else {
        planetasAba.classList.add('hide');
        mostrandoFechandoAba = false;
    }   
        
};

