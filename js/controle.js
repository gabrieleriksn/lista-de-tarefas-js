let inputAdd = document.getElementById("inputAdd");
let btnAdd = document.getElementById("btnAdd");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa(){
    let valorInput = inputAdd.value;

    contador++;

    if (valorInput == null || valorInput == "" || valorInput == undefined) {
        return;
    } 

    let novoItem = `
    <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`
    main.innerHTML += novoItem;
    inputAdd.value = "";
    inputAdd.focus();

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
    contador--;
}

function marcarTarefa(id) {
    var tarefa = document.getElementById(id);
    var classe = tarefa.getAttribute("class");
    var icone = document.getElementById("icone_" + id);

    if (classe === "item") {
        tarefa.classList.add("clicado");
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");
        tarefa.parentNode.appendChild(tarefa);
    } else {
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline")
        tarefa.classList.remove("clicado");
    }
}

inputAdd.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        btnAdd.click();
    }
})