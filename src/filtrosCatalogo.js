const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderAcessorios() {
  exibirTodos();
  const produtosAcessorios = Array.from(
    catalogoProdutos.getElementsByClassName("acessorios")
  );

  for (const produto of produtosAcessorios) {
    produto.classList.add("hidden");
  }
}

function esconderComputadores() {
  exibirTodos(); // garante que todos sejam exibidos
  const produtosComputadores = Array.from(
    catalogoProdutos.getElementsByClassName("computadores")
  );

  for (const produto of produtosComputadores) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-acessorios")
    .addEventListener("click", esconderComputadores);
  document
    .getElementById("exibir-computadores")
    .addEventListener("click", esconderAcessorios);
}
