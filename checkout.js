import {
  desenharProdutoCarrinhoSimples,
  lerLocalStorage,
  apagarDoLocalStorage,
  salvarLocalStorage,
} from "./src/utilidades";

function desenharProdutosCheckout() {
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  for (const idProduto in idsProdutoCarrinhoComQuantidade) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      idsProdutoCarrinhoComQuantidade[idProduto]
    );
  }
}

function precoHistoricoPedido () {
  const precoHistorico = document.getElementById("preco-total")
  const precoTotalCarrinho = localStorage.getItem("precoTotalCarrinho")
  precoHistorico.innerHTML = `Total: $${precoTotalCarrinho}`

}

function finalizarCompra(evento) {
  evento.preventDefault();
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return
  }

  const valorFinalCupom = localStorage.getItem("precoTotalCarrinho");
  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
    pedidoFinal: valorFinalCupom

  }
  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoDePedidosAtualizado);
  apagarDoLocalStorage("carrinho");
  window.location.href = "./pedidos.html";
}


desenharProdutosCheckout()
precoHistoricoPedido()


document.addEventListener("submit", (evt) => finalizarCompra(evt));
