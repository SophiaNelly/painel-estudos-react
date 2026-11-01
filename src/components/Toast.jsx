import { useEffect } from 'react';
import { useStudy } from '../context/StudyContext.jsx';

export default function Toast() {
  const { notification, setNotification } = useStudy();
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 4000);
    return () => clearTimeout(timer);
  }, [notification, setNotification]);

  // A região permanece montada para anunciar novas mensagens a leitores de tela.
  return <div className="toast-region" role="status" aria-live="polite" aria-atomic="true">
    {notification && <div className={`toast toast-${notification.type}`}>
      <span>{notification.message}</span>
      <button aria-label="Fechar notificação" onClick={() => setNotification(null)}>×</button>
    </div>}
  </div>;
}
