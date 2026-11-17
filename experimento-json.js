//1.1

const historicoMensagens = [
  {
    id: 1,
    usuario: "Isabela",
    texto: "Bom dia"
  },
  {
    id: 2,
    usuario: "Pedro",
    texto: "Servidor online!"
  }
];


const conteudoSalvar = JSON.stringify(historicoMensagens,null,2);

console.log(conteudoSalvar);
console.log("Tipo da variável:", typeof conteudoSalvar);

//1.2
const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';
const mensagemR =  JSON.parse(jsonValido)
console.log(mensagemR[0].texto);

const jsonQuebrado = '[{ id: 10, quebrado: sim ';

try{
    JSON.parse(jsonQuebrado);
}catch (erro){
     console.error(
    "Alerta: JSON corrompido! Detalhes:",
    erro.message
  );
}