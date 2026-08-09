'use client'
import { TESTIMONIALS, BUSINESS } from '@/lib/constants'
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react'

// Split reviews into two groups for dual-direction marquee
const row1 = TESTIMONIALS.slice(0, 6)
const row2 = TESTIMONIALS.slice(6, 12)

export default function Testimonials() {
  return (
    <div className="testimonials-section-wrap">
      {/* Top Banner with Google Places Direct Rating */}
      <div className="testimonials-header-card">
        <div className="testimonials-header-left">
          {/* Official Google G Logo */}
          <div className="testimonials-g-logo" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>
          <div>
            <div className="testimonials-rating-row">
              <span className="testimonials-score">5.0★ Rating</span>
              <span className="badge badge-gold">Verified Google Reviews</span>
            </div>
            <div className="testimonials-subtext">
              Real reviews from Kiwi Tech Computers customers on Google Maps
            </div>
          </div>
        </div>

        <a
          href={BUSINESS.googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-teal testimonials-write-btn"
          id="google-review-direct-btn"
        >
          <span>Write a Review on Google</span>
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>

      {/* Dual Direction Infinite Marquee */}
      <div className="marquee-container">
        {/* Row 1 — Moving Left */}
        <div className="marquee-track marquee-left">
          {[...row1, ...row1].map((t, idx) => (
            <div key={`row1-${t.name}-${idx}`} className="testimonial-google-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${
                        idx % 3 === 0 ? '#0B1F3A, #0EA5A5' :
                        idx % 3 === 1 ? '#0EA5A5, #7BC142' :
                        '#071426, #7BC142'
                      })`,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <span style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.95rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {t.name}
                      </span>
                      <CheckCircle2 size={14} color="#1D9BF0" fill="#1D9BF0" stroke="white" style={{ flexShrink: 0 }} />
                    </div>
                    <div style={{ fontSize: 'var(--body-xs)', color: 'var(--charcoal-400)', marginTop: 1 }}>
                      {t.date}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', gap: '3px', color: 'var(--gold)' }} aria-hidden="true">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-500)', lineHeight: 1.6 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-teal" style={{ fontSize: '0.6875rem' }}>{t.tag}</span>
                <span style={{ fontSize: '0.75rem', color: '#1D9BF0', fontWeight: 600 }}>Verified Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — Moving Right (Opposite Direction) */}
        <div className="marquee-track marquee-right">
          {[...row2, ...row2].map((t, idx) => (
            <div key={`row2-${t.name}-${idx}`} className="testimonial-google-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${
                        idx % 3 === 0 ? '#0EA5A5, #7BC142' :
                        idx % 3 === 1 ? '#4F46E5, #0EA5A5' :
                        '#0B1F3A, #0EA5A5'
                      })`,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div style={{ flexGrow: 1, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <span style={{ fontWeight: 800, color: 'var(--navy)', fontSize: '0.95rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {t.name}
                      </span>
                      <CheckCircle2 size={14} color="#1D9BF0" fill="#1D9BF0" stroke="white" style={{ flexShrink: 0 }} />
                    </div>
                    <div style={{ fontSize: 'var(--body-xs)', color: 'var(--charcoal-400)', marginTop: 1 }}>
                      {t.date}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', gap: '3px', color: 'var(--gold)' }} aria-hidden="true">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--charcoal-500)', lineHeight: 1.6 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-teal" style={{ fontSize: '0.6875rem' }}>{t.tag}</span>
                <span style={{ fontSize: '0.75rem', color: '#1D9BF0', fontWeight: 600 }}>Verified Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href={BUSINESS.googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary testimonials-footer-btn"
        >
          View All Google Reviews on Maps
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
