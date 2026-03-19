'use client';

import Link from 'next/link';
import { SITE, STATS, IMAGES } from '@/data/data';

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
              <img src="https://ik.imagekit.io/nprf964by/SecComply/PBP_8254.jpg?updatedAt=1767936444991" alt={SITE.founder} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
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

      {/* ─── OUR TEAM ─── */}
      <section className="section">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">The People</p>
            <h2 className="h-display h3">Our Team</h2>
            <p>The minds behind the narratives.</p>
          </div>
          <div className="grid grid--3 stagger">
            {[
              { name: SITE.founder, role: SITE.founderRole, image: 'https://ik.imagekit.io/nprf964by/SecComply/PBP_8254.jpg?updatedAt=1767936444991', linkedin: 'https://www.linkedin.com/in/shivani-tikadia-nadkarni/',
                bio: 'Visionary behind EKKKO. Bridging cybersecurity expertise with creative strategy to build narratives that move markets.' },
              { name: 'Bhavishya', role: 'Video Editor & Content Strategist', image: 'https://ik.imagekit.io/nprf964by/SecComply/Bhavishya', linkedin: 'https://www.linkedin.com/in/anagatsingh/',
                bio: 'Social media growth strategist building AI-powered omnichannel content systems. From scripts to shorts — full-cycle execution across every platform.' },
              { name: 'Aditi Saw', role: 'Content & Marketing Executive', image: 'https://ik.imagekit.io/nprf964by/SecComply/Aditi.jpg', linkedin: 'https://www.linkedin.com/in/aditisaw/',
                bio: 'Content writer and marketing executive driving brand storytelling, SEO content, and digital marketing campaigns that connect and convert.' },
            ].map((member, i) => (
              <a key={i} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-card reveal">
                <div className="team-card__image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-card__linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.5A1.75 1.75 0 118.3 6.8a1.72 1.72 0 01-1.8 1.7zM20 19h-3v-4.4c0-1-.4-1.7-1.3-1.7a1.4 1.4 0 00-1.3 1 1.7 1.7 0 00-.1.6V19h-3s0-8.1 0-9h3v1.3a3 3 0 012.7-1.5c2 0 3.4 1.3 3.4 4V19z"/></svg>
                  </div>
                </div>
                <div className="team-card__info">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </a>
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