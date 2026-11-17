
import express from "express";
import { lerMensagens, salvarMensagens } from "./store.js";

const app = express();

app.use(express.json());


app.get("/mensagens", async (req, res) => {
  try {
    res.json(await lerMensagens());
  } catch (erro) {
    res.status(500).json({ erro: "Erro na leitura" });
  }
});

// Rota para salvar uma mensagem de exemplo
app.get("/exemplo-salvar", async (req, res) => {
  try {
    const lista = await lerMensagens();

    lista.push({
      id: Date.now(),
      usuario: "Aluno",
      texto: "Mensagem gravada no disco!"
    });

    await salvarMensagens(lista);

    res.json({
      gravado: true,
      total: lista.length
    });

  } catch (erro) {
    res.status(500).json({ erro: "Falha ao gravar" });
  }
});

app.listen(3000, () => {
  console.log("Servidor em http://localhost:3000");
});