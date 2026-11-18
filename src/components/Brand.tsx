import { Link } from 'react-router-dom';

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className={`brand-lockup ${compact ? 'brand-compact' : ''}`} aria-label="Bharatnomy home">
      <span className="brand-symbol" aria-hidden="true"><span>B</span><i /></span>
      {!compact && <span className="brand-wordmark"><strong>Bharatnomy</strong><small>INDEPENDENT RESEARCH</small></span>}
    </Link>
  );
}
