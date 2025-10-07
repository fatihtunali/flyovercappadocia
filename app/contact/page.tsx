'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    package: 'standard',
    guests: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Book Your Flight</h1>
          <p className="text-xl">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Booking Request</h2>

            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you! Your booking request has been received. We'll contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="+90 539 502 53 10"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Package *</label>
                <select
                  name="package"
                  required
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                >
                  <option value="standard">Standard Flight - €300</option>
                  <option value="deluxe">Deluxe Flight - €400</option>
                  <option value="vip">VIP Private - From €1,100</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Guests *</label>
                <select
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Any special requests or questions?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition"
              >
                Submit Booking Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-700">info@flyovercappadocia.com</p>
                  <p className="text-gray-600 text-sm">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📱</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-gray-700">+90 539 502 53 10</p>
                  <a href="https://wa.me/905395025310" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline text-sm">
                    Message us on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-gray-700">Cappadocia, Turkey</p>
                  <p className="text-gray-600 text-sm">Covering all major hotels</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">🕐</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Operating Hours</h3>
                  <p className="text-gray-700">24/7 Customer Support</p>
                  <p className="text-gray-600 text-sm">Flights daily (weather permitting)</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">What Happens Next?</h3>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">1.</span>
                  <span>We review your booking request</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">2.</span>
                  <span>Check availability for your preferred date</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">3.</span>
                  <span>Send you confirmation with payment details</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-orange-600 mr-2">4.</span>
                  <span>Provide pickup time and final details</span>
                </li>
              </ol>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-lg mb-2">🛡️ Book with Confidence</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ Secure payment processing</li>
                <li>✓ Free cancellation (24h notice)</li>
                <li>✓ Weather guarantee - full refund</li>
                <li>✓ Licensed & insured operators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
