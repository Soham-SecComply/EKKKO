'use client';

import { useState, useRef } from 'react';
import { PODCAST, SOCIALS, PLAY_SVG } from '@/data/data';

function ShortCard({ short }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://www.youtube.com/shorts/${short.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="short-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={short.image} alt={short.title} className="short-card__thumb" />
      {hovered && (
        <div className="short-card__embed">
          <iframe
            src={`https://www.youtube.com/embed/${short.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${short.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3`}
            allow="autoplay; encrypted-media"
            loading="lazy"
          />
        </div>
      )}
      <div className="short-card__play-icon" dangerouslySetInnerHTML={{ __html: PLAY_SVG }} />
      <div className="short-card__overlay">
        <h3 className="short-card__title">{short.title}</h3>
      </div>
    </a>
  );
}

function GuestForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email) return setStatus('error');
    setStatus('sending');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'guest', ...form }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', company: '', role: '', message: '' });
      } else setStatus('error');
    } catch { setStatus('error'); }
  };

  if (status === 'sent') return (
    <div className="reveal" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: 'clamp(40px,5vw,64px)', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
      <h3 className="h-display h4 mb-12">Application Sent!</h3>
      <p className="body-lg">Thanks {form.name || 'for applying'}! We&apos;ll review your application and get back to you soon.</p>
      <button className="btn btn--outline" style={{ marginTop: '24px' }} onClick={() => setStatus('idle')}>Submit Another</button>
    </div>
  );

  return (
    <div className="reveal" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: 'clamp(28px,4vw,48px)' }}>
      <div className="form-row">
        <div className="form-group"><label className="form-label">Full Name *</label><input type="text" name="name" className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} /></div>
        <div className="form-group"><label className="form-label">Email *</label><input type="email" name="email" className="form-input" placeholder="you@company.com" value={form.email} onChange={handleChange} /></div>
      </div>
      <div className="form-row">
        <div className="form-group"><label className="form-label">Company</label><input type="text" name="company" className="form-input" placeholder="Your company" value={form.company} onChange={handleChange} /></div>
        <div className="form-group"><label className="form-label">Role</label><input type="text" name="role" className="form-input" placeholder="Founder, CEO, etc." value={form.role} onChange={handleChange} /></div>
      </div>
      <div className="form-group"><label className="form-label">What would you talk about?</label><textarea name="message" className="form-input" placeholder="Tell us about your story, expertise, and what you'd bring to the conversation..." rows={4} value={form.message} onChange={handleChange}></textarea></div>
      {status === 'error' && <p style={{ color: 'var(--coral)', fontSize: '14px', marginBottom: '12px' }}>Please fill in name and email, then try again.</p>}
      <button className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSubmit} disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Sending...' : 'Submit Application'}</span>
      </button>
    </div>
  );
}

