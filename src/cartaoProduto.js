import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${
      produtoCatalogo.acessorios ? "computadores" : "acessorios"
    }' id="card-produto-${produtoCatalogo.id}">
        <img
        src="./assets/img/${produtoCatalogo.imagem}"
        alt="Produtos Vandress Informática]."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${produtoCatalogo.marca}</p>
        <p class='text-sm'>${produtoCatalogo.nome}</p>
        <p class='text-sm'>$${produtoCatalogo.preco}</p>
        <button id='adicionar-${
          produtoCatalogo.id
        }' class=" h-10 bg-indigo-950 text-slater-900 hover:bg-slate-400 rounded-lg"><i class="fa-solid fa-cart-plus fa-lg" style="color: #fafafa;"></i></button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
