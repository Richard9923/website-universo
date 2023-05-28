
const img = document.querySelector('.apresentacao__imagem__galaxia');
const marte = document.querySelector('.marte');
const terra = document.querySelector('.terra');
const venus = document.querySelector('.venus');
const plutao = document.querySelector('.plutao');
const btn = document.querySelector('.btn');
const div = document.querySelector('.pandora');


const imagensPlanetas = ["/imagens/mars.jpg","/imagens/earth.jpg", "/imagens/venus.jpg", "/imagens/saturno.jpg", "/imagens/plutao.jpg"];


    marte.addEventListener('click',   mudandoImagemPlanetaMars);
    terra.addEventListener('click',   mudandoImagemPlanetaTerra)
    venus.addEventListener('click',   mudandoImagemPlanetaVenus)
    plutao.addEventListener('click',  mudandoImagemPlanetaPlutao)


function mudandoImagemPlanetaMars () {
    img.setAttribute("src", imagensPlanetas[0])
}

function mudandoImagemPlanetaTerra () {
    img.setAttribute("src", imagensPlanetas[1]);
    div.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/63IMreFMW4s?controls=0&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

}
function mudandoImagemPlanetaVenus () {
    img.setAttribute("src", imagensPlanetas[2]) 
 }
 
 function mudandoImagemPlanetaPlutao () {
    img.setAttribute("src", imagensPlanetas[4])  
 }

 
