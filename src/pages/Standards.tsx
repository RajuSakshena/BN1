import { ArrowUpRight, Check, FileCheck2, Scale, ShieldCheck } from 'lucide-react';
import { Eyebrow, SectionHeading } from '../components/SectionHeading';

const commitments = [
  'No fabricated data points and no uncited empirical claims, under any circumstance.',
  'No partisan alignment, political bias or political sponsorship.',
  'No compromise on primary-data privacy, anonymity or participant consent.',
];
const rules = [
  { n: '01', title: 'Empirical accuracy', text: 'Depth of verification outranks speed of publishing. Fact-checking never yields to a release deadline.' },
  { n: '02', title: 'Non-partisan neutrality', text: 'We choose research questions based on what we think matters, not on what serves a particular outcome.' },
  { n: '03', title: 'Stakeholder utility', text: 'Analytical rigor is never diluted for simplicity. Technical terms receive plain-language definitions rather than being removed.' },
  { n: '04', title: 'Commercial viability', text: 'Non-partisan public utility outranks commercial monetization when the two conflict.' },
];

export default function Standards() {
  return <div className="inner-page">
    <section className="inner-hero page-wrap"><div className="inner-hero-copy"><Eyebrow>BN–STD / EDITORIAL STANDARDS</Eyebrow><h1>Trust is built<br/><em>into the method.</em></h1><p className="inner-hero-lede">These are commitments, not aspirations. Where a standard is not yet finalised, we say so directly rather than leaving it vague.</p></div><div className="standards-seal"><div className="seal-circle"><ShieldCheck size={32}/><span>BHARATNOMY</span><strong>OPEN<br/>METHOD</strong><small>✳ · EST. 2026 · ✳</small></div></div></section>
    <section className="section-block page-wrap"><div className="hard-lines"><div className="hard-lines-title"><Eyebrow>NON-NEGOTIABLES</Eyebrow><h2>Three lines<br/><em>we do not cross.</em></h2></div><div className="hard-lines-list">{commitments.map((line, i) => <div key={line}><span>0{i + 1}</span><Check size={17}/><p>{line}</p></div>)}</div></div></section>
    <section className="section-block page-wrap independence-note"><div className="independence-icon"><ShieldCheck/></div><div><Eyebrow>INDEPENDENCE</Eyebrow><h2>Free to follow the evidence.</h2><p>Bharatnomy is not affiliated with any political party, government body or advocacy organisation. We choose research questions based on what we think matters, not on what serves a particular outcome.</p></div></section>
    <section className="standards-process"><div className="page-wrap"><SectionHeading eyebrow="HOW WE RESOLVE TRADE-OFFS" title={<>A decision order.<br/><em>Not a moving target.</em></>}/><div className="decision-stack">{rules.map((r, i) => <div className={`decision-row decision-${i+1}`} key={r.n}><span>{r.n}</span><div><h3>{r.title}</h3><p>{r.text}</p></div><span className="decision-mark">{i === 0 ? '↑' : '·'}</span></div>)}</div><div className="decision-footnote"><Scale size={16}/> When priorities conflict, we decide in this order: empirical accuracy → non-partisan neutrality → stakeholder utility → commercial viability.</div></div></section>
    <section className="section-block page-wrap standards-grid-section"><div className="standards-grid"><article><FileCheck2/><span>01 / METHODOLOGY</span><h3>Shown, not just claimed.</h3><p>Every working paper and report will include a clear account of its data sources and methods, including limitations. If a number is uncertain, we say so.</p></article><article><ShieldCheck/><span>02 / SOURCING</span><h3>Traceable to the source.</h3><p>We rely on primary data wherever possible—government data, original surveys and direct fieldwork—and cite sources plainly enough to check independently.</p></article><article><Scale/><span>03 / CORRECTIONS</span><h3>Visible when we get it wrong.</h3><p>If we make a mistake, we publish a visible correction note rather than silently editing the record.</p></article></div><div className="funding-note"><span>FUNDING TRANSPARENCY</span><p>Details of Bharatnomy's funding and ownership structure will be published here once finalised.</p></div></section>
    <section className="closing-cta compact-cta"><div className="page-wrap closing-inner"><Eyebrow>QUESTIONS ABOUT OUR METHOD?</Eyebrow><h2>Good scrutiny<br/><em>makes better research.</em></h2><a className="button-primary" href="mailto:namaste@bharatnomy.com">Contact the team <ArrowUpRight size={16}/></a></div></section>
  </div>;
}
