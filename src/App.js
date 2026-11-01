import { useState } from 'react';
import Accordion from './components/Accordion.jsx';
import Pagination from './components/Pagination.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Tabs from './components/Tabs.jsx';
import Dropdown from './components/Dropdown.jsx';
import Toast from './components/Toast.jsx';
import LessonCard from './components/LessonCard.jsx';
import { useStudy } from './context/StudyContext.jsx';
import { lessons, questions } from './data.js';

export default function App() {
  const [category, setCategory] = useState('Todas as áreas');
  const [currentPage, setCurrentPage] = useState(1);
  const { completedIds, notify } = useStudy();
  const pageSize = 3;
  const filteredLessons = lessons.filter(lesson => category === 'Todas as áreas' || lesson.category === category);
  const totalPages = Math.max(1, Math.ceil(filteredLessons.length / pageSize));
  const visibleLessons = filteredLessons.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const progress = completedIds.length / lessons.length * 100;

  function changeCategory(selected) {
    setCategory(selected);
    setCurrentPage(1); // Ao filtrar, volta para uma página que existe.
    notify(`Filtro aplicado: ${selected}.`, 'info');
  }

  const lessonPanel = <section aria-labelledby="lessons-title">
    <div className="section-heading">
      <div><h2 id="lessons-title">Sua próxima descoberta</h2><p>Pequenos passos, conhecimento que fica.</p></div>
      <Dropdown options={['Todas as áreas', 'React', 'CSS', 'HTML']} value={category} onSelect={changeCategory} />
    </div>
    <div className="lesson-grid">{visibleLessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} />)}</div>
    <p className="page-summary" aria-live="polite">Página {currentPage} de {totalPages} · {filteredLessons.length} aulas nesta seleção</p>
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
  </section>;

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header"><div className="container header-inner">
      <a className="brand" href="#conteudo"><span className="brand-icon" aria-hidden="true">m.</span>meu ritmo</a>
      <span className="header-label">PAINEL DE ESTUDOS</span>
    </div></header>
    <main id="conteudo" className="container">
      <section className="hero" aria-labelledby="page-title">
        <div><p className="eyebrow">APRENDA. PRATIQUE. EVOLUA.</p>
          <h1 id="page-title">Um passo de cada vez.<br /><span>No seu ritmo.</span></h1>
          <p className="hero-description">Sua trilha de desenvolvimento web começa aqui. Organize as aulas e acompanhe cada conquista.</p>
        </div>
        <aside className="progress-card" aria-label="Resumo dos estudos">
          <span className="eyebrow">TRILHA · DESENVOLVIMENTO WEB</span>
          <p className="stat">{completedIds.length}<span> / {lessons.length} aulas</span></p>
          <ProgressBar value={progress} />
          <p className="muted">{completedIds.length === lessons.length ? 'Trilha concluída. Parabéns!' : 'Cada aula conta para o seu próximo passo.'}</p>
        </aside>
      </section>
      <Tabs items={[
        { id: 'aulas', title: 'Minha trilha', content: lessonPanel },
        { id: 'sobre', title: 'Sobre o projeto', content: <section className="info-panel"><p className="eyebrow">DO CONCEITO À PRÁTICA</p><h2>Uma interface feita de componentes</h2><p>Este painel reúne uma trilha de estudos com filtros, paginação e acompanhamento do progresso.</p><p>Foi implementado com React, hooks e CSS responsivo. A Context API compartilha as conclusões e notificações entre componentes.</p></section> },
        { id: 'ajuda', title: 'Dúvidas frequentes', content: <section className="info-panel"><h2>Precisa de uma orientação?</h2><Accordion items={questions} /></section> },
      ]} />
    </main>
    <footer className="container site-footer"><span>meu ritmo · desenvolvimento web</span><span>React + CSS · Projeto acadêmico</span></footer>
    <Toast />
  </>;
}
