import { useId, useState } from 'react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  const prefix = useId();
  return <div className="accordion">{items.map(item => {
    const open = openId === item.id;
    return <section className="accordion-item" key={item.id}>
      <h3><button id={`${prefix}-button-${item.id}`} aria-expanded={open}
        aria-controls={`${prefix}-panel-${item.id}`}
        onClick={() => setOpenId(open ? null : item.id)}>
        {item.title}<span aria-hidden="true">{open ? '−' : '+'}</span>
      </button></h3>
      <div className={`accordion-panel ${open ? 'is-open' : ''}`}
        id={`${prefix}-panel-${item.id}`} role="region"
        aria-labelledby={`${prefix}-button-${item.id}`} aria-hidden={!open}>
        <div><p>{item.content}</p></div>
      </div>
    </section>;
  })}</div>;
}
