import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Star } from 'lucide-react'
import { BUSINESS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="navbar-logo" aria-label="Kiwi Tech Computers">
              <div className="navbar-logo-mark">K</div>
              <div className="navbar-logo-text">
                <div className="navbar-logo-name">Kiwi Tech</div>
                <div className="navbar-logo-sub">Computers</div>
              </div>
            </Link>
            <p>
              Hyderabad&apos;s trusted IT partner for laptop &amp; desktop sales, repair, CCTV installation,
              printer service, and corporate AMC.
            </p>
            <div className="social-links" style={{ marginTop: '1.25rem' }}>
              <a
                href={BUSINESS.social.google}
                className="social-link"
                aria-label="Google Business Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star size={16} aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.social.instagram}
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.social.facebook}
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul>
              <li><Link href="/sales">Sales</Link></li>
              <li><Link href="/services">Repair Services</Link></li>
              <li><Link href="/corporate">Corporate AMC</Link></li>
              <li><Link href="/corporate#bulk">Bulk Procurement</Link></li>
              <li><Link href="/services#cctv-service">CCTV Installation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#reviews">Reviews</Link></li>
              <li><Link href="/about#gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <a href={BUSINESS.googleReviewLink} target="_blank" rel="noopener noreferrer">
                  Write a Review
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-item">
              <MapPin size={15} aria-hidden="true" />
              <span>{BUSINESS.address.full}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} aria-hidden="true" />
              <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} aria-hidden="true" />
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </div>
            <div className="footer-contact-item">
              <Clock size={15} aria-hidden="true" />
              <span>Mon – Sun, 9:00 AM – 9:30 PM</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; developed by{' '}
            <a href={BUSINESS.designedByUrl} target="_blank" rel="noopener noreferrer">
              {BUSINESS.designedBy}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
