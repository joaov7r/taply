const params = new URLSearchParams(window.location.search);

const clienteSelecionado =
    params.get("cliente") || "dom-roger";

const estabelecimento = clientes[clienteSelecionado];

document.title = estabelecimento.nome;

document.querySelector(".logo img").src = estabelecimento.logo;
document.querySelector(".logo img").alt = estabelecimento.nome;

document.getElementById("description").innerHTML =
    estabelecimento.descricao;

document.body.style.setProperty(
    "--cliente-fundo",
    `url("${estabelecimento.fundo}")`
);

document.body.style.visibility = "visible";
