const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'
linhas = '';
const notas = [];
const atividades = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    calculaMedia();
    atualizaMedia();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade "${inputNomeAtividade.value}" já foi inserida`);
    }
    else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
        inputNotaAtividade.value = '';
        inputNomeAtividade.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMedia () {
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length
}

function atualizaMedia () {
    const mediaFinal = calculaMedia();
    document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultado-final').innerHTML = mediaFinal >=notaMinima ? spanAprovado : spanReprovado;
}