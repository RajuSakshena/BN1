import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, ChartNoAxesCombined, Database, Globe2, Leaf, ShieldCheck, Waypoints, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow, SectionHeading } from '../components/SectionHeading';
import { DataExplorerPanel } from '../components/DataExplorerPanel';

const focusAreas = [
  { n: '01', title: 'Climate adaptation & resilience', text: "How India's institutions are preparing for a hotter, less predictable future.", icon: Leaf, tag: 'RISK · RESILIENCE · READINESS' },
  { n: '02', title: 'Energy policy & markets', text: "The economics behind India's coal-to-renewables transition, not just the headlines.", icon: Zap, tag: 'TRANSITION · MARKETS · POLICY' },
  { n: '03', title: 'Macroeconomic health', text: 'Growth, inflation and fiscal capacity, read plainly and traced to primary data.', icon: ChartNoAxesCombined, tag: 'GROWTH · INFLATION · FISCAL' },
  { n: '04', title: 'Equity markets', text: "What is moving Indian capital markets, and why—separated from market narrative.", icon: Waypoints, tag: 'CAPITAL · FLOWS · BEHAVIOUR' },
  { n: '05', title: 'Commodity markets', text: 'The real-economy forces behind commodity prices, not the headline number alone.', icon: Globe2, tag: 'SUPPLY · PRICES · TRADE' },
];

function HeroOrb() {
  return <div className="hero-orb-scene" aria-label="Abstract orbital illustration representing connected economic systems">
    <div className="orbital-stamp stamp-one"><span>RESEARCH<br/>AS A SYSTEM</span><i>✳</i></div>
    <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
    <div className="orb-core"><div className="orb-core-inner"><span className="orb-cross">✳</span><span className="orb-core-word">BHARAT<br/>NOMY</span><span className="orb-core-caption">CONNECTED<br/>INTELLIGENCE</span></div></div>
    <div className="orb-node node-climate"><span className="node-icon"><Leaf size={16}/></span><span>CLIMATE</span></div>
    <div className="orb-node node-energy"><span className="node-icon"><Zap size={16}/></span><span>ENERGY</span></div>
    <div className="orb-node node-markets"><span className="node-icon"><ChartNoAxesCombined size={16}/></span><span>MARKETS</span></div>
    <div className="orb-node node-policy"><span className="node-icon"><Globe2 size={16}/></span><span>POLICY</span></div>
    <div className="orb-footnote"><span className="tiny-dot"/> FIVE LENSES · ONE SYSTEM</div>
    <div className="orbital-stamp stamp-two"><span>INDIA<br/>IN FOCUS</span></div>
  </div>;
}

