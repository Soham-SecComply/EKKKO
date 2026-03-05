'use client';

import Link from 'next/link';
import { SITE, BLOGS, PODCAST, SOCIALS, SERVICES, STATS, IMAGES, PLAY_SVG } from '@/data/data';

const Arrow = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;

export default function HomePage() {
  const marqueeItems = ['Business Growth', 'Podcast', 'Digital Presence', 'Founder Positioning', 'Community', 'Partnership & Alliances'];
  const featured = BLOGS.slice(0, 3);

  return (
    <>
      {/* ─── HERO — YouTube Video Background ────────── */}
      <section className="hero" style={{ overflow: 'hidden', minHeight: '100vh', background: '#000' }}>
        {/* YouTube video background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <iframe
            src="https://www.youtube.com/embed/xNdQ_Je7v0E?autoplay=1&mute=1&loop=1&playlist=xNdQ_Je7v0E&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&start=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ position: 'absolute', top: '50%', left: '50%', width: '120vw', height: '120vh', transform: 'translate(-50%, -50%)', border: 'none', pointerEvents: 'none' }}
          />
          {/* Dark overlay for text readability */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.75) 100%)' }}></div>
        </div>

        {/* Content pinned to bottom of hero */}
        <div className="container" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, paddingBottom: 'clamp(32px, 4vw, 60px)' }}>
          <div className="reveal" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 'clamp(24px, 3vw, 48px)', flexWrap: 'wrap' }}>
            <div>
              <p className="h-display" style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: 'rgba(255,255,255,0.8)', lineHeight: 0.9, marginBottom: '20px', whiteSpace: 'nowrap' }}>Where Ideas</p>
              <div className="reveal reveal-d1" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/collaborate" className="btn btn--primary">Start a Project</Link>
                <Link href="/about" className="btn btn--outline" style={{ borderColor: 'white', color: 'white' }}>Our Story</Link>
              </div>
            </div>
            <h1 className="h-display grad-text" style={{ fontSize: 'clamp(80px, 15vw, 200px)', lineHeight: 0.85, letterSpacing: '-0.04em', margin: 0 }}>EKKKO</h1>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────── */}
      <div className="marquee">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee__item">{item} <span className="dot"></span></span>
          ))}
        </div>
      </div>

      {/* ─── INTRO / WHAT WE DO ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <div className="reveal">
              <p className="overline overline--color mb-16">What We Do</p>
              <h2 className="h-display h3 mb-24">We don&apos;t just create content.<br />We architect <span className="grad-text">perception.</span></h2>
              <p className="body-lg mb-32">Every brand has a story. Most tell it wrong. We help companies find the narrative thread that connects their vision to their audience — then amplify it across every touchpoint.</p>
              <Link href="/collaborate" className="btn-arrow">See Our Services <Arrow /></Link>
            </div>
            <div className="stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="color-card color-card--violet hover-tilt" style={{ gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>◆</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px' }}>Growth</div>
                <p style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>Strategic business growth frameworks</p>
              </div>
              <div className="color-card color-card--coral hover-tilt">
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>▲</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Alliances</div>
              </div>
              <div className="color-card color-card--cyan hover-tilt">
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>●</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Digital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ───────────────────────────────── */}
      <section className="section section--dark" style={{ padding: 'clamp(48px,6vw,80px) 0' }}>
        <div className="container">
          <div className="grid grid--4 stagger">
            {STATS.map((s) => (
              <div key={s.label} className="stat-box">
                <div className="stat-box__number h-display counter" style={{ color: 'var(--cyan)' }}>{s.number}</div>
                <div className="stat-box__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────── */}
      <section className="section section--gradient">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">Services</p>
            <h2 className="h-display h3">Everything your story needs</h2>
            <p>End-to-end strategy for the companies shaping tomorrow.</p>
          </div>
          <div className="grid grid--3 stagger">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card hover-shine">
                <div className="service-card__num">0{i + 1}</div>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED BLOGS ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-heading reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p className="overline overline--color mb-12">Latest Thinking</p>
              <h2 className="h-display h3">From the Blog</h2>
            </div>
            <Link href="/blogs" className="btn-arrow">View All <Arrow /></Link>
          </div>
          <div className="grid grid--3 stagger">
            {featured.map((b) => (
              <Link key={b.slug} href={`/blogs/${b.slug}`} className="card hover-shine">
                <div className="card__image"><img src={b.image} alt={b.title} /></div>
                <div className="card__body">
                  <div className="card__category">{b.category}</div>
                  <h3 className="card__title">{b.title}</h3>
                  <p className="card__excerpt">{b.excerpt}</p>
                  <div className="card__meta"><span>{b.date}</span><span>{b.readTime} read</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PODCAST PREVIEW ──────────────────────────── */}
      <section className="section section--dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,5vw,80px)', alignItems: 'center' }}>
            <div className="reveal">
              <p className="overline mb-12" style={{ color: 'var(--cyan)' }}>The Podcast</p>
              <h2 className="h-display h3 mb-16">{PODCAST.title}</h2>
              <p className="body-lg mb-32" style={{ color: 'var(--text-on-dark-mid)' }}>{PODCAST.subtitle}</p>
              <Link href="/podcast" className="btn btn--primary">Listen Now</Link>
            </div>
            <div className="reveal--right reveal" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', aspectRatio: '16/10' }}>
              <img src={PODCAST.trailerImage} alt="Podcast" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                <div className="pulse-glow" style={{ width: '72px', height: '72px', borderRadius: '50%' }} dangerouslySetInnerHTML={{ __html: PLAY_SVG }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PREVIEW ───────────────────────────── */}
      <section className="section section--warm">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">Follow the Conversation</p>
            <h2 className="h-display h3">We&apos;re Everywhere</h2>
          </div>
          <div className="social-grid stagger" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-box hover-shine" style={{ color: 'inherit' }}>
                <div className="social-box__icon" style={{ color: s.color }} dangerouslySetInnerHTML={{ __html: s.svg }} />
                <h4 className="social-box__name">{s.name}</h4>
                <p className="social-box__handle">{s.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--grad-hero)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-blob hero-blob--1" style={{ opacity: 0.2 }}></div>
        <div className="hero-blob hero-blob--2" style={{ opacity: 0.2 }}></div>
        <div className="container reveal" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="h-display h2 mb-24">Ready to make<br />some noise?</h2>
          <p className="body-lg mb-48" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 48px' }}>Let&apos;s build something that echoes. Partner with us and turn your vision into a narrative the world can&apos;t ignore.</p>
          <Link href="/collaborate" className="btn btn--white">Let&apos;s Talk</Link>
        </div>
      </section>
    </>
  );
}