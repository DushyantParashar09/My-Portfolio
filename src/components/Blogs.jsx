import React from 'react';
import { BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';

export default function Blogs() {
  return (
    <section className="section" id="blogs" aria-labelledby="blogs-heading">
      <div className="container">
        
        <div className="section-header-wrap">
          <div className="section-title-group">
            <h2 className="section-title" id="blogs-heading">
              <span className="hash">#</span>
              <DecryptedText text="blogs" />
            </h2>
            <div className="section-title-line"></div>
          </div>
          <a 
            href={PERSONAL_INFO.medium} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="section-action-link font-mono"
          >
            <span>Read on Medium</span>
            <span>&sim;&sim;&sim;&gt;</span>
          </a>
        </div>

        <div className="blogs-grid">
          {BLOG_POSTS.map((blog, idx) => (
            <TiltCard className="blog-card" key={idx} maxTilt={5} scale={1.015}>
              <div className="blog-card-header font-mono">
                <span className="blog-tag">{blog.tag}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <div className="blog-card-body">
                <h3 className="blog-title">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    {blog.title}
                  </a>
                </h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    &gt; {blog.meta}
                  </span>
                  <a 
                    href={blog.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="blog-read-link"
                  >
                    <span>Read Article</span>
                    <span className="font-mono">&rarr;</span>
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
