'use client';

import { useState } from 'react';
import { STATS, SERVICES, IMAGES, SITE } from '@/data/data';

export default function CollaboratePage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email) return setStatus('error');
    setStatus('sending');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...form }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', company: '', budget: '', message: '' });
      } else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero__bg"><img src={IMAGES.collaborateHero} alt="Collaborate" /><div className="hero__overlay hero__overlay--gradient"></div></div>
        <div className="container hero__content hero__content--center" style={{ color: 'white' }}>
          <p className="overline mb-16 reveal" style={{ color: 'var(--yellow)' }}>
            <span className="text-mask"><span className="text-mask__inner">Let&apos;s Build Together</span></span>
          </p>
          <h1 className="h-display h1 mb-24 reveal reveal-d1">
            <span className="text-mask"><span className="text-mask__inner">Collaborate</span></span>
          </h1>
          <p className="body-lg reveal reveal-d2" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px' }}>Whether you&apos;re a company, founder, or visionary — we build partnerships that echo far beyond the first conversation.</p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section" style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--bg-gradient)' }}>
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

      {/* ─── SERVICES ─── */}
      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="overline overline--color mb-12">What We Offer</p>
            <h2 className="h-display h3">Services</h2>
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

      {/* ─── PROCESS ─── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline" style={{ color: 'var(--cyan)' }}>How We Work</p>
            <h2 className="h-display h3">The Process</h2>
          </div>
          <div className="grid grid--4 stagger">
            {[
              { n: '01', t: 'Discovery', d: 'Deep dive into your company, audience, and ambition.', color: 'color-card--violet' },
              { n: '02', t: 'Strategy', d: 'Crafting a narrative roadmap aligned with your growth.', color: 'color-card--coral' },
              { n: '03', t: 'Execution', d: 'Premium production across every touchpoint.', color: 'color-card--cyan' },
              { n: '04', t: 'Growth', d: 'Launch, measure, optimize, scale — narrative to impact.', color: 'color-card--yellow' },
            ].map((p) => (
              <div key={p.n} className={`color-card ${p.color} text-center hover-tilt`}>
                <div className="h-display" style={{ fontSize: '48px', fontWeight: 800, opacity: 0.3, marginBottom: '12px' }}>{p.n}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>{p.t}</h4>
                <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: 1.6 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="image-divider"><img src={IMAGES.divider2} alt="" className="parallax-target" data-speed="0.1" /></div>

      {/* ─── CONTACT FORM ─── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">Get in Touch</p>
            <h2 className="h-display h3">Start a Project</h2>
            <p>Fill in the details and we&apos;ll get back to you within 24 hours.</p>
          </div>
          {status === 'sent' ? (
            <div className="reveal" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: 'clamp(40px,5vw,64px)', textAlign: 'center', boxShadow: 'var(--shadow-card)' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
              <h3 className="h-display h4 mb-12">Message Sent!</h3>
              <p className="body-lg">Thanks! We&apos;ll review your inquiry and get back to you within 24 hours.</p>
              <button className="btn btn--outline" style={{ marginTop: '24px' }} onClick={() => setStatus('idle')}>Send Another</button>
            </div>
          ) : (
            <div className="reveal" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: 'clamp(28px,4vw,48px)', boxShadow: 'var(--shadow-card)' }}>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Full Name *</label><input type="text" name="name" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} /></div>
                <div className="form-group"><label className="form-label">Email *</label><input type="email" name="email" className="form-input" placeholder="you@company.com" value={form.email} onChange={handleChange} /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Company / Brand</label><input type="text" name="company" className="form-input" placeholder="Your company" value={form.company} onChange={handleChange} /></div>
                <div className="form-group"><label className="form-label">Budget Range</label>
                  <select name="budget" className="form-input" value={form.budget} onChange={handleChange}><option value="">Select range</option><option>$5K - $10K</option><option>$10K - $25K</option><option>$25K - $50K</option><option>$50K+</option></select>
                </div>
              </div>
              <div className="form-group"><label className="form-label">Project Details</label><textarea name="message" className="form-input" placeholder="Tell us about your project, goals, and timeline..." rows={5} value={form.message} onChange={handleChange}></textarea></div>
              {status === 'error' && <p style={{ color: 'var(--coral)', fontSize: '14px', marginBottom: '12px' }}>Please fill in name and email, then try again.</p>}
              <button className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }} onClick={handleSubmit} disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          )}
          <div className="reveal text-center" style={{ marginTop: '32px' }}>
            <p className="body-sm">Or email us directly at <a href={`mailto:${SITE.email}`} className="hover-underline" style={{ color: 'var(--violet)', fontWeight: 600 }}>{SITE.email}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}