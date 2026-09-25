const params = new URLSearchParams(window.location.search);

const clienteSelecionado =
    params.get("cliente") || "dom-roger";

const estabelecimento = clientes[clienteSelecionado];
