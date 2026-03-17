'use client';

import Link from 'next/link';
import { SITE, NAV, SOCIALS } from '@/data/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name"><span>EKKKO</span></div>
            <p className="footer__brand-desc">{SITE.description}</p>
          </div>
          <div>
            <h4 className="footer__heading">Navigate</h4>
            {NAV.map((n) => <Link key={n.href} href={n.href} className="footer__link">{n.label}</Link>)}
          </div>
          <div>
            <h4 className="footer__heading">Connect</h4>
            {SOCIALS.map((s) => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="footer__link">{s.name}</a>)}
          </div>
          <div>
            <h4 className="footer__heading">Get In Touch</h4>
            <a href="mailto:thenadkarnees@gmail.com" className="footer__link">thenadkarnees@gmail.com</a>
            <p className="footer__link">{SITE.location}</p>
            <div className="footer__social" style={{ marginTop: '16px' }}>
              {SOCIALS.slice(0, 5).map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="footer__social-icon" dangerouslySetInnerHTML={{ __html: s.svg }} />
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">&copy; {new Date().getFullYear()} EKKKO. All rights reserved.</p>
          <Link href="/privacy" className="footer__link" style={{ fontSize: '13px' }}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}