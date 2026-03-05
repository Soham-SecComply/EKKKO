'use client';

import { useState } from 'react';
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
  const spotify = SOCIALS.find((s) => s.name === 'Spotify');
  const youtube = SOCIALS.find((s) => s.name === 'YouTube');

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