'use client';

import { PRIVACY } from '@/data/data';

export default function PrivacyPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <p className="overline overline--color mb-16 reveal">Legal</p>
          <h1 className="h-display h2 mb-24 reveal reveal-d1">Privacy Policy</h1>
          <p className="body-lg reveal reveal-d2">Last updated: March 2026</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="stagger">
            {PRIVACY.map((p, i) => (
              <div key={i} style={{ marginBottom: '48px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: 'var(--text)' }}>
                  <span style={{ color: 'var(--violet)', marginRight: '8px' }}>0{i + 1}.</span>{p.title}
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