export default function PodcastPage() {
  const [trailerPlaying, setTrailerPlaying] = useState(false);
  const sliderRef = useRef(null);
  const spotify = SOCIALS.find((s) => s.name === 'Spotify');
  const youtube = SOCIALS.find((s) => s.name === 'YouTube');

  const scrollSlider = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector('.ep-slide');
    const gap = 24;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero__bg"><img src={PODCAST.trailerImage} alt="Podcast" /><div className="hero__overlay hero__overlay--gradient"></div></div>
        <div className="container hero__content hero__content--center" style={{ color: 'white' }}>
          <p className="overline mb-16 reveal" style={{ color: 'var(--yellow)' }}>
            <span className="text-mask"><span className="text-mask__inner">Now Streaming</span></span>
          </p>
          <h1 className="h-display h2 mb-16 reveal reveal-d1">{PODCAST.title}</h1>
          <p className="body-lg reveal reveal-d2" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '520px' }}>{PODCAST.subtitle}</p>
          <div className="reveal reveal-d3" style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {spotify && <a href={spotify.url} target="_blank" rel="noopener noreferrer" className="btn btn--white" style={{ gap: '8px' }}>
              <span dangerouslySetInnerHTML={{ __html: spotify.svg.replace('currentColor', '#1DB954') }} style={{ width: '20px', height: '20px', display: 'inline-flex' }} /> Listen on Spotify</a>}
            {youtube && <a href={youtube.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ borderColor: 'white', color: 'white' }}>Watch on YouTube</a>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">Watch</p>
            <h2 className="h-display h3">Latest Trailer</h2>
          </div>
          <div className="reveal trailer-wrap" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', background: '#000' }}>
            {!trailerPlaying ? (
              <>
                <img src={`https://img.youtube.com/vi/${PODCAST.trailerYouTube}/maxresdefault.jpg`} alt="Podcast Trailer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div onClick={() => setTrailerPlaying(true)} style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'rgba(0,0,0,0.25)' }}>
                  <div className="pulse-glow" style={{ width: '80px', height: '80px', borderRadius: '50%' }} dangerouslySetInnerHTML={{ __html: PLAY_SVG }} />
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${PODCAST.trailerYouTube}?autoplay=1&rel=0&modestbranding=1`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ─── OUR EPISODES ─── */}
      <section className="section">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">Episodes</p>
            <h2 className="h-display h3">The Shuffle with Shivani</h2>
            <p>Deep conversations on cybersecurity, business, and the future.</p>
          </div>
          <div className="ep-slider-wrap reveal" style={{ position: 'relative' }}>
            <button
              type="button"
              aria-label="Previous episodes"
              onClick={() => scrollSlider(-1)}
              className="slider-arrow slider-arrow--left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              type="button"
              aria-label="Next episodes"
              onClick={() => scrollSlider(1)}
              className="slider-arrow slider-arrow--right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div ref={sliderRef} className="ep-slider" style={{ display: 'flex', gap: '24px', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', paddingBottom: '8px' }}>
              {[
                { id: '8PqUswhoIJU', title: 'By 2027 Many Businesses Won\'t Survive', ep: 'EP #01' },
                { id: 'rAbHp0njIY8', title: 'DPDP Reality — Small Mistakes, Huge Penalties', ep: 'EP #02' },
                { id: 'EoNl_168JPo', title: 'Inside a Real SOC — 24/7 Cyber Defense', ep: 'EP #03' },
                { id: '3-1RU0TRnZM', title: 'Where Your Health Data Actually Goes', ep: 'EP #04' },
                { id: 'KEY7X27RWrs', title: '₹300 Cr Lost — Nobody Owned the Risk', ep: 'EP #05' },
              ].map((ep) => (
                <a key={ep.id} href={`https://www.youtube.com/watch?v=${ep.id}`} target="_blank" rel="noopener noreferrer" className="card hover-shine ep-slide">
                  <div className="card__image">
                    <img src={`https://img.youtube.com/vi/${ep.id}/maxresdefault.jpg`} alt={ep.title} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', opacity: 0, transition: 'opacity 0.3s' }} className="ep-play-overlay">
                      <div dangerouslySetInnerHTML={{ __html: PLAY_SVG }} style={{ width: '56px', height: '56px' }} />
                    </div>
                  </div>
                  <div className="card__body">
                    <div className="card__category">{ep.ep}</div>
                    <h3 className="card__title">{ep.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="text-center reveal" style={{ marginTop: '40px' }}>
            <a href="https://www.youtube.com/@thenadkarnees" target="_blank" rel="noopener noreferrer" className="btn btn--outline">View All Episodes on YouTube</a>
          </div>
        </div>
      </section>

      <section className="section section--cool">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">Quick Bites</p>
            <h2 className="h-display h3">Podcast Shorts</h2>
            <p>Snackable insights from our latest conversations.</p>
          </div>
          <div className="grid grid--3 stagger" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {PODCAST.shorts.map((s) => <ShortCard key={s.id} short={s} />)}
          </div>
          <p className="body-sm text-center" style={{ marginTop: '24px', color: 'var(--text-light)' }}>Hover to preview &middot; Click to watch on YouTube</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="section-heading center reveal">
            <span className="pill pill--coral mb-16">Future Plans</span>
            <h2 className="h-display h3 mb-12">Be a Guest</h2>
            <p>We&apos;re always looking for founders, creators, and thinkers who have something worth saying. Apply to be on the show.</p>
          </div>
          <GuestForm />
        </div>
      </section>
    </>
  );
}