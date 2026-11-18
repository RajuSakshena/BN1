import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandMark } from './Brand';

const navItems = [
  { to: '/', label: 'Overview', end: true },
  { to: '/research', label: 'Research' },
  { to: '/explore', label: 'Data explorer' },
  { to: '/datasets', label: 'Datasets' },
  { to: '/about', label: 'About' },
];

export function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="app-frame">
      <div className="top-ribbon"><span className="ribbon-dot" /> INDEPENDENT RESEARCH · INDIA, DISTRICT BY DISTRICT <span className="ribbon-right">EVIDENCE, MADE OPEN <span>↗</span></span></div>
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.end}>{item.label}</NavLink>)}
          </nav>
          <div className="header-actions">
            <Link className="header-cta" to="/explore">Explore data <ArrowUpRight size={15} /></Link>
            <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}
          </motion.nav>}
        </AnimatePresence>
      </header>
      <main key={location.pathname}>
        <AnimatePresence mode="wait">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.28, ease: 'easeOut' }}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand-col"><BrandMark /><p>Independent, evidence-based research on India's economy for citizens and market actors.</p><span className="footer-note">Every claim checked. Every insight open.</span></div>
      <div className="footer-links"><span className="footer-label">EXPLORE</span><Link to="/research">Research</Link><Link to="/datasets">Datasets</Link><Link to="/explore">Visualizations</Link></div>
      <div className="footer-links"><span className="footer-label">INSTITUTION</span><Link to="/about">About Bharatnomy</Link><Link to="/standards">Editorial standards</Link><Link to="/careers">Careers</Link></div>
      <div className="footer-contact"><span className="footer-label">START A CONVERSATION</span><a href="mailto:namaste@bharatnomy.com">namaste@bharatnomy.com <ArrowUpRight size={14}/></a><span>India · Independent by design</span></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Bharatnomy</span><span>This platform maintains no partisan political affiliation.</span><span>Built around evidence <i>✳</i></span></div>
  </footer>;
}
