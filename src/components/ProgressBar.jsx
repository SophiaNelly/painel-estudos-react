export default function ProgressBar({ value }) {
  const percentage = Math.max(0, Math.min(100, Math.round(value)));
  return <div className="progress-block">
    <div className="progress-label"><span>Seu progresso na trilha</span><strong>{percentage}%</strong></div>
    <div className="progress-track" role="progressbar" aria-label="Aulas concluídas"
      aria-valuemin={0} aria-valuemax={100} aria-valuenow={percentage}>
      <div className="progress-fill" style={{ width: `${percentage}%` }} />
    </div>
  </div>;
}
