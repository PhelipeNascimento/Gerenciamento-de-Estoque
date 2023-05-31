// Definindo uma classe para representar um item de estoque
class Item {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
}

// Criando um array para armazenar os itens de estoque
const estoque = [];

// Função para adicionar um novo item ao estoque
function adicionarItem() {
    const nome = document.getElementById("nome-input").value;
    const quantidade = parseInt(document.getElementById("quantidade-input").value);
    const preco = parseFloat(document.getElementById("preco-input").value);

    const novoItem = new Item(nome, quantidade, preco);
    estoque.push(novoItem);

    exibirEstoque();

    // Limpa os campos de entrada após adicionar o item
    document.getElementById("nome-input").value = "";
    document.getElementById("quantidade-input").value = "";
    document.getElementById("preco-input").value = "";
}

// Função para exibir os itens do estoque
function exibirEstoque() {
    const estoqueList = document.getElementById("estoque-list");
    estoqueList.innerHTML = "";

    estoque.forEach(item => {
        const listItem = document.createElement("li");
        listItem.className = "estoque-item";

        const nomeSpan = document.createElement("span");
        nomeSpan.className = "item-nome";
        nomeSpan.textContent = item.nome;

        const quantidadeSpan = document.createElement("span");
        quantidadeSpan.className = "item-quantidade";
        quantidadeSpan.textContent = ` Quantidade: ${item.quantidade}`;

        const precoSpan = document.createElement("span");
        precoSpan.textContent = ` Preço: R$ ${ item.preco.toFixed(2) }`;

        listItem.appendChild(nomeSpan);
        listItem.appendChild(quantidadeSpan);
        listItem.appendChild(precoSpan);

        estoqueList.appendChild(listItem);
    });
}

