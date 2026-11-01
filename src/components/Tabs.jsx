import { useId, useRef, useState } from 'react';

export default function Tabs({ items }) {
  const [active, setActive] = useState(0);
  const prefix = useId();
  const buttons = useRef([]);

  function handleKeyDown(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % items.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = items.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setActive(next);
      buttons.current[next].focus();
    }
  }

  return <div>
    <div className="tabs" role="tablist" aria-label="Seções da trilha">
      {items.map((item, index) => <button key={item.id} ref={element => { buttons.current[index] = element; }}
        role="tab" id={`${prefix}-tab-${item.id}`} aria-selected={active === index}
        aria-controls={`${prefix}-panel-${item.id}`} tabIndex={active === index ? 0 : -1}
        onClick={() => setActive(index)} onKeyDown={event => handleKeyDown(event, index)}>{item.title}</button>)}
    </div>
    {items.map((item, index) => <div key={item.id} id={`${prefix}-panel-${item.id}`} role="tabpanel"
      aria-labelledby={`${prefix}-tab-${item.id}`} hidden={active !== index} tabIndex={0}>
      {item.content}
    </div>)}
  </div>;
}
