import type { ReactNode } from 'react';

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-mark" />{children}</div>;
}

export function SectionHeading({ eyebrow, title, copy, action }: { eyebrow?: string; title: ReactNode; copy?: string; action?: ReactNode }) {
  return <div className="section-heading"><div>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>{action && <div className="section-heading-action">{action}</div>}</div>;
}
