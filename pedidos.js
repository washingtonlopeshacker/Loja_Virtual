import {
  apagarDoLocalStorage,
  lerLocalStorage,
  desenharProdutoCarrinhoSimples,
} from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
  const elementoPedido = `<p class='text-xl text-bold my-4' >${new Date(
    pedidoComData.dataPedido
  ).toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}</p>
    <section id='container-pedidos-${
      pedidoComData.dataPedido
    }' class='bg-slate-300 p-3 rounded-md' >
    <p id= "preco-cupom-final" class="bg-slate-200 text-red-800 text-xl flex justify-end  rounded-sm pl-5 m-2 ">Cupom Fiscal = Total $${pedidoComData.pedidoFinal}</p>
    </section>
    `;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;

  for (const idProduto in pedidoComData.pedido) {
    desenharProdutoCarrinhoSimples(
      idProduto,
      `container-pedidos-${pedidoComData.dataPedido}`,
      pedidoComData.pedido[idProduto]
    );
  }
}

function precoCupomPedido () {
  const precoCupom = document.getElementById("preco-total");
  const precoTotalCompra = localStorage.getItem("precoTotalCompra");
  precoCupom.innerHTML = `Total: $${precoTotalCompra}`

}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico");
  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData);
  }
  apagarDoLocalStorage("historico", historico)
}
renderizarHistoricoPedidos();

