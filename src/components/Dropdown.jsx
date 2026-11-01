import { useEffect, useId, useRef, useState } from 'react';

export default function Dropdown({ options, value, onSelect }) {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const trigger = useRef(null);
  const panelId = useId();

  useEffect(() => {
    function closeOutside(event) {
      if (container.current && !container.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);

  function handleKeys(event) {
    if (event.key === 'Escape') { setOpen(false); trigger.current.focus(); }
  }

  return <div className="dropdown" ref={container} onKeyDown={handleKeys}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button className="dropdown-trigger" ref={trigger} aria-expanded={open} aria-controls={panelId}
      onClick={() => setOpen(current => !current)} aria-label={`Filtrar por categoria: ${value}`}>
      {value}<span aria-hidden="true">⌄</span>
    </button>
    {open && <ul className="dropdown-options" id={panelId} aria-label="Categorias">
      {options.map(option => <li key={option}><button aria-pressed={value === option}
        onClick={() => { onSelect(option); setOpen(false); trigger.current.focus(); }}>{option}</button></li>)}
    </ul>}
  </div>;
}
