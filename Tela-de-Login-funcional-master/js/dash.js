const form = document.querySelector('#infos-prod');
const tabela = document.querySelector('#tbody');
let idx = form.idx.value;


//Salvar no localstorage
const atualizarLocalStorage =(produtos) => {localStorage.setItem('produtos', JSON.stringify(produtos))}

//Recuperar os produtos
const recuperarLocalStorage = () => JSON.parse(localStorage.getItem('produtos')|| '[]');

const salvarProduto = (e) =>{
    e.preventDefault()
    //pegar os dados do formulario
    const nome = form.nome.value;
    const preco = Number(form.preco.value);
    const prime = form.prime.checked;

    if(idx === 'novo'){
        const produtos = recuperarLocalStorage();
        produtos.push({id:produtos.length + 1, nome, preco, prime});
        atualizarLocalStorage(produtos);
        preencherTabela();
        form.reset();
    }else{
        let produto = {id: idx, nome, preco, prime}
        atualizarProduto(idx, produto);
        preencherTabela();
        form.reset();
        idx = 'novo';
    }



}

const preencherTabela = () =>{
    const produtos = recuperarLocalStorage();
    tabela.innerHTML = '';
    for(const produto of produtos){
        tabela.innerHTML +=`
        
        <tr>
            <th scope="row">${produto.id}</th>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.prime ? "sim" : "Não"}</td>
            
            <td>
                <img type="button" width="40" src="img/lixeira.png" onclick="removerProduto(${produto.id})" />
                <img type="button" width="40" src="img/editar.png" onclick="editarProduto(${produto.id})" />
            </td>
            
        
        
        
        </tr>
        `;
    }


}

const removerProduto =(id) =>{
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex(produtos => produtos.id === id);
    if(indexProduto < 0) return;
    produtos.splice(indexProduto, 1);
    atualizarLocalStorage(produtos);
    alert(`Produto removido`);
    preencherTabela();
}


const editarProduto = (id) =>{
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex(produto => produto.id === id);
    form.nome.value = produtos[indexProduto].nome;
    form.preco.value = produtos[indexProduto].preco;
    form.prime.checked = produtos[indexProduto].prime;
    idx = id;
}

const atualizarProduto = (id, produto) =>{
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex(produto => produto.id === id);
    produtos[indexProduto] = produto;
    atualizarLocalStorage(produtos);
}
//EVENTOS
form === null || form === void 0 ? void 0 : form.addEventListener('submit', salvarProduto);
document.addEventListener('DOMContentLoaded', preencherTabela);
