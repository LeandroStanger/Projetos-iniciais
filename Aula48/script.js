document.getElementById('b1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mostrarMais1').textContent = `Aplicação prática: Reconhecimento de imagens em diagnósticos médicos, onde redes neurais convolucionais
            analisam radiografias e ressonâncias magnéticas para identificar tumores ou fraturas com alta precisão,
            auxiliando radiologistas. \nCuriosidade: O conceito surgiu na década de 1940, mas somente com o aumento da capacidade computacional e grandes volumes de dados nas últimas décadas é que seu potencial foi plenamente realizado, dando origem ao "deep learning".`;

});

document.getElementById('b2').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mostrarMais2').textContent = `Aplicação prática: Sistemas de aprovação de crédito em instituições financeiras, onde uma série de perguntas
            (renda, histórico de pagamentos, idade, etc.) leva a uma decisão sobre a concessão de empréstimos de forma
            automatizada e explicável. \nCuriosidade: Árvores de decisão são consideradas modelos "caixa branca" porque suas regras de decisão são
            facilmente interpretáveis por humanos, diferentemente de muitos modelos de deep learning que funcionam como
            "caixas pretas". Curiosidade: O conceito surgiu na década de 1940, mas somente com o aumento da capacidade computacional e
            grandes volumes de dados nas últimas décadas é que seu potencial foi plenamente realizado, dando origem ao
            "deep
            learning".`;
});

document.getElementById('b3').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('mostrarMais3').textContent = `Aplicação prática: Assistentes virtuais e chatbots que compreendem consultas complexas, mantêm conversas
            contextuais e geram conteúdo textual coerente, como redação de e-mails, resumo de documentos ou suporte ao
            cliente 24 horas.\nCuriosidade: O treinamento de modelos como o GPT-4 consome energia equivalente a dezenas de residências por
            ano, levantando discussões sobre sustentabilidade na IA, enquanto seu conhecimento é tão amplo que pode
            passar em exames profissionais complexos como a prova da ordem dos advogados dos EUA.`;
});