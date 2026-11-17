
import { mkdir, writeFile, readFile } from "node:fs/promises";

async function salvarHistorico() {
  const lista = [
    {
      id: 1,
      usuario: "Ana",
      texto: "Primeira mensagem salva!"
    },
    {
      id: 2,
      usuario: "Pedro",
      texto: "Segunda mensagem salva!"
    }
  ];

  await mkdir(new URL("./data/", import.meta.url), {
    recursive: true
  });

  const caminhoArquivo = new URL(
    "./data/mensagens-teste.json",
    import.meta.url
  );
 await writeFile(
    caminhoArquivo,
    JSON.stringify(lista, null, 2),
    "utf8"
  );

  console.log("Mensagens salvas com sucesso!");
}

salvarHistorico();


async function lerDadosSeguros(nomeArquivo) {
  try {
    const conteudo = await readFile(nomeArquivo, "utf8");

    const dados = JSON.parse(conteudo);

    return dados;

  } catch (erro) {
    if (erro.code === "ENOENT") {
      return [];
    }

    throw erro;
  }
}

const dados = await lerDadosSeguros(
  new URL("./data/arquivo-fantasma.json", import.meta.url)
);

console.log("Resultado com arquivo ausente:", dados);