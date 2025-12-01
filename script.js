document.getElementById("btnCarregar").addEventListener("click", async () => {
  const resposta = await fetch("https://fakestoreapi.com/products");
  const dados = await resposta.json();

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  dados.forEach(produto => {
    const li = document.createElement("li");
    li.textContent = produto.title;
    lista.appendChild(li);
  });
});
