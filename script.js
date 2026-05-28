function trocarPagina(id) {

  const paginas =
    document.querySelectorAll(".pagina");

  paginas.forEach((pagina) => {
    pagina.classList.remove("ativa");
  });

  document
    .getElementById(id)
    .classList.add("ativa");
}

function analisarIA() {

  const imagem =
    document.getElementById("imagem")
    .files[0];

  const loading =
    document.getElementById("loading");

  const resultado =
    document.getElementById("resultado");

  if (!imagem) {
    alert("Envie uma imagem primeiro!");
    return;
  }

  loading.innerHTML =
    "🔄 IA analisando imagem...";

  resultado.innerHTML = "";

  setTimeout(() => {

    const resultados = [

`🌿 Ferrugem Asiática Detectada

⚠ Risco: Médio

💧 Recomendação:
Aplicar irrigação controlada.`,

`🌱 Plantação Saudável

✅ Nenhuma doença encontrada.

📈 Saúde da plantação:
97%`,

`🐛 Possível ataque de pragas.

⚠ Monitoramento necessário.`

    ];

    const aleatorio =
      resultados[
        Math.floor(
          Math.random() *
          resultados.length
        )
      ];

    loading.innerHTML = "";

    resultado.innerHTML =
      aleatorio;

  }, 2500);
}

const notificacoes = [
  "⚠ Umidade baixa detectada",
  "🌿 Sistema funcionando normalmente",
];

const notificacoesDiv =
  document.getElementById("notificacoes");

notificacoes.forEach((n) => {

  const div =
    document.createElement("div");

  div.classList.add("notificacao");

  div.innerHTML = n;

  notificacoesDiv.appendChild(div);

});

function atualizarDashboard() {

  document.getElementById("temp")
  .innerHTML =
    Math.floor(Math.random() * 8 + 22)
    + "°C";

  document.getElementById("umidade")
  .innerHTML =
    Math.floor(Math.random() * 20 + 60)
    + "%";

  document.getElementById("vento")
  .innerHTML =
    Math.floor(Math.random() * 10 + 10)
    + "km/h";

  document.getElementById("chuva")
  .innerHTML =
    Math.floor(Math.random() * 50 + 20)
    + "%";
}

setInterval(atualizarDashboard, 4000);

const chatBox =
  document.getElementById("chat-box");

function adicionarMensagem(
  texto,
  tipo
) {

  const div =
    document.createElement("div");

  div.classList.add(
    "mensagem",
    tipo
  );

  div.innerHTML =
  `
    <div class="bubble">
      ${texto}
    </div>
  `;

  chatBox.appendChild(div);

  chatBox.scrollTop =
    chatBox.scrollHeight;
}

adicionarMensagem(
  "🌱 Olá! Sou o AgroBot AI.",
  "bot"
);

function enviarMensagem() {

  const input =
    document.getElementById("mensagem");

  const texto = input.value;

  if (!texto) return;

  adicionarMensagem(
    texto,
    "user"
  );

  let resposta =
    "🤖 Continue monitorando sua plantação.";

  const t =
    texto.toLowerCase();

  if (
    t.includes("água") ||
    t.includes("irrigação")
  ) {
    resposta =
      "💧 Utilize irrigação inteligente.";
  }

  if (
    t.includes("praga")
  ) {
    resposta =
      "🐛 Recomendamos controle biológico.";
  }

  if (
    t.includes("solo")
  ) {
    resposta =
      "🌱 O solo deve manter nutrientes equilibrados.";
  }

  if (
    t.includes("clima")
  ) {
    resposta =
      "☁ Clima favorável para produção.";
  }

  setTimeout(() => {

    adicionarMensagem(
      resposta,
      "bot"
    );

  }, 1000);

  input.value = "";
}

function toggleTheme() {

  document.body.classList.toggle(
    "light"
  );
}
