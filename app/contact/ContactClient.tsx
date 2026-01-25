'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('subject', `Contact Form: ${formData.subject}`);
      formPayload.append('message', formData.message);
      formPayload.append('from_name', formData.name);
      formPayload.append('to_email', process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@bearstreettavern.ca');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage("MESSAGE SENT SUCCESSFULLY! We'll get back to you soon.");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 7000);
      } else {
        setSubmitMessage('Something went wrong. Please try again or contact us directly.');
        setTimeout(() => setSubmitMessage(''), 7000);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitMessage('Something went wrong. Please try again or contact us directly.');
      setTimeout(() => setSubmitMessage(''), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <main ref={sectionRef} id="main-content" className="min-h-screen bg-bg-primary pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? 'scroll-reveal' : ''}`}>
          <div className="inline-block px-6 py-2 bg-accent-primary text-white text-xs tracking-[0.3em] mb-6 font-bold rounded-lg">
            GET IN TOUCH
          </div>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-6 font-black text-white">
            CONTACT US
          </h1>
          <div className="w-32 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-text-secondary text-base md:text-lg tracking-wide font-medium max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className={`max-w-6xl mx-auto mb-16 ${isVisible ? 'scroll-reveal scroll-reveal-delay-1' : ''}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-black border border-border-subtle p-5 rounded-[3rem] text-center hover:border-accent-primary/30 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-display text-lg tracking-wider mb-3 font-bold text-white">PHONE</h3>
              <a href="tel:4037622021" className="text-accent-primary text-xl font-bold hover:text-accent-secondary transition-colors">
                403.762.2021
              </a>
              <p className="text-text-muted text-sm mt-2">Mon-Sun: 11:30 AM - 9PM</p>
            </div>

            {/* Email */}
            <div className="bg-black border border-border-subtle p-5 rounded-[3rem] text-center hover:border-accent-primary/30 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-lg tracking-wider mb-3 font-bold text-white">EMAIL</h3>
              <a href="mailto:info@bearstreettavern.ca" className="text-accent-primary text-base font-bold hover:text-accent-secondary transition-colors break-all">
                INFO@BEARSTREETTAVERN.CA
              </a>
              <p className="text-text-muted text-sm mt-2">We reply within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-black border border-border-subtle p-5 rounded-[3rem] text-center hover:border-accent-primary/30 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg tracking-wider mb-3 font-bold text-white">LOCATION</h3>
              <p className="text-white font-bold mb-1">211 Bear Street</p>
              <p className="text-text-secondary">Banff, AB T1L 1A1</p>
              <p className="text-text-secondary">Canada</p>
            </div>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className={`max-w-6xl mx-auto mb-16 ${isVisible ? 'scroll-reveal scroll-reveal-delay-2' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black border border-border-subtle p-6 rounded-[3rem]">
              <h2 className="font-display text-2xl tracking-tight mb-6 font-black text-white">
                SEND US A MESSAGE
              </h2>
              <div className="w-16 h-1 bg-accent-primary mb-6"></div>
              <p className="text-text-secondary mb-8">
                Have questions or feedback? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-2 tracking-wide">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-bg-secondary border-2 border-border-subtle focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-colors text-white rounded-lg"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2 tracking-wide">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-bg-secondary border-2 border-border-subtle focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-colors text-white rounded-lg"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-white mb-2 tracking-wide">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-secondary border-2 border-border-subtle focus:border-accent-primary focus:outline-none transition-colors text-white rounded-lg"
                    placeholder="(403) 762-2021"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-white mb-2 tracking-wide">
                    SUBJECT *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-secondary border-2 border-border-subtle focus:border-accent-primary focus:outline-none transition-colors text-white rounded-lg"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation Question</option>
                    <option value="menu">Menu & Food Questions</option>
                    <option value="event">Private Events</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white mb-2 tracking-wide">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-bg-secondary border-2 border-border-subtle focus:border-accent-primary focus:outline-none transition-colors text-white resize-none rounded-lg"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  aria-label={isSubmitting ? "Sending message, please wait" : "Send message"}
                  className="w-full bg-accent-primary text-white hover:bg-accent-secondary px-8 py-3 font-bold text-sm tracking-[0.3em] transition-all border-2 border-accent-primary disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 rounded-lg"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {submitMessage && (
                  <div
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-accent-primary/20 border-2 border-accent-primary text-white px-4 py-3 rounded-lg text-center font-bold"
                  >
                    {submitMessage}
                  </div>
                )}
              </form>

              <p className="text-xs text-text-muted mt-6">
                <strong>Note:</strong> For reservations, please use our{' '}
                <Link href="/reservations" className="text-accent-primary hover:underline">
                  reservations page
                </Link>{' '}
                or call us directly.
              </p>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="bg-black border border-border-subtle p-6 rounded-[3rem]">
                <h3 className="font-display text-xl tracking-wider mb-4 font-bold text-white">
                  FIND US HERE
                </h3>
                <p className="text-text-secondary mb-4">
                  Located in the heart of downtown Banff, we're easy to find on Bear Street, just steps from all the main attractions.
                </p>
                <p className="text-text-secondary mb-4">
                  Scroll down for full map and directions.
                </p>
                <div className="mb-6">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=211+Bear+Street%2C+Banff%2C+AB+T1L+1A1%2C+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent-primary text-black hover:bg-accent-secondary px-8 py-3 font-bold text-sm tracking-[0.3em] transition-all rounded-lg"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden border border-border-subtle">
                  <iframe
                    src="https://maps.google.com/maps?q=211%20Bear%20Street%2C%20Banff%2C%20AB%20T1L%201A1%2C%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bear Street Tavern Location"
                  ></iframe>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-bg-secondary text-white p-6 rounded-[3rem] border border-border-subtle">
                <h3 className="font-display text-xl tracking-wider mb-6 font-bold">HOURS OF OPERATION</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                    <span className="font-bold tracking-wider">MONDAY - SUNDAY</span>
                    <span className="text-text-secondary">11:30 AM - 9:00 PM</span>
                  </div>
                  <div className="bg-accent-primary/10 border border-accent-primary/30 p-4 rounded-[2rem]">
                    <p className="text-sm text-text-secondary">
                      <strong className="text-white">Kitchen closes at 9PM</strong>
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-black border border-border-subtle p-6 rounded-[3rem]">
                <h3 className="font-display text-xl tracking-wider mb-6 font-bold text-white">QUICK LINKS</h3>
                <div className="space-y-3">
                  <Link href="/reservations" className="flex items-center text-white hover:text-accent-primary transition-colors group">
                    <span className="mr-3 text-accent-primary">→</span>
                    <span className="font-bold tracking-wide">Make a Reservation</span>
                  </Link>
                  <Link href="/order-online" className="flex items-center text-white hover:text-accent-primary transition-colors group">
                    <span className="mr-3 text-accent-primary">→</span>
                    <span className="font-bold tracking-wide">Order Online</span>
                  </Link>
                  <Link href="/menu" className="flex items-center text-white hover:text-accent-primary transition-colors group">
                    <span className="mr-3 text-accent-primary">→</span>
                    <span className="font-bold tracking-wide">View Menu</span>
                  </Link>
                  <a
                    href="https://banffcollective.com/careers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-accent-primary transition-colors group"
                  >
                    <span className="mr-3 text-accent-primary">→</span>
                    <span className="font-bold tracking-wide">Careers</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-black border border-border-subtle p-6 rounded-[3rem]">
                <h3 className="font-display text-xl tracking-wider mb-6 font-bold text-white">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/bearstreettavern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-br from-purple-600 to-pink-500 text-white py-4 text-center font-bold tracking-wider hover:opacity-90 transition-opacity rounded-lg"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="https://facebook.com/bearstreettavern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-4 text-center font-bold tracking-wider hover:opacity-90 transition-opacity rounded-lg"
                  >
                    FACEBOOK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className={`text-center ${isVisible ? 'scroll-reveal' : ''}`}>
          <Link
            href="/"
            className="inline-block bg-white text-black hover:bg-black hover:text-white border border-black hover:border-white px-6 py-2 font-bold text-xs tracking-[0.2em] transition-all"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
