'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOGS } from '@/data/data';

export default function BlogsPage() {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');
  const categories = ['All', ...new Set(BLOGS.map((b) => b.category))];

  const filtered = BLOGS.filter((b) => {
    const matchSearch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = cat === 'All' || b.category === cat;
    return matchSearch && matchCat;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="reveal">
            <p className="overline overline--color mb-12">Insights & Ideas</p>
            <h1 className="h-display h2 mb-24">The Blog</h1>
            <p className="body-lg mb-48" style={{ maxWidth: '520px' }}>Thoughts on creative strategy, founder positioning, digital presence, and the future of storytelling.</p>
          </div>
          <div className="reveal reveal-d1" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '48px' }}>
            <input type="text" className="form-input" placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ maxWidth: '300px', fontSize: '14px', padding: '10px 20px' }} />
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {categories.map((c) => (
                <button key={c} className={`pill pill--outline ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {featured && (
            <Link href={`/blogs/${featured.slug}`} className="card card--featured hover-shine mb-48 reveal">
              <div className="card__image"><img src={featured.image} alt={featured.title} /></div>
              <div className="card__body">
                <div className="card__category">{featured.category}</div>
                <h2 className="card__title">{featured.title}</h2>
                <p className="card__excerpt">{featured.excerpt}</p>
                <div className="card__meta"><span>{featured.date}</span><span>{featured.readTime} read</span></div>
              </div>
            </Link>
          )}
          {rest.length > 0 && (
            <div className="grid grid--3 stagger">
              {rest.map((b) => (
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
          )}
          {filtered.length === 0 && <p className="body-lg text-center" style={{ padding: '80px 0' }}>No articles found. Try a different search.</p>}
        </div>
      </section>
    </>
  );
}
