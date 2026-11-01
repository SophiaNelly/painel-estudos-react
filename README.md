# Meu ritmo — painel de estudos

Projeto de referência para estudar componentes React, props, estado, hooks e responsividade. Revise, adapte e compreenda o código antes de usar em uma atividade individual. Não há persistência: atualizar a página reinicia as conclusões.

## Executar no GitHub Codespaces

Abra o terminal na pasta que contém `package.json` e execute, uma linha por vez:

```bash
npm install
npm run dev
```

Na aba **PORTS / PORTAS**, abra a porta **5173** no navegador. A aplicação não exige banco de dados, conta de usuário ou chave de API.

## Componentes e responsabilidades

| Arquivo | O que faz | Conceito principal |
| --- | --- | --- |
| src/App.js | Integra os componentes, filtra e pagina as aulas | useState, props e eventos |
| src/components/Accordion.jsx | FAQ com um item aberto por vez e transição | Estado local e props items |
| src/components/Pagination.jsx | Anterior, próxima e páginas numeradas | Props e callback onPageChange |
| src/components/ProgressBar.jsx | Mostra percentual de aulas concluídas | Prop value e atributos ARIA |
| src/components/Tabs.jsx | Alterna trilha, sobre e dúvidas | Estado local, teclado e ARIA |
| src/components/Dropdown.jsx | Filtro que fecha ao selecionar ou clicar fora | useState, useEffect, useRef |
| src/components/Toast.jsx | Notificação temporária com botão de fechar | Context, useEffect e clearTimeout |
| src/components/LessonCard.jsx | Marca e desmarca conclusões | Props lesson e Context |
| src/context/StudyContext.jsx | Compartilha conclusões e notificações | createContext, Provider e useContext |
| src/data.js | Conteúdo das aulas e perguntas | Arrays de objetos |
| src/styles.css | Layout, cores, transições e media queries | CSS responsivo |

O extra escolhido é **Context API**. LessonCard dispara uma notificação; Toast recebe os dados pelo mesmo contexto, sem comunicação direta entre os dois. App também lê as conclusões para calcular o progresso.

O Vite prepara o projeto para o navegador. A configuração em `vite.config.js` permite JSX no arquivo `App.js`, mantendo o nome solicitado pelo enunciado.

## Entender os conceitos

- Componente: função que retorna uma parte da interface, como um cartão ou uma aba.
- Props: dados recebidos por um componente. ProgressBar recebe value e Pagination recebe totalPages, currentPage e onPageChange.
- State: memória do componente. A aba selecionada, o filtro e a página atual ficam em state.
- Evento: ação como onClick, que executa uma função quando você clica.
- useEffect: configura efeitos como temporizadores e eventos externos. O retorno do efeito remove eventos ou cancela o temporizador.
- Context API: compartilha dados com os componentes envolvidos sem passar as mesmas props por toda a árvore.

## Personalizar de maneira simples

1. Abra `src/App.js` e adapte o título e a descrição da trilha.
2. Abra `src/data.js` e escreva os títulos, descrições e dúvidas com suas palavras.
3. Mantenha os IDs únicos. Se mudar categorias, atualize também as opções do Dropdown em App.js.
4. Salve com Ctrl+S. O navegador atualiza durante a execução.
5. Depois das alterações, repita os testes abaixo.

## Teste manual antes de entregar

1. Clique em concluir: a barra deve ir de 0% para 11% e aparecer um toast.
2. Desmarque a aula: a barra deve voltar para 0%.
3. Mude de página pelos números, por Próxima e por Anterior. Anterior começa desabilitado; Próxima fica desabilitado na última página.
4. Abra o filtro, escolha CSS e confirme que só há aulas de CSS. Abra novamente e clique fora: deve fechar. Teste Escape também.
5. Troque entre as três abas. Na aba de dúvidas, abra duas perguntas em sequência: a anterior deve fechar.
6. Gere um toast, feche no × e gere outro. Espere quatro segundos: deve desaparecer sozinho.
7. No Chrome/Edge pressione F12, depois Ctrl+Shift+M. Se F12 abrir volume ou brilho, use Fn+F12 ou o menu do navegador → Mais ferramentas → Ferramentas do desenvolvedor.
8. No modo Responsive, teste larguras de 375, 768 e 1280 pixels. Confira ausência de rolagem horizontal, cartões reorganizados e controles utilizáveis.
9. Use Tab para navegar. Nas abas, use as setas esquerda/direita. Botões devem ter contorno de foco visível.

## Vídeo obrigatório: sequência de 2 a 3 minutos

Use este roteiro como tópicos, explicando com suas palavras apenas o que compreender:

1. Mostre o Codespaces e a aplicação. Apresente o tema do painel.
2. Conclua uma aula: mostre a atualização da barra e o toast. Explique que o estado muda ao clicar.
3. Troque a página e o filtro. Mostre que os botões anterior/próxima ficam desabilitados nos limites.
4. Troque as abas e abra perguntas do FAQ. Mostre o toast fechando automaticamente ou pelo botão.
5. Abra o modo responsivo e mostre celular, tablet e desktop.
6. Volte ao editor. Mostre App.js integrando componentes, Pagination recebendo props e Tabs usando useState.
7. Mostre StudyContext.jsx e Toast.jsx: estado compartilhado e temporizador com useEffect. Isso demonstra o extra.

## Compilar

```bash
npm run build
```

Esse comando gera a pasta `dist`. Para enviar o código, entregue o repositório com `src`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `.gitignore` e este README. Não envie `node_modules`.

Para salvar no GitHub, abra outro terminal do Codespaces e execute:

```bash
git add .
git commit -m "Implementa painel React com componentes responsivos"
git push
```

Confirme na página do repositório se os arquivos apareceram. Um endereço de prévia do Codespaces não substitui o repositório: a prévia depende do ambiente em execução e das permissões de acesso.

Entregue o vídeo e o código conforme o canal e o formato indicados pelo professor.