export default function Home() {
  return <>
    <section className="home-hero page-wrap">
      <div className="hero-copy">
        <Eyebrow>INDEPENDENT ECONOMIC RESEARCH · INDIA</Eyebrow>
        <h1>India's economy,<br/><em>read as one</em><br/>connected system<span className="hero-period">.</span></h1>
        <p className="hero-lede">We connect climate, energy, markets and public policy to understand how India's economy actually works—down to the district level.</p>
        <div className="hero-actions"><Link className="button-primary" to="/explore">Explore the data <ArrowUpRight size={17}/></Link><Link className="button-text" to="/research">Discover our research <ArrowRight size={16}/></Link></div>
        <div className="hero-proof"><div className="proof-avatar-stack"><span>R</span><span>↗</span><span>✳</span></div><div><strong>Evidence before opinion.</strong><small>Independent by design. Open by default.</small></div></div>
      </div>
      <div className="hero-visual"><HeroOrb/><div className="hero-index-card"><span className="index-card-label">RESEARCH FRAMEWORK</span><strong>05<span> / 05</span></strong><div className="index-card-bars"><i/><i/><i/><i/><i/></div><small>Connected research lenses</small></div></div>
      <div className="hero-bottom-line"><span>01 — A DIFFERENT WAY TO READ THE ECONOMY</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14}/></span></div>
    </section>

    <section className="intro-band"><div className="page-wrap intro-band-inner"><span className="intro-mark">✳</span><div className="intro-band-copy"><p>Economic questions don't respect categories. <em>Our research doesn't either.</em></p><small>Our mission is to democratize high-rigor, home-grown research so Indian citizens and market actors can make informed decisions—and hold government accountable.</small></div><span className="intro-side-note">A MULTIDISCIPLINARY LENS</span></div></section>

    <section className="section-block page-wrap focus-section">
      <SectionHeading eyebrow="THE RESEARCH AGENDA" title={<>Five lenses.<br/><em>One connected picture.</em></>} copy="We study India's economy layer by layer, because the forces shaping it move together—not in silos." action={<Link className="subtle-link" to="/about">How we think <ArrowUpRight size={15}/></Link>}/>
      <div className="focus-ledger">{focusAreas.map((item) => { const Icon = item.icon; return <motion.div className="focus-row" key={item.n} whileHover={{ x: 7 }} transition={{ duration: .22 }}><span className="focus-number">{item.n}</span><div className="focus-title"><Icon size={19}/><h3>{item.title}</h3></div><p>{item.text}</p><span className="focus-tag">{item.tag}</span><ArrowUpRight className="focus-arrow" size={18}/></motion.div>; })}</div>
    </section>

    <section className="why-now-section"><div className="page-wrap why-now-inner"><div><Eyebrow>WHY THIS WORK MATTERS NOW</Eyebrow><h2>The quality of public decisions<br/>depends on the <em>quality of evidence.</em></h2></div><div><p>Democratic backsliding and social-media-driven misinformation can weaken the evidence base behind public decisions. At the same time, much economic research defaults toward partisan framing or remains behind institutional paywalls.</p><p>Bharatnomy is built against that default. We are independent by design, and we write for people outside the room where policy gets written.</p></div></div></section>

    <section className="featured-research-section">
      <div className="page-wrap featured-grid">
        <div className="featured-copy"><Eyebrow>RESEARCH IN PROGRESS · PRJ-01</Eyebrow><span className="featured-status"><i/> METHODOLOGY IN DEVELOPMENT</span><h2>When heat becomes<br/><em>an economic question.</em></h2><p>Tracking Heat Action Plans across Maharashtra. We are building a district-by-district record of what is documented versus what is operating—because a plan on paper and preparedness on the ground are different facts.</p><Link className="button-dark" to="/research">View the research programme <ArrowUpRight size={16}/></Link><div className="featured-meta"><span>CLIMATE ADAPTATION</span><span>MAHARASHTRA · DISTRICT LENS</span></div></div>
        <div className="heat-art"><div className="heat-art-top"><span>FIELD NOTE / 01</span><span>18°–28° N</span></div><svg viewBox="0 0 530 390" className="heat-illustration" role="img" aria-label="Abstract topographic heat contour illustration"><defs><radialGradient id="heatGlow"><stop offset="0" stopColor="#EAA77D" stopOpacity=".9"/><stop offset=".65" stopColor="#D58A69" stopOpacity=".28"/><stop offset="1" stopColor="#D58A69" stopOpacity="0"/></radialGradient></defs><circle cx="286" cy="180" r="170" fill="url(#heatGlow)"/><g fill="none" stroke="#D48A69" strokeWidth="1.2" opacity=".64"><path d="M37 190 C91 65 195 39 294 86 S459 69 497 155 432 294 313 302 94 315 37 190Z"/><path d="M64 190 C111 91 195 72 289 107 S434 91 465 163 415 270 311 276 112 289 64 190Z"/><path d="M94 190 C134 119 203 107 282 130 S405 119 431 172 393 249 307 251 139 265 94 190Z"/><path d="M124 190 C154 145 211 136 276 151 S381 144 397 179 367 226 304 228 163 239 124 190Z"/><path d="M157 190 C176 162 220 158 270 168 S355 166 365 187 340 211 300 207 191 219 157 190Z"/></g><g fill="#B66B4E" fontFamily="IBM Plex Mono" fontSize="9" letterSpacing="1.5"><text x="36" y="42">HEAT EXPOSURE</text><text x="390" y="350">FIELD RESEARCH</text><text x="39" y="355">DISTRICT / 2026</text></g><g fill="#F4F6EF" stroke="#B66B4E" strokeWidth="2"><circle cx="287" cy="181" r="7"/><circle cx="163" cy="140" r="4"/><circle cx="386" cy="213" r="4"/></g></svg><div className="heat-art-caption"><span>01 / 05</span><strong>Heat, health &amp; local readiness</strong><span>RESEARCH IN MOTION ↗</span></div></div>
      </div>
    </section>

    <section className="section-block page-wrap observatory-section">
      <SectionHeading eyebrow="THE BHARATNOMY OBSERVATORY" title={<>Find the pattern.<br/><em>Explore the evidence.</em></>} copy="Move from a national question to a local signal. Switch between map, chart and table views to see how the same dataset tells different parts of the story." action={<Link className="subtle-link" to="/explore">Open full explorer <ArrowUpRight size={15}/></Link>}/>
      <DataExplorerPanel compact/>
    </section>

    <section className="open-data-band"><div className="page-wrap open-data-inner"><div className="open-data-icon"><Database size={25}/></div><div><Eyebrow>OPEN BY DESIGN</Eyebrow><h2>Research should be<br/><em>checkable, not just readable.</em></h2><p>Every dataset is designed to travel with its source, method, units and limitations. Our first public releases are in preparation.</p></div><Link className="button-outline" to="/datasets">Explore the data library <ArrowUpRight size={16}/></Link><div className="open-data-orbit" aria-hidden="true"><span/><span/><span/></div></div></section>

    <section className="section-block page-wrap principles-section"><SectionHeading eyebrow="THE STANDARD WE HOLD" title={<>Independent in method.<br/><em>Open in practice.</em></>} copy="We choose research questions for their public and market utility, not for a preferred conclusion. Verification outranks speed; transparency outranks polish."/><div className="principles-grid"><div><ShieldCheck/><strong>Source-first research</strong><span>Primary data wherever possible. Clear citations wherever we make a claim.</span></div><div><BookOpen/><strong>Methodology in the open</strong><span>Limitations, definitions and uncertainty made visible—not buried.</span></div><div><Globe2/><strong>Non-partisan by design</strong><span>Independent questions, transparent standards and public utility.</span></div></div><div className="principles-bottom"><span>OUR EDITORIAL STANDARD · VERSION 1.0</span><Link to="/standards">Read our commitments <ArrowUpRight size={15}/></Link></div></section>

    <section className="audience-section page-wrap"><div className="audience-heading"><Eyebrow>WHO THIS IS FOR</Eyebrow><h2>Evidence for people<br/><em>making consequential decisions.</em></h2></div><div className="audience-cards"><article><span>01 / CIVIC ACTORS &amp; CITIZENS</span><h3>See the system more clearly.</h3><p>Transparent, evidence-based data and systems-level analysis that connects issues most coverage treats in isolation, so long-term national impact is easier to evaluate.</p></article><article><span>02 / MARKET &amp; INSTITUTIONAL ACTORS</span><h3>Look beyond the headline indicator.</h3><p>Rigorous, non-partisan primary datasets and macro-level risk assessments that integrate local socio-cultural context and regulatory tail-risk.</p></article></div></section>

    <section className="closing-cta"><div className="page-wrap closing-inner"><span className="closing-asterisk">✳</span><Eyebrow>THE WORK IS UNDERWAY</Eyebrow><h2>Better questions.<br/><em>Stronger evidence.</em></h2><p>We are building our first body of work in public. Follow the research, explore the data and help us decide what should be measured next.</p><div className="hero-actions"><Link className="button-primary" to="/research">Follow the research <ArrowUpRight size={17}/></Link><a className="button-text" href="mailto:namaste@bharatnomy.com">Get in touch <ArrowRight size={16}/></a></div></div></section>
  </>;
}
