// Podemos fazer com fetch também!!!
//fetch('pessoas.json')
//    .then(resposta => resposta.json())
//    .then(json => carregaPagina(json));
axios('pessoas.json')
    .then(resposta => carregaPagina(resposta.data));
function carregaPagina(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.empresa;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.idade;
        tr.appendChild(td3);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.Resultado');
    resultado.appendChild(table);
};