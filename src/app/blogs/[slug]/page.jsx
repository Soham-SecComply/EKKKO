'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BLOGS } from '@/data/data';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = BLOGS.find((b) => b.slug === slug);
  const related = BLOGS.filter((b) => b.slug !== slug).slice(0, 2);

  if (!blog) return (
    <section className="section" style={{ paddingTop: '200px', textAlign: 'center' }}>
      <div className="container"><h1 className="h-display h3 mb-24">Article not found</h1><Link href="/blogs" className="btn btn--outline">Back to Blog</Link></div>
    </section>
  );

  return (
    <>
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <Link href="/blogs" className="btn-arrow reveal" style={{ marginBottom: '32px', display: 'inline-flex' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            All Articles
          </Link>
          <div className="reveal reveal-d1">
            <span className="pill pill--violet mb-16">{blog.category}</span>
            <h1 className="h-display h3 mb-16" style={{ lineHeight: 1.15 }}>{blog.title}</h1>
            <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: 'var(--text-light)' }}><span>{blog.date}</span><span>{blog.readTime} read</span></div>
          </div>
        </div>
      </section>

      <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px,4vw,48px)' }}>
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16/9' }}>
          <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="reveal" style={{ fontSize: '17px', lineHeight: 1.9, color: 'var(--text-mid)' }}>
            {blog.content.split('\n\n').map((p, i) => <p key={i} style={{ marginBottom: '24px' }}>{p}</p>)}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--cool">
          <div className="container">
            <div className="section-heading reveal"><p className="overline overline--color mb-12">Keep Reading</p><h2 className="h-display h4">Related Articles</h2></div>
            <div className="grid grid--2 stagger">
              {related.map((b) => (
                <Link key={b.slug} href={`/blogs/${b.slug}`} className="card hover-shine">
                  <div className="card__image"><img src={b.image} alt={b.title} /></div>
                  <div className="card__body">
                    <div className="card__category">{b.category}</div>
                    <h3 className="card__title">{b.title}</h3>
                    <div className="card__meta"><span>{b.date}</span><span>{b.readTime} read</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
