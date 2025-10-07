import Link from 'next/link';
import Image from 'next/image';

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 px-4 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/cappadociaballoonride2.jpg"
          alt="Hot Air Balloons Cappadocia"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>Flight Packages</h1>
          <p className="text-xl md:text-2xl text-white font-semibold" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)'}}>Choose the perfect balloon ride experience for you</p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Standard Package */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-orange-100 to-yellow-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Standard Flight</h2>
                <p className="text-5xl font-bold text-orange-600">€300</p>
                <p className="text-gray-600 mt-2">per person</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4">Perfect for First-Timers</h3>
              <p className="text-gray-700 mb-6">Experience the magic of Cappadocia from above with our most popular standard flight package. Ideal for travelers looking for an authentic hot air balloon experience at a great value.</p>

              <h4 className="font-bold mb-3">What's Included:</h4>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> 60 minute flight time</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Sunrise departure</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> 16-20 passengers per basket</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Professional pilot</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Flight certificate</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Hotel pickup & drop-off</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Light breakfast before flight</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Insurance included</li>
              </ul>

              <Link href="/contact" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition">
                Book Standard Flight
              </Link>
            </div>
          </div>

          {/* Deluxe Package */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex border-2 border-orange-600 relative">
            <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-orange-200 to-yellow-200 p-8 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">Deluxe Flight</h2>
                <p className="text-5xl font-bold text-orange-600">€400</p>
                <p className="text-gray-600 mt-2">per person</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4">Enhanced Experience</h3>
              <p className="text-gray-700 mb-6">Enjoy a longer flight time with fewer passengers for a more intimate experience. Our deluxe package offers premium services and spectacular views with extra time in the air.</p>

              <h4 className="font-bold mb-3">What's Included:</h4>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> 90 minute flight time</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Sunrise departure</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> 8-12 passengers per basket</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Experienced senior pilot</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Premium flight certificate</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Hotel pickup & drop-off</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Champagne breakfast celebration</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Professional photo service</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Insurance included</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Priority booking</li>
              </ul>

              <Link href="/contact" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition">
                Book Deluxe Flight
              </Link>
            </div>
          </div>

          {/* VIP Package */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-orange-300 to-yellow-300 p-8 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">VIP Private</h2>
                <p className="text-5xl font-bold text-orange-700">From €1,100</p>
                <p className="text-gray-700 mt-2">total (2-4 people)</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4">Ultimate Luxury Experience</h3>
              <p className="text-gray-700 mb-6">The most exclusive way to experience Cappadocia. Enjoy a completely private balloon with just your group, flexible timing, and VIP treatment from start to finish.</p>

              <h4 className="font-bold mb-3">What's Included:</h4>
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> 90 minute flight time</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Flexible departure time</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Private balloon (2-4 passengers)</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Expert chief pilot</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Luxury certificate with photo frame</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Premium hotel pickup & drop-off</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Gourmet champagne breakfast</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Personal photographer during flight</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> High-resolution photo package</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Commemorative gift pack</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Insurance included</li>
                <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> VIP concierge service</li>
              </ul>

              <Link href="/contact" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition">
                Book VIP Flight
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3">📅 Booking Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Advance booking recommended (min. 24 hours)</li>
                <li>• Weather-dependent (full refund if cancelled)</li>
                <li>• Children must be at least 6 years old</li>
                <li>• Height requirement: minimum 1.2m (4ft)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">🕐 Flight Schedule</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pickup: 4:30 - 5:30 AM (hotel dependent)</li>
                <li>• Flight: Sunrise time (varies by season)</li>
                <li>• Return: Approximately 3 hours after pickup</li>
                <li>• VIP flights: flexible timing available</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">👕 What to Wear</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comfortable, layered clothing</li>
                <li>• Closed-toe shoes (sneakers recommended)</li>
                <li>• Hat and sunglasses</li>
                <li>• Light jacket for cool mornings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">💳 Payment & Cancellation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Secure online payment accepted</li>
                <li>• Free cancellation up to 24 hours before</li>
                <li>• Full refund for weather cancellations</li>
                <li>• Rescheduling available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Flight?</h2>
        <p className="text-xl mb-8">Contact us now to secure your spot</p>
        <Link href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
          Book Now
        </Link>
      </section>
    </div>
  );
}
