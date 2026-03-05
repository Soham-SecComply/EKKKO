'use client';

import { useRef, useCallback } from 'react';
import { REELS, SOCIALS, IMAGES } from '@/data/data';

function ReelCard({ reel }) {
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleEnter = useCallback(() => {
    if (videoRef.current) {
      // Small delay to avoid jank on quick mouse passes
      timeoutRef.current = setTimeout(() => {
        videoRef.current?.play().catch(() => {});
      }, 150);
    }
  }, []);

  const handleLeave = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reel-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Video element — muted autoplay on hover. 
          Add your actual reel video files in /public/reels/ 
          e.g. /public/reels/reel-1.mp4 */}
      <video
        ref={videoRef}
        src={reel.videoSrc}
        poster={reel.image}
        muted
        loop
        playsInline
        preload="none"
        className="reel-card__video"
      />
      <div className="reel-card__overlay">
        <h4 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>{reel.title}</h4>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{reel.views} views</span>
      </div>
      <div className="reel-card__play-icon">
        <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2"/><path d="M19 16l12 8-12 8V16z" fill="white"/></svg>
      </div>
    </a>
  );
}

export default function SocialPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '48px' }}>
        <div className="container text-center">
          <p className="overline overline--color mb-16 reveal">
            <span className="text-mask"><span className="text-mask__inner">Follow the Conversation</span></span>
          </p>
          <h1 className="h-display h2 mb-24 reveal reveal-d1">Social <span className="grad-text">Presence</span></h1>
          <p className="body-lg reveal reveal-d2" style={{ maxWidth: '520px', margin: '0 auto' }}>Where we show up, speak up, and create conversations that matter across every platform.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading reveal">
            <p className="overline overline--color mb-12">Featured Content</p>
            <h2 className="h-display h4">Instagram Reels</h2>
          </div>
          <div className="reel-grid stagger">
            {REELS.map((r) => <ReelCard key={r.id} reel={r} />)}
          </div>
          <p className="body-sm text-center" style={{ marginTop: '24px', color: 'var(--text-light)' }}>Hover to preview &middot; Click to watch on Instagram</p>
        </div>
      </section>

      <div className="image-divider"><img src={IMAGES.socialDivider} alt="" className="parallax-target" data-speed="0.1" /></div>

      <section className="section section--warm">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline overline--color mb-12">Platforms</p>
            <h2 className="h-display h3">Find Us Everywhere</h2>
            <p>Each platform, a different stage. Same clear voice.</p>
          </div>
          <div className="social-grid stagger" style={{ maxWidth: '900px', margin: '0 auto' }}>
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

      <section className="section section--dark">
        <div className="container">
          <div className="section-heading center reveal">
            <p className="overline" style={{ color: 'var(--cyan)' }}>Community</p>
            <h2 className="h-display h3">The Numbers Speak</h2>
          </div>
          <div className="grid grid--3 stagger" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { n: '150K+', l: 'Combined Followers', color: 'color-card--violet' },
              { n: '2M+', l: 'Monthly Impressions', color: 'color-card--coral' },
              { n: '8.5%', l: 'Engagement Rate', color: 'color-card--cyan' },
            ].map((s) => (
              <div key={s.l} className={`color-card ${s.color} text-center hover-tilt`}>
                <div className="h-display counter" style={{ fontSize: 'clamp(36px,5vw,52px)', fontWeight: 800, marginBottom: '8px' }}>{s.n}</div>
                <p style={{ fontSize: '14px', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--grad-sunset)', color: 'white', textAlign: 'center' }}>
        <div className="container reveal">
          <h2 className="h-display h3 mb-24">Don&apos;t just scroll.<br />Join the conversation.</h2>
          <p className="body-lg mb-48" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '460px', margin: '0 auto 48px' }}>Follow us on your favorite platform and become part of something that echoes.</p>
          <a href="https://www.instagram.com/thenadkarnees/" target="_blank" rel="noopener noreferrer" className="btn btn--white">Follow on Instagram</a>
        </div>
      </section>
    </>
  );
}
