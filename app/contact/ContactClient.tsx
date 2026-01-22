'use client';

import { useState } from 'react';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("MESSAGE SENT SUCCESSFULLY! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-warm-brown text-white text-xs tracking-[0.3em] mb-6 font-bold">
            GET IN TOUCH
          </div>
          <h1 className="font-display text-6xl md:text-8xl tracking-tight mb-6 font-black text-charcoal">
            CONTACT US
          </h1>
          <div className="w-32 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-xl tracking-wide font-medium max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-charcoal">PHONE</h3>
              <a href="tel:4037622021" className="text-warm-brown text-2xl font-bold hover:text-warm-brown/80 transition-colors">
                403.762.2021
              </a>
              <p className="text-charcoal/60 text-sm mt-2">Mon-Sun: 11:30 AM - 9PM</p>
            </div>

            {/* Email */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-charcoal">EMAIL</h3>
              <a href="mailto:info@bearstreettavern.ca" className="text-warm-brown text-lg font-bold hover:text-warm-brown/80 transition-colors break-all">
                INFO@BEARSTREETTAVERN.CA
              </a>
              <p className="text-charcoal/60 text-sm mt-2">We reply within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-charcoal">LOCATION</h3>
              <p className="text-charcoal font-bold mb-1">211 Bear Street</p>
              <p className="text-charcoal/70">Banff, AB T1L 1A1</p>
              <p className="text-charcoal/70">Canada</p>
            </div>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-200 p-10 rounded-lg">
              <h2 className="font-display text-3xl tracking-tight mb-6 font-black text-charcoal">
                SEND US A MESSAGE
              </h2>
              <div className="w-16 h-1 bg-warm-brown mb-6"></div>
              <p className="text-charcoal/70 mb-8">
                Have questions or feedback? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-charcoal mb-2 tracking-wide">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-warm-brown focus:outline-none transition-colors text-charcoal"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-charcoal mb-2 tracking-wide">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-warm-brown focus:outline-none transition-colors text-charcoal"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-2 tracking-wide">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-warm-brown focus:outline-none transition-colors text-charcoal"
                    placeholder="(403) 762-2021"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-charcoal mb-2 tracking-wide">
                    SUBJECT *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-warm-brown focus:outline-none transition-colors text-charcoal"
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
                  <label htmlFor="message" className="block text-sm font-bold text-charcoal mb-2 tracking-wide">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-warm-brown focus:outline-none transition-colors text-charcoal resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-charcoal px-8 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {submitMessage && (
                  <div className="bg-green-100 border-2 border-green-500 text-green-800 px-4 py-3 rounded text-center font-bold">
                    {submitMessage}
                  </div>
                )}
              </form>

              <p className="text-xs text-charcoal/60 mt-6">
                <strong>Note:</strong> For reservations, please use our{' '}
                <Link href="/reservations" className="text-warm-brown hover:underline">
                  reservations page
                </Link>{' '}
                or call us directly.
              </p>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="h-[400px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8895947397385!2d-115.57096842346835!3d51.17757363975825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370ca3d9b3b8ec5%3A0x8e3f8c3f8c3f8c3f!2s211%20Bear%20St%2C%20Banff%2C%20AB%20T1L%201A1%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bear Street Tavern Location"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl tracking-wider mb-3 font-bold text-charcoal">FIND US HERE</h3>
                  <p className="text-charcoal/70 mb-4">
                    Located in the heart of downtown Banff, we're easy to find on Bear Street, just steps from all the main attractions.
                  </p>
                  <a
                    href="https://maps.google.com/?q=211+Bear+Street,+Banff,+AB+T1L+1A1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-warm-brown text-white hover:bg-warm-brown/90 px-6 py-3 font-bold text-xs tracking-wider transition-all"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="font-display text-2xl tracking-wider mb-6 font-bold">HOURS OF OPERATION</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-4">
                    <span className="font-bold tracking-wider">MONDAY - SUNDAY</span>
                    <span className="text-white/80">11:30 AM - 9:00 PM</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <p className="text-sm text-white/80">
                      <strong className="text-white">Kitchen closes at 9PM</strong>
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="font-display text-2xl tracking-wider mb-6 font-bold text-charcoal">QUICK LINKS</h3>
                <div className="space-y-3">
                  <Link href="/reservations" className="flex items-center text-charcoal hover:text-warm-brown transition-colors group">
                    <span className="mr-3 text-warm-brown">→</span>
                    <span className="font-bold tracking-wide">Make a Reservation</span>
                  </Link>
                  <Link href="/order-online" className="flex items-center text-charcoal hover:text-warm-brown transition-colors group">
                    <span className="mr-3 text-warm-brown">→</span>
                    <span className="font-bold tracking-wide">Order Online</span>
                  </Link>
                  <Link href="/menu" className="flex items-center text-charcoal hover:text-warm-brown transition-colors group">
                    <span className="mr-3 text-warm-brown">→</span>
                    <span className="font-bold tracking-wide">View Menu</span>
                  </Link>
                  <a
                    href="https://banffcollective.com/careers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-charcoal hover:text-warm-brown transition-colors group"
                  >
                    <span className="mr-3 text-warm-brown">→</span>
                    <span className="font-bold tracking-wide">Careers</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
                <h3 className="font-display text-2xl tracking-wider mb-6 font-bold text-charcoal">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/bearstreettavern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-br from-purple-600 to-pink-500 text-white py-4 text-center font-bold tracking-wider hover:opacity-90 transition-opacity"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="https://facebook.com/bearstreettavern"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-4 text-center font-bold tracking-wider hover:opacity-90 transition-opacity"
                  >
                    FACEBOOK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-black text-white hover:bg-charcoal px-12 py-4 font-bold text-sm tracking-[0.3em] transition-all border-2 border-black"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
