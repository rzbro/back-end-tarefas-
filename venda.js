let nomeCliente = "João Carlos";
let tipoCliente = "premium";

let nomeProduto = "Teclado Mecânico";
let precoProduto = 180.00;

let estoque = 10;
let quantidadePedido = 5;

//tem estoque suficiente?
let estoqueOk = quantidadePedido<= estoque;

if(!estoqueOk){
    console.log("pedido RECUSADO - estoque insuficiente")
}