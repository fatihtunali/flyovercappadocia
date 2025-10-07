import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/cappadociaballoonride.jpg"
          alt="Cappadocia Hot Air Balloons"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
            Experience Cappadocia from the Sky
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-semibold" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)'}}>
            Unforgettable hot air balloon rides over the magical landscapes of Cappadocia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition shadow-lg">
              Book Your Flight
            </Link>
            <Link href="/packages" className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Choose Your Adventure</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Select the perfect flight package for your experience</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard Package */}
            <div className="border rounded-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Standard Flight</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">€300</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li>✓ 1 hour flight time</li>
                <li>✓ Sunrise departure</li>
                <li>✓ 16-20 passengers</li>
                <li>✓ Flight certificate</li>
                <li>✓ Hotel pickup & drop-off</li>
                <li>✓ Light breakfast</li>
              </ul>
              <Link href="/contact" className="block text-center bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition">
                Book Now
              </Link>
            </div>

            {/* Deluxe Package */}
            <div className="border-2 border-orange-600 rounded-lg p-8 hover:shadow-xl transition relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Deluxe Flight</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">€400</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li>✓ 1.5 hour flight time</li>
                <li>✓ Sunrise departure</li>
                <li>✓ 8-12 passengers</li>
                <li>✓ Flight certificate</li>
                <li>✓ Hotel pickup & drop-off</li>
                <li>✓ Champagne breakfast</li>
              </ul>
              <Link href="/contact" className="block text-center bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition">
                Book Now
              </Link>
            </div>

            {/* VIP Package */}
            <div className="border rounded-lg p-8 hover:shadow-xl transition bg-gradient-to-br from-orange-50 to-yellow-50">
              <h3 className="text-2xl font-bold mb-4">VIP Private</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">From €1,100</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li>✓ 1.5 hour flight time</li>
                <li>✓ Private balloon (2-4 pax)</li>
                <li>✓ Flexible departure time</li>
                <li>✓ Premium certificate</li>
                <li>✓ Luxury hotel pickup</li>
                <li>✓ Gourmet champagne breakfast</li>
              </ul>
              <Link href="/contact" className="block text-center bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Book With Us?</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/Fly Over Cappadocia - Best Selection.png"
                  alt="Best Selection"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Best Selection</h3>
              <p className="text-gray-700">We work with all certified balloon operators in Cappadocia</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/Fly Over Cappadocia - Best Price.png"
                  alt="Best Prices"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Best Prices</h3>
              <p className="text-gray-700">Guaranteed competitive rates and special offers</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/Fly Over Cappadocia - Best Support.png"
                  alt="Best Support"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Service</h3>
              <p className="text-gray-700">Local knowledge and 24/7 customer support</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-4xl text-orange-600">
                  ✓
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Easy Booking</h3>
              <p className="text-gray-700">Quick confirmation and flexible cancellation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">"Absolutely magical experience! The sunrise over Cappadocia was breathtaking. Highly recommend booking with Flyover Cappadocia."</p>
              <p className="font-semibold">- Sarah M., USA</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">"Professional service from start to finish. The pilot was experienced and made us feel safe throughout the flight."</p>
              <p className="font-semibold">- Marco R., Italy</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-yellow-500 text-2xl mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">"Best way to see Cappadocia! Easy booking process and great communication. Worth every penny!"</p>
              <p className="font-semibold">- Yuki T., Japan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl mb-8">Book your hot air balloon ride today and create memories that will last a lifetime</p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
