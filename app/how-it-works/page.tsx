import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl">Your journey from booking to landing - step by step</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-5xl font-bold text-orange-600">
                1
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Book Your Flight</h2>
              <p className="text-gray-700 text-lg mb-4">
                Choose your preferred package and fill out our simple booking form. We recommend booking at least 24 hours in advance,
                especially during peak season (April-October). You'll receive a confirmation email within a few hours.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Select your package (Standard, Deluxe, or VIP)</li>
                <li>✓ Choose your preferred date</li>
                <li>✓ Receive instant confirmation</li>
                <li>✓ Secure payment processing</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-gray-200"></div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-5xl font-bold text-orange-600">
                2
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Confirmation & Pickup Details</h2>
              <p className="text-gray-700 text-lg mb-4">
                One day before your flight, we'll send you the exact pickup time. Pickup times vary by season and hotel location,
                typically between 4:30 AM and 5:30 AM. Our driver will meet you at your hotel lobby.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Pickup time notification (night before)</li>
                <li>✓ Weather check and confirmation</li>
                <li>✓ Driver contact information</li>
                <li>✓ What to wear and bring instructions</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-gray-200"></div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-5xl font-bold text-orange-600">
                3
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Early Morning Pickup</h2>
              <p className="text-gray-700 text-lg mb-4">
                Our comfortable vehicle will pick you up from your hotel. During the 20-30 minute drive to the launch site,
                enjoy the pre-dawn atmosphere of Cappadocia. Light refreshments are provided en route.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Hotel lobby pickup</li>
                <li>✓ Comfortable transportation</li>
                <li>✓ Coffee and light breakfast</li>
                <li>✓ Meet your pilot and crew</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-gray-200"></div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-5xl font-bold text-orange-600">
                4
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Pre-Flight Preparation</h2>
              <p className="text-gray-700 text-lg mb-4">
                Watch the fascinating process of balloon inflation! Your pilot will give a safety briefing and explain proper
                landing positions. This is a great time to take photos and ask questions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Watch balloon inflation (15-20 minutes)</li>
                <li>✓ Safety briefing from pilot</li>
                <li>✓ Photo opportunities</li>
                <li>✓ Board the basket</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-gray-200"></div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-5xl font-bold text-orange-600">
                5
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">The Flight Experience</h2>
              <p className="text-gray-700 text-lg mb-4">
                Gently lift off and float over Cappadocia's unique landscape as the sun rises. Experience the magical "fairy chimneys,"
                ancient cave dwellings, and stunning valleys from a bird's eye view. Your pilot will provide commentary and point out landmarks.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 60-90 minute flight (package dependent)</li>
                <li>✓ Sunrise views over unique landscapes</li>
                <li>✓ Float between 500-3000 feet altitude</li>
                <li>✓ 360° panoramic views</li>
                <li>✓ Pilot commentary and photo opportunities</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-gray-200"></div>

          {/* Step 6 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-5xl font-bold text-orange-600">
                6
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Landing & Celebration</h2>
              <p className="text-gray-700 text-lg mb-4">
                Your pilot will guide the balloon to a safe landing spot. After landing, celebrate with champagne (or juice)
                and receive your personalized flight certificate - a tradition dating back to the first balloon flights in France!
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Smooth landing</li>
                <li>✓ Champagne toast ceremony</li>
                <li>✓ Personalized flight certificate</li>
                <li>✓ Group photos</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-gray-200"></div>

          {/* Step 7 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center text-5xl font-bold text-orange-600">
                7
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Return to Hotel</h2>
              <p className="text-gray-700 text-lg mb-4">
                After the celebration, we'll drive you back to your hotel. You'll typically arrive around 8:00-9:00 AM,
                giving you the rest of the day to explore Cappadocia or simply relax with your amazing memories.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Comfortable return transportation</li>
                <li>✓ Arrive back by 8:00-9:00 AM</li>
                <li>✓ Full day ahead to explore</li>
                <li>✓ Share your photos on social media!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Policy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🌤️</span>
                Weather Policy
              </h3>
              <p className="text-gray-700 mb-3">
                Hot air balloon flights are weather-dependent for safety. If conditions aren't suitable, we'll offer:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Reschedule to another date</li>
                <li>• Full refund (no questions asked)</li>
                <li>• Decision made morning of flight</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🛡️</span>
                Safety First
              </h3>
              <p className="text-gray-700 mb-3">
                All our partner operators meet strict safety standards:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Licensed & certified pilots</li>
                <li>• Regularly inspected equipment</li>
                <li>• Full insurance coverage</li>
                <li>• Perfect safety record</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for This Amazing Experience?</h2>
        <p className="text-xl mb-8">Book your balloon ride today and create unforgettable memories</p>
        <Link href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
          Book Now
        </Link>
      </section>
    </div>
  );
}
