import { createContext, useContext, useState } from 'react';

const StudyContext = createContext(null);

export function StudyProvider({ children }) {
  const [completedIds, setCompletedIds] = useState([]);
  const [notification, setNotification] = useState(null);

  function notify(message, type = 'success') {
    setNotification({ id: Date.now(), message, type });
  }

  function toggleLesson(id) {
    const wasCompleted = completedIds.includes(id);
    setCompletedIds(current => current.includes(id)
      ? current.filter(item => item !== id) : [...current, id]);
    notify(wasCompleted ? 'Aula marcada como pendente.' : 'Mais uma aula concluída. Bom trabalho!', 'success');
  }

  return (
    <StudyContext.Provider value={{ completedIds, toggleLesson, notification, notify, setNotification }}>
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  return useContext(StudyContext);
}
