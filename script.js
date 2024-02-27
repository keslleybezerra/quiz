const perguntas = [
  {
    pergunta: "O que significa 'DOM' em JavaScript?",
    respostas: [
      "Data Object Model",
      "Document Object Model",
      "Dynamic Object Model",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação de valor e tipo",
      "Atribuição de valor",
      "Comparação de valor apenas",
    ],
    correta: 0,
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "function myFunction()",
      "def myFunction()",
      "void myFunction()",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método utilizado para converter uma string para minúsculas?",
    respostas: ["toUpperCase()", "toLowerCase()", "convertCase('lower')"],
    correta: 1,
  },
  {
    pergunta: "Qual é o resultado de 5 + '5' em JavaScript?",
    respostas: ["10", "55", "Error"],
    correta: 1,
  },
  {
    pergunta: "O que é um closure em JavaScript?",
    respostas: [
      "Uma função que não retorna valor",
      "Um objeto que armazena variáveis",
      "Uma função que tem acesso a variáveis externas",
    ],
    correta: 2,
  },
  {
    pergunta: "Como você verifica o tipo de uma variável em JavaScript?",
    respostas: ["checkType()", "typeof()", "getType()"],
    correta: 1,
  },
  {
    pergunta: "Qual é o significado da sigla 'AJAX' em JavaScript?",
    respostas: [
      "Asynchronous JavaScript and XML",
      "Advanced JavaScript and XML",
      "Asynchronous JavaScript and XHTML",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual método é usado para remover um elemento do final de um array em JavaScript?",
    respostas: ["pop()", "remove()", "delete()"],
    correta: 0,
  },
  {
    pergunta: "O que é o operador ternário em JavaScript?",
    respostas: [
      "Um operador lógico",
      "Um operador de comparação",
      "Um operador condicional",
    ],
    correta: 2,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

//loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  //coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
