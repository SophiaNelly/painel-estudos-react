import { useStudy } from '../context/StudyContext.jsx';

export default function LessonCard({ lesson }) {
  // O cartão e o Toast compartilham estado mesmo sem receber dados um do outro.
  const { completedIds, toggleLesson } = useStudy();
  const completed = completedIds.includes(lesson.id);
  return <article className={`lesson-card ${completed ? 'completed' : ''}`}>
    <div className="card-top"><span className="badge">{lesson.category}</span><span>{lesson.duration}</span></div>
    <h3>{lesson.title}</h3><p>{lesson.description}</p>
    <button className={completed ? 'button-secondary' : 'button-primary'} aria-pressed={completed}
      aria-label={`${completed ? 'Desmarcar' : 'Concluir'} aula: ${lesson.title}`}
      onClick={() => toggleLesson(lesson.id)}>{completed ? '✓ Concluída' : 'Marcar como concluída'}</button>
  </article>;
}
