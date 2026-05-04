'use client';

import { useState } from 'react';
import Link from 'next/link';

const UPCOMING_EVENTS = [
  {
    slug: 'infosec-maestros-26',
    title: '15th CISO & Cyber Pioneers Awards & Confex 2026',
    organizer: 'InfoSec Maestros by CIO Axis',
    date: 'May 8, 2026',
    location: 'Radisson Blu Plaza Hotel, Delhi Airport, New Delhi',
    image: 'https://img.youtube.com/vi/wYBnII2EJ_c/maxresdefault.jpg',
    tags: ['Cybersecurity', 'AI Security', 'CISO Summit'],
    ekkkoRole: 'Content Coverage & Branding at SecComply Booth',
    highlight: 'Shivani Tikadia presenting on stage',
  },
];

const PAST_EVENTS = [
  // Add past events here as they happen
  // {
  //   slug: 'event-slug',
  //   title: 'Event Name',
  //   organizer: 'Organizer',
  //   date: 'Date',
  //   location: 'Location',
  //   image: 'image-url',
  //   tags: ['Tag1', 'Tag2'],
  //   recap: 'Brief recap of what happened',
  // },
];

export default function EventsPage() {
  const [tab, setTab] = useState('upcoming');

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '48px' }}>
        <div className="container text-center">
          <p className="overline overline--color mb-16 reveal">
            <span className="text-mask"><span className="text-mask__inner">Where We Show Up</span></span>
          </p>
          <h1 className="h-display h2 mb-24 reveal reveal-d1">Our <span className="grad-text">Events</span></h1>
          <p className="body-lg reveal reveal-d2" style={{ maxWidth: '560px', margin: '0 auto' }}>Meet the EKKKO team in person. We&apos;re on the ground at top industry events — covering content, building connections, and shaping narratives live.</p>
        </div>
      </section>

      {/* ─── TAB SWITCHER ─── */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <div style={{ display: 'inline-flex', background: 'var(--bg-dark)', borderRadius: 'var(--radius-full)', padding: '6px', gap: '4px' }}>
              <button
                onClick={() => setTab('upcoming')}
                style={{
                  padding: '14px 32px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s',
                  background: tab === 'upcoming' ? 'var(--grad-hero)' : 'transparent',
                  color: tab === 'upcoming' ? 'white' : 'rgba(255,255,255,0.5)',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', display: tab === 'upcoming' ? 'inline-block' : 'none' }}></span>
                  Upcoming Events
                </span>
              </button>
              <button
                onClick={() => setTab('past')}
                style={{
                  padding: '14px 32px',
                  borderRadius: 'var(--radius-full)',
                  border: tab === 'past' ? '1px solid var(--violet)' : '1px solid transparent',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s',
                  background: tab === 'past' ? 'rgba(123,47,247,0.15)' : 'transparent',
                  color: tab === 'past' ? 'var(--violet-light)' : 'rgba(255,255,255,0.4)',
                }}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS ─── */}
      {tab === 'upcoming' && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            {UPCOMING_EVENTS.length > 0 ? (
              <div className="stagger">
                {UPCOMING_EVENTS.map((event) => (
                  <Link key={event.slug} href={`/events/${event.slug}`} className="card card--featured hover-shine" style={{ marginBottom: '32px' }}>
                    <div className="card__image">
                      <img src={event.image} alt={event.title} />
                      <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 2 }}>
                        <span className="pill" style={{ background: 'rgba(74,222,128,0.15)', color: '#4ADE80', border: '1px solid rgba(74,222,128,0.3)', fontSize: '11px', backdropFilter: 'blur(8px)' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', marginRight: '6px' }}></span>
                          Upcoming
                        </span>
                      </div>
                    </div>
                    <div className="card__body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
                      <div>
                        <div className="card__category">{event.organizer}</div>
                        <h2 className="card__title" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: '8px' }}>{event.title}</h2>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-mid)' }}>
                          <span>📅</span> {event.date}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-mid)' }}>
                          <span>📍</span> {event.location}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--violet)', fontWeight: 600 }}>
                          <span>🎯</span> {event.ekkkoRole}
                        </div>
                        {event.highlight && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--coral)', fontWeight: 600 }}>
                            <span>🎤</span> {event.highlight}
                          </div>
                        )}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                        {event.tags.map((t) => (
                          <span key={t} className="pill pill--outline" style={{ fontSize: '10px', padding: '4px 10px', cursor: 'default' }}>{t}</span>
                        ))}
                      </div>
                      <span className="btn-arrow" style={{ marginTop: '8px', fontSize: '13px' }}>
                        View Details →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center" style={{ padding: '80px 0' }}>
                <p className="body-lg">No upcoming events right now. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── PAST EVENTS ─── */}
      {tab === 'past' && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            {PAST_EVENTS.length > 0 ? (
              <div className="grid grid--2 stagger">
                {PAST_EVENTS.map((event) => (
                  <Link key={event.slug} href={`/events/${event.slug}`} className="card hover-shine">
                    <div className="card__image"><img src={event.image} alt={event.title} /></div>
                    <div className="card__body">
                      <div className="card__category">{event.date} · {event.location}</div>
                      <h3 className="card__title">{event.title}</h3>
                      <p className="card__excerpt">{event.recap}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                        {event.tags.map((t) => (
                          <span key={t} className="pill pill--outline" style={{ fontSize: '10px', padding: '4px 10px', cursor: 'default' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center reveal" style={{ padding: '80px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📸</div>
                <h3 className="h-display h4 mb-12">No Past Events Yet</h3>
                <p className="body-lg" style={{ maxWidth: '420px', margin: '0 auto' }}>We&apos;re just getting started. After our first event, recaps and highlights will appear here.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container reveal">
          <h2 className="h-display h3 mb-24 shimmer-text">Want us at your event?</h2>
          <p className="body-lg mb-48" style={{ color: 'var(--text-on-dark-mid)', maxWidth: '480px', margin: '0 auto 48px' }}>We cover industry events with premium content — podcasts, reels, interviews, and social. Let&apos;s collaborate.</p>
          <Link href="/collaborate" className="btn btn--primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
