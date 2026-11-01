export const lessons = [
  { id: 1, title: 'Componentes e JSX', category: 'React', duration: '20 min', description: 'Divida uma interface em pequenas partes reutilizáveis.' },
  { id: 2, title: 'Dados com props', category: 'React', duration: '15 min', description: 'Envie informações de um componente para outro.' },
  { id: 3, title: 'Estado com useState', category: 'React', duration: '25 min', description: 'Atualize a interface quando os dados mudarem.' },
  { id: 4, title: 'Efeitos com useEffect', category: 'React', duration: '20 min', description: 'Configure eventos e temporizadores com limpeza.' },
  { id: 5, title: 'Layout com CSS Grid', category: 'CSS', duration: '20 min', description: 'Organize cartões em colunas adaptáveis.' },
  { id: 6, title: 'Media queries', category: 'CSS', duration: '15 min', description: 'Adapte a página para celular, tablet e computador.' },
  { id: 7, title: 'HTML semântico', category: 'HTML', duration: '15 min', description: 'Use elementos que expliquem o papel do conteúdo.' },
  { id: 8, title: 'Acessibilidade na prática', category: 'HTML', duration: '25 min', description: 'Adicione rótulos, foco visível e navegação por teclado.' },
  { id: 9, title: 'Estado compartilhado', category: 'React', duration: '25 min', description: 'Compartilhe informações usando a Context API.' },
];

export const questions = [
  { id: 'inicio', title: 'Como começar minha trilha?', content: 'Escolha uma categoria, abra uma aula e marque sua conclusão. O progresso considera todas as nove aulas da trilha.' },
  { id: 'progresso', title: 'Como o progresso é calculado?', content: 'O número de aulas concluídas é dividido pelo total de aulas e multiplicado por 100. Desmarcar uma aula também atualiza a barra.' },
  { id: 'salvar', title: 'Minhas conclusões ficam salvas?', content: 'Nesta demonstração, os dados ficam na memória da aplicação. Recarregar a página reinicia as conclusões.' },
  { id: 'mobile', title: 'Posso usar pelo celular?', content: 'Sim. Os cartões se reorganizam em uma coluna e os controles se ajustam a telas menores.' },
];
