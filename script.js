let anotacoes = []
let editando = -1
function adicionar(){

    let assunto =
    document.getElementById("assunto").value

    let relevancia =
    document.getElementById("relevancia").value

    let texto =
    document.getElementById("anotacao").value

    // VALIDAÇÕES

document.getElementById("erroAssunto").innerHTML = ""

document.getElementById("erroRelevancia").innerHTML = ""

document.getElementById("erroTexto").innerHTML = ""

let erro = false

if(assunto == ""){

    document.getElementById("erroAssunto")
    .innerHTML = "Selecione um assunto"

    erro = true
}

if(relevancia == ""){

    document.getElementById("erroRelevancia")
    .innerHTML = "Selecione uma relevância"

    erro = true
}

if(texto.trim() == ""){

    document.getElementById("erroTexto")
    .innerHTML = "Digite uma anotação"

    erro = true
}

if(erro == true){

    return
}
    // DATA E HORA

    let agora = new Date()

    let dia = agora.getDate()
    let mes = agora.getMonth() + 1
    let ano = agora.getFullYear()

    let hora = agora.getHours()
    let minutos = agora.getMinutes()

    if(minutos < 10){
        minutos = "0" + minutos
    }

    let dataHora =
    `${dia}/${mes}/${ano} - ${hora}:${minutos}`

    // ADICIONAR ANOTAÇÃO

    anotacoes.push({

        data: dataHora,
        assunto: assunto,
        relevancia: relevancia,
        texto: texto

    })

    // LIMPAR CAMPOS

    document.getElementById("assunto").value = ""

    document.getElementById("relevancia").value = ""

    document.getElementById("anotacao").value = ""

    // ATUALIZAR TELA

    mostrarAnotacoes()
}

    //MOSTRAR AS ANOTAÇOES

function mostrarAnotacoes(){

    let lista = document.getElementById("lista")

    let minhaLista =
    document.getElementById("minhaLista")

    let titulo =
      document.getElementById("tituloAnotacoes")

    lista.innerHTML = ""
    if(anotacoes.length > 0){

        titulo.innerHTML = "Minhas Anotações"

    }else{

        titulo.innerHTML = ""
    }
    if(anotacoes.length > 0){

        minhaLista.style.display = "none"

    }else{

        minhaLista.style.display = "block"
    }

    for(let i = 0; i < anotacoes.length; i++){

        if(editando == i){

            lista.innerHTML += `
            
            <div class="anotacao">

                <div class="data">
                    <strong>Data:</strong>
                    ${anotacoes[i].data}
                </div>

                <label>Assunto:</label>

                <select id="editarAssunto">

                    <option value="estudos">Estudos</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="casa">Casa</option>
                    <option value="pessoal">Pessoal</option>

                </select>

                <label>Relevância:</label>

                <select id="editarRelevancia">

                    <option value="baixa">Baixa</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>

                </select>

                <div class="texto">

                    <strong>Anotação:</strong>

                    <textarea id="editarTexto">${anotacoes[i].texto}</textarea>
                         <span id="erroEditar"></span>
                </div>

                <div class="botoes">

                    <button onclick="salvar(${i})">
                        salvar
                    </button>

                    <button onclick="cancelar()">
                        cancelar
                    </button>

                </div>

            </div>
            
            `

        }else{

            lista.innerHTML += `
            
            <div class="anotacao">

                <div class="data">
                    <strong>Data:</strong>
                    ${anotacoes[i].data}
                </div>

                <div class="assunto-card">
                    <strong>Assunto:</strong>
                    ${anotacoes[i].assunto}
                </div>

                <div class="relevancia">
                    <strong>Relevância:</strong>
                    ${anotacoes[i].relevancia}
                </div>

                <div class="texto">

                    <strong>Anotação:</strong>

                    <p>${anotacoes[i].texto}</p>

                </div>

                <div class="botoes">

                    <button onclick="editar(${i})">
                        editar
                    </button>

                    <button onclick="remover(${i})">
                        remover
                    </button>

                </div>

            </div>
            
            `
        }
    }
}
function editar(i){
    editando = i

    mostrarAnotacoes()
}

function salvar(i){

    let novoTexto =
    document.getElementById("editarTexto").value

    let novoAssunto =
    document.getElementById("editarAssunto").value

    let novaRelevancia =
    document.getElementById("editarRelevancia").value

    document.getElementById("erroEditar").innerHTML = ""

    if(novoTexto.trim() == ""){

    document.getElementById("erroEditar")
    .innerHTML = "Digite uma anotação"

    return
    }

    let agora = new Date()

    let dia = agora.getDate()
    let mes = agora.getMonth() + 1
    let ano = agora.getFullYear()

    let hora = agora.getHours()
    let minutos = agora.getMinutes()

    if(minutos < 10){
        minutos = "0" + minutos
    }

    let novaData =
    `${dia}/${mes}/${ano} - ${hora}:${minutos}`

    anotacoes[i].texto = novoTexto
    anotacoes[i].assunto = novoAssunto
    anotacoes[i].relevancia = novaRelevancia

    anotacoes[i].data = novaData

    editando = -1

    mostrarAnotacoes()
}

function cancelar(){
    editando = -1
    mostrarAnotacoes()
}
function remover(i){

    anotacoes.splice(i,1)

    mostrarAnotacoes()
}
