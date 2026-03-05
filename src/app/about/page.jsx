'use client';

import Link from 'next/link';
import { SITE, TIMELINE, STATS, IMAGES } from '@/data/data';

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero" style={{ minHeight: '75vh' }}>
        <div className="hero__bg"><img src={IMAGES.aboutHero} alt="About" /><div className="hero__overlay hero__overlay--gradient"></div></div>
        <div className="container hero__content hero__content--center" style={{ color: 'white' }}>
          <p className="overline mb-16 reveal" style={{ color: 'var(--yellow)' }}>
            <span className="text-mask"><span className="text-mask__inner">Our Story</span></span>
          </p>
          <h1 className="h-display h1 mb-24 reveal reveal-d1">About EKKKO</h1>
          <p className="body-lg reveal reveal-d2" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}>We exist because every great company deserves a great story — and every great story deserves to be heard.</p>
        </div>
      </section>

      {/* ─── FOUNDER ─── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <div className="reveal--left reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
              <img src={IMAGES.aboutFounder} alt={SITE.founder} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px' }}>{SITE.founder}</div>
                <div style={{ fontSize: '14px', color: 'var(--violet)', fontWeight: 500 }}>{SITE.founderRole}</div>
              </div>
            </div>
            <div className="reveal--right reveal">
              <p className="overline overline--color mb-16">Meet the Founder</p>
              <h2 className="h-display h3 mb-24">Building at the intersection of <span className="grad-text">narrative & technology</span></h2>
              <p className="body-lg mb-24">{SITE.founder} started EKKKO with a simple belief: in a world drowning in content, the companies that win are the ones that tell stories worth repeating.</p>
              <p className="body-lg mb-24">With roots in cybersecurity and technology through <a href={SITE.parent.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--violet)', fontWeight: 600, textDecoration: 'underline', textDecorationColor: 'var(--violet-light)', textUnderlineOffset: '3px' }}>{SITE.parent.name}</a>, {SITE.founder} brings a unique technical lens to creative strategy — understanding both the systems behind great products and the stories that make people care about them.</p>
              <p className="body-lg">EKKKO is where that dual expertise comes to life: a creative studio that thinks like an engineer and creates like an artist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section className="section section--gradient">
        <div className="container">
          <div className="grid grid--2 stagger">
            <div className="color-card color-card--violet hover-tilt">
              <p className="overline mb-12" style={{ color: 'var(--yellow)' }}>Mission</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700, lineHeight: 1.3, marginBottom: '16px' }}>To help ambitious companies build narratives that compound.</h3>
              <p style={{ fontSize: '16px', opacity: 0.85, lineHeight: 1.7 }}>We believe the best brands aren&apos;t built on marketing budgets — they&apos;re built on stories people want to tell each other.</p>
            </div>
            <div className="color-card color-card--dark hover-tilt">
              <p className="overline mb-12" style={{ color: 'var(--cyan)' }}>Vision</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700, lineHeight: 1.3, marginBottom: '16px', color: 'white' }}>A world where every great company has a story as powerful as its product.</h3>
              <p style={{ fontSize: '16px', opacity: 0.7, lineHeight: 1.7, color: 'white' }}>Technology moves fast. Stories move people. We bridge the gap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section">
        <div className="container">
          <div className="grid grid--4 stagger">
            {STATS.map((s) => (
              <div key={s.label} className="stat-box hover-scale">
                <div className="stat-box__number h-display counter grad">{s.number}</div>
                <div className="stat-box__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="image-divider"><img src={IMAGES.divider1} alt="" className="parallax-target" data-speed="0.1" /></div>

      {/* ─── TIMELINE ─── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">The Journey</p>
            <h2 className="h-display h3">Our Timeline</h2>
          </div>
          <div className="timeline stagger">
            {TIMELINE.map((t) => (
              <div key={t.year} className="timeline__item">
                <div className="timeline__dot"></div>
                <div className="timeline__year">{t.year}</div>
                <h3 className="timeline__title">{t.title}</h3>
                <p className="timeline__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container reveal">
          <h2 className="h-display h3 mb-24 shimmer-text">Want to be part of the story?</h2>
          <p className="body-lg mb-48" style={{ color: 'var(--text-on-dark-mid)', maxWidth: '480px', margin: '0 auto 48px' }}>We&apos;re always looking for ambitious companies who want their narrative to match their ambition.</p>
          <Link href="/collaborate" className="btn btn--primary">Start Collaborating</Link>
        </div>
      </section>
    </>
  );
}
