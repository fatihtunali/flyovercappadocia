'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'When is the best time for a hot air balloon ride in Cappadocia?',
      answer: 'Hot air balloon flights operate year-round in Cappadocia. Spring (April-May) and Fall (September-October) offer the most pleasant weather. Summer can be hot but has very stable flying conditions. Winter flights are magical with possible snow-covered landscapes, though flights may be cancelled more frequently due to weather.'
    },
    {
      question: 'What time do flights take place?',
      answer: 'Flights depart at sunrise to take advantage of calm morning winds and the most spectacular light. Pickup is typically between 4:30-5:30 AM depending on season and hotel location. You\'ll be back at your hotel by 8:00-9:00 AM.'
    },
    {
      question: 'How long is the entire experience?',
      answer: 'The total experience lasts approximately 3-3.5 hours: pickup from hotel (30 min), pre-flight preparation (20 min), flight time (60-90 min depending on package), landing celebration (20 min), and return to hotel (30 min).'
    },
    {
      question: 'Is it safe?',
      answer: 'Absolutely! All our partner operators are licensed by the Turkish Civil Aviation Authority and maintain excellent safety records. Pilots are highly experienced with thousands of flight hours. Balloons are regularly inspected and fully insured. Hot air ballooning is statistically one of the safest forms of aviation.'
    },
    {
      question: 'What happens if the flight is cancelled due to weather?',
      answer: 'Safety is our top priority. If conditions aren\'t suitable, flights will be cancelled. You have two options: reschedule to another available date or receive a full refund. The decision is typically made on the morning of the flight. Weather cancellations occur about 10-15% of the time.'
    },
    {
      question: 'What should I wear?',
      answer: 'Wear comfortable, layered clothing suitable for the season. Mornings can be cool even in summer. Closed-toe shoes are mandatory (sneakers or hiking boots recommended). Avoid sandals, flip-flops, or high heels. Bring a hat, sunglasses, and a light jacket. Dress in layers you can remove as it warms up.'
    },
    {
      question: 'Can children participate?',
      answer: 'Children must be at least 6 years old and 1.2m (4 feet) tall to safely see over the basket edge. Children under 18 must be accompanied by an adult. Please note that flights last 1-1.5 hours standing, so consider if your child can handle this.'
    },
    {
      question: 'Are there weight restrictions?',
      answer: 'There are no specific weight limits, but passengers should be able to stand comfortably for the duration of the flight and be able to climb in and out of the basket (approximately 1.2m high). For safety, pilots need to balance passenger weight distribution in the basket.'
    },
    {
      question: 'Can I bring my camera?',
      answer: 'Yes! Cameras and phones are welcome. We recommend securing them with a strap. The best photos come from smartphones or cameras with wide-angle lenses. GoPros and action cameras work great. Some packages include professional photography.'
    },
    {
      question: 'What if I\'m afraid of heights?',
      answer: 'Many people with fear of heights actually feel comfortable in a hot air balloon! The basket is stable, moves slowly, and there\'s no sensation of height like on a building or cliff. You can stay in the center of the basket. However, if you have severe acrophobia, you might want to reconsider.'
    },
    {
      question: 'How high do we fly?',
      answer: 'Altitude varies during the flight, typically between 500-3000 feet (150-1000 meters). The pilot adjusts altitude to show you different perspectives - flying low through valleys and higher for panoramic views. The ride is smooth and gentle throughout.'
    },
    {
      question: 'Do I need to book in advance?',
      answer: 'Yes, we strongly recommend booking at least 24-48 hours in advance. During peak season (April-October), book several days or even weeks ahead. Last-minute bookings are sometimes available but not guaranteed, especially for Deluxe and VIP packages.'
    },
    {
      question: 'What\'s included in the price?',
      answer: 'All packages include: hotel pickup and drop-off, light breakfast before flight, the balloon flight itself, post-flight champagne celebration, flight certificate, and insurance. Deluxe and VIP packages include additional perks like longer flight time, fewer passengers, and premium services.'
    },
    {
      question: 'What\'s the difference between Standard, Deluxe, and VIP?',
      answer: 'Standard (€300): 60 min flight, 16-20 passengers. Deluxe (€400): 90 min flight, 8-12 passengers, champagne breakfast, photos. VIP (From €1,100): 90 min private flight for 2-4 people, flexible timing, personal photographer, luxury treatment. See our Packages page for complete details.'
    },
    {
      question: 'Can I propose during the flight?',
      answer: 'Absolutely! A hot air balloon ride is incredibly romantic and perfect for proposals. Book our VIP package for privacy. Let us know in advance and we can help arrange special touches like champagne, flowers, or a photographer. Many couples get engaged in Cappadocia balloons!'
    },
    {
      question: 'Is hotel pickup included?',
      answer: 'Yes! Pickup and drop-off are included from all hotels in the Göreme, Ürgüp, Avanos, Uchisar, and Ortahisar areas. If you\'re staying outside these areas, contact us to confirm pickup availability. Driver details are provided the night before your flight.'
    },
    {
      question: 'What if I get motion sickness?',
      answer: 'Hot air balloon flights are very smooth and gentle - much smoother than a car or boat. Most people prone to motion sickness have no issues. The basket doesn\'t swing or sway. If you\'re concerned, take motion sickness medication 30-60 minutes before the flight as a precaution.'
    },
    {
      question: 'Can pregnant women fly?',
      answer: 'We do not recommend hot air balloon flights for pregnant women at any stage of pregnancy. The landing can involve a bump, and safety is our priority. Please wait until after your pregnancy for this experience.'
    },
    {
      question: 'Do you fly every day?',
      answer: 'Flights operate 365 days a year, weather permitting. During winter months, flights may be cancelled more frequently due to snow, strong winds, or low visibility. Spring, summer, and fall have the highest success rate for flights.'
    },
    {
      question: 'How do I pay?',
      answer: 'We accept credit cards, debit cards, and bank transfers for online payment. Cash payment (EUR, USD, or TRY) can be arranged at pickup. Full payment is typically required at booking, with our secure payment processor. Payment details will be in your confirmation email.'
    },
    {
      question: 'What\'s your cancellation policy?',
      answer: 'Free cancellation up to 24 hours before your scheduled flight for a full refund. Weather cancellations result in automatic full refund or free rescheduling. No-shows or cancellations with less than 24 hours notice forfeit payment unless due to medical emergency.'
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes! After landing, you\'ll receive a traditional flight certificate signed by your pilot. This tradition dates back to the first hot air balloon flights in 18th century France. VIP packages include a premium framed certificate with your flight photo.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Everything you need to know about hot air balloon rides in Cappadocia</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-4 bg-white hover:bg-orange-50 transition flex justify-between items-center"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <span className="text-orange-600 text-2xl flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-orange-50 p-8 rounded-lg text-center border border-orange-200">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-700 mb-6">
              We're here to help! Contact us directly and we'll answer any questions you have about your balloon ride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition font-semibold">
                Contact Us
              </Link>
              <a href="https://wa.me/905395025310" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition font-semibold">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Adventure?</h2>
        <p className="text-xl mb-8">Don't wait - secure your spot today!</p>
        <Link href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
          Book Now
        </Link>
      </section>
    </div>
  );
}
