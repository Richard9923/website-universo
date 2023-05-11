const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const tarefaContainer = document.querySelector('.tarefa-container');

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa()
    }
})



function adicionarTarefa () {
    const divTarefa = document.createElement('ul');
    divTarefa.classList.add('ulTarefa');
    const tarefa = document.createElement('li');
    tarefa.classList.add('liTarefa');
    tarefa.innerText = input.value;
    divTarefa.appendChild(tarefa);

    tarefaContainer.appendChild(divTarefa);

    input.value = '';
}


let um = 1;

function aumentar (a) {
    um += 1;
    btn.addEventListener('click', a)
}



console.log(um)