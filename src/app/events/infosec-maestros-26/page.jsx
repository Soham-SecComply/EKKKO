'use client';

import Link from 'next/link';

export default function InfoSecMaestrosPage() {
  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero__bg" style={{ background: 'linear-gradient(135deg, #0D0D2B, #1a1a4a)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 25% 50%, rgba(123,47,247,0.25), transparent 60%), radial-gradient(circle at 75% 50%, rgba(0,212,255,0.2), transparent 60%)' }}></div>
        </div>
        <div className="container hero__content hero__content--center" style={{ color: 'white' }}>
          <div className="reveal" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <span className="pill" style={{ background: 'rgba(74,222,128,0.15)', color: '#4ADE80', border: '1px solid rgba(74,222,128,0.3)', fontSize: '11px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', marginRight: '6px' }}></span>
              Upcoming
            </span>
            <span className="pill" style={{ background: 'rgba(123,47,247,0.15)', color: 'var(--violet-light)', border: '1px solid rgba(123,47,247,0.3)', fontSize: '11px' }}>May 8, 2026</span>
          </div>
          <h1 className="h-display mb-16 reveal reveal-d1" style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.1 }}>15th CISO &amp; Cyber Pioneers<br />Awards &amp; Confex 2026</h1>
          <p className="body-lg reveal reveal-d2" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px' }}>InfoSec Maestros by CIO Axis</p>
          <div className="reveal reveal-d3" style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://seccomply.net/resources/events/infosec-maestros-26" target="_blank" rel="noopener noreferrer" className="btn btn--primary">SecComply at This Event</a>
          </div>
        </div>
      </section>

      {/* ─── QUICK INFO ─── */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="grid grid--4 stagger" style={{ marginTop: '-60px', position: 'relative', zIndex: 2 }}>
            {[
              { icon: '📅', label: 'Date', value: 'May 8, 2026', sub: 'Full Day Conference' },
              { icon: '📍', label: 'Venue', value: 'Radisson Blu Plaza Hotel', sub: 'Delhi Airport, New Delhi' },
              { icon: '🎤', label: 'Speakers', value: '40+ Industry Leaders', sub: 'CISOs, CTOs, Government Officials' },
              { icon: '🏢', label: 'EKKKO Booth', value: 'SecComply Booth', sub: 'Strategic Compliance Partner' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600, marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', marginBottom: '4px' }}>{item.value}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-light)' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EKKKO AT THIS EVENT ─── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center' }}>
            <div className="reveal">
              <p className="overline overline--color mb-16">EKKKO at InfoSec Maestros</p>
              <h2 className="h-display h3 mb-24">We&apos;re on the <span className="grad-text">ground.</span></h2>
              <p className="body-lg mb-24">The EKKKO team will be attending InfoSec Maestros 2026 for <strong>content coverage and branding</strong>. We&apos;re capturing keynotes, interviewing CISOs, creating social content, and telling the stories behind India&apos;s cybersecurity evolution.</p>
              <p className="body-lg mb-32">Come visit us at the <strong style={{ color: 'var(--violet)' }}>SecComply Booth</strong> — let&apos;s talk about how we can help your brand echo in the cybersecurity space.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/collaborate" className="btn btn--primary">Meet Us There</Link>
                <Link href="/social" className="btn btn--outline">Follow Our Coverage</Link>
              </div>
            </div>
            <div className="stagger" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="color-card color-card--violet hover-tilt" style={{ gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎙️</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px' }}>Live Interviews</div>
                <p style={{ fontSize: '13px', opacity: 0.8, marginTop: '4px' }}>On-ground interviews with industry leaders</p>
              </div>
              <div className="color-card color-card--coral hover-tilt">
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>📸</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px' }}>Content</div>
                <p style={{ fontSize: '12px', opacity: 0.8 }}>Reels, stories &amp; highlights</p>
              </div>
              <div className="color-card color-card--cyan hover-tilt">
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>🤝</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px' }}>Networking</div>
                <p style={{ fontSize: '12px', opacity: 0.8 }}>Meet the team in person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SHIVANI & SANIL ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline" style={{ color: 'var(--cyan)' }}>Representing EKKKO &amp; SecComply</p>
            <h2 className="h-display h3">Our Speakers</h2>
          </div>
          <div className="grid grid--2 stagger" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="team-card" style={{ border: '1px solid var(--border-dark)', background: 'var(--bg-dark-card)' }}>
              <div className="team-card__image">
                <img src="https://ik.imagekit.io/nprf964by/SecComply/PBP_8254.jpg?updatedAt=1767936444991" alt="Shivani Tikadia" style={{ objectPosition: 'top' }} />
              </div>
              <div className="team-card__info" style={{ padding: '24px' }}>
                <span className="pill pill--violet" style={{ marginBottom: '10px', fontSize: '10px', padding: '3px 10px' }}>EKKKO Founder</span>
                <h3 className="team-card__name" style={{ color: 'var(--text-on-dark)' }}>Shivani Tikadia</h3>
                <p className="team-card__role">CEO &amp; Founder, SecComply</p>
                <p style={{ fontSize: '13px', color: 'var(--text-on-dark-mid)', lineHeight: 1.5, marginTop: '8px' }}>Presenting on stage at 3:30 PM — Strategic Compliance Automation</p>
              </div>
            </div>
            <div className="team-card" style={{ border: '1px solid var(--border-dark)', background: 'var(--bg-dark-card)' }}>
              <div className="team-card__image">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQEGx2tGSXjssw/profile-displayphoto-scale_400_400/B4DZppEfBNGgAg-/0/1762699391469?e=1779321600&v=beta&t=YoyAO5fCfDAihhBNSld7eiTQqlCz0qAVT_ikNZHxvnA" alt="Sanil Nadkarni" style={{ objectPosition: 'top' }} />
              </div>
              <div className="team-card__info" style={{ padding: '24px' }}>
                <span className="pill pill--violet" style={{ marginBottom: '10px', fontSize: '10px', padding: '3px 10px' }}>Keynote Panelist</span>
                <h3 className="team-card__name" style={{ color: 'var(--text-on-dark)' }}>Sanil Nadkarni</h3>
                <p className="team-card__role">CISO, Cummins India</p>
                <p style={{ fontSize: '13px', color: 'var(--text-on-dark-mid)', lineHeight: 1.5, marginTop: '8px' }}>Panelist — Resilience vs. Prevention: SecOps, Ransomware, and Rapid Recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT + KEY THEMES (combined) ─── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">About the Event</p>
            <h2 className="h-display h3">InfoSec Maestros 2026</h2>
          </div>
          <div className="reveal" style={{ fontSize: '16px', color: 'var(--text-mid)', lineHeight: 1.9, marginBottom: '32px' }}>
            <p>India&apos;s premier cybersecurity leadership summit, themed <em>&quot;CISOs Vision 2026 — Staying Ahead of Threats, AI, and Beyond.&quot;</em> The event brings together 40+ top CISOs, government officials, and security innovators for keynotes, panels, awards, workshops, and networking. SecComply is the <strong style={{ color: 'var(--text)' }}>Strategic Compliance Automation Partner</strong> and EKKKO is handling content production throughout the event.</p>
          </div>
          <div className="reveal">
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>Key Themes</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {['AI / ML Security', 'Cloud Security', 'Risk Management', 'IoT & OT Security', 'DevSecOps', 'Zero Trust', 'Threat Intelligence', 'Identity & Access', 'Data Protection', 'Incident Response', 'Ransomware Defense', 'Quantum Safe'].map((t) => (
                <span key={t} className="pill pill--outline" style={{ cursor: 'default' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section" style={{ background: 'var(--grad-hero)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-blob hero-blob--1" style={{ opacity: 0.15 }}></div>
        <div className="hero-blob hero-blob--2" style={{ opacity: 0.15 }}></div>
        <div className="container reveal" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="h-display h3 mb-24">See you at<br />InfoSec Maestros!</h2>
          <p className="body-lg mb-48" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 48px' }}>Visit us at the SecComply booth. Let&apos;s talk content, branding, and how we can help your cybersecurity story echo further.</p>
          <Link href="/collaborate" className="btn btn--white">Work With EKKKO</Link>
        </div>
      </section>

      {/* ─── BACK LINK ─── */}
      <section className="section" style={{ padding: '40px 0' }}>
        <div className="container">
          <Link href="/events" className="btn-arrow" style={{ fontSize: '14px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to All Events
          </Link>
        </div>
      </section>
    </>
  );
} 