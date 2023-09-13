export const catalogo = [
  {
    id: "1",
    marca: "Vandress Informatica",
    nome: "Cadeira Diretor",
    preco: 1670,
    imagem: "product-1.png",
    acessorios:true,
  },
  {
    id: "2",
    marca: "Vandress Informatica",
    nome: "Cadeira Gamer",
    preco: 1685,
    imagem: "product-2.png",
    acessorios: false,
  },
  {
    id: "3",
    marca: "Vandress Informatica",
    nome: "Base noteboock",
    preco: 400,
    imagem: "product-13.png",
    acessorios: true,
  },
  {
    id: "4",
    marca: "Vandress Informatica",
    nome: "teclado",
    preco: 160,
    imagem: "product-14.png",
    acessorios: false,
  },
  {
    id: "5",
    marca: "Vandress Informatica",
    nome: "mouse game",
    preco: 180,
    imagem: "product-5.png",
    acessorios: false,
  },
  {
    id: "6",
    marca: "Vandress Informatica",
    nome: "mouses",
    preco: 100,
    imagem: "product-6.png",
    acessorios: false,
  },
  {
    id: "7",
    marca: "Vandress Informatica",
    nome: "Mouse color",
    preco: 175,
    imagem: "product-7.png",
    acessorios: false,
  },
  {
    id: "8",
    marca: "Zara",
    nome: "Fone Hadset",
    preco: 688,
    imagem: "product-8.png",
    acessorios: false,
  },

  {
    id: "9",
    marca: "Vandress Informatica",
    nome: "Notboock Assus",
    preco: 3110,
    imagem: "product-9.png",
    acessorios: true,
  },
  {
    id: "10",
    marca: "Vandress Informatica",
    nome: "Notebook Compac",
    preco: 2670,
    imagem: "product-10.png",
    acessorios: true,
  },
  {
    id: "11",
    marca: "Vandress Informatica",
    nome: "Notebook Compac closed",
    preco: 2670,
    imagem: "product-11.png",
    acessorios: true,
  },
  {
    id: "8",
    marca: "Vandress Informatica",
    nome: "Projetor",
    preco: 1298,
    imagem: "product-12.png",
    acessorios: false,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
