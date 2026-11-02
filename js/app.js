const inputTarefa = document.getElementById("input-tarefa");

const botaoAdicionar = document.getElementById("botao-adicionar");

const listaTarefas = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click", function (){
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === ""){
        alert("Digite uma tarefa antes de adicionar!");
        return;
    }

    const novaTarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = textoTarefa + " ";

    const button = document.createElement("button");
    button.textContent = " 🗑️";

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(label);
    novaTarefa.appendChild(button);

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";

});

listaTarefas.addEventListener("change", function(event) {

    if (event.target.type == "checkbox"){
        const label = event.target.closest("li").querySelector("label");

        if (event.target.checked){
            label.classList.add("concluida");
        }
        else {
            label.classList.remove("concluida");
        }
    }

});

listaTarefas.addEventListener("click", function(event){

    if (event.target.tagName === "BUTTON"){
        const tarefa = event.target.closest("li");

        tarefa.remove();
    }
});