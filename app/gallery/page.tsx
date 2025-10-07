import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    { src: '/images/HotAirBallonRide-1.JPG', title: 'Sunrise Over Cappadocia', category: 'Sunrise' },
    { src: '/images/HotAirBalloonRide-2.JPG', title: 'Fairy Chimneys from Above', category: 'Landscape' },
    { src: '/images/HotAirBalloonRide-3.JPG', title: 'Balloon Fleet', category: 'Balloons' },
    { src: '/images/HotAirBalloonRide-4.JPG', title: 'Valley Views', category: 'Landscape' },
    { src: '/images/HotAirBalloonRide-5.JPG', title: 'Golden Hour Flight', category: 'Sunrise' },
    { src: '/images/HotAirBalloonRide-6.JPG', title: 'Rock Formations', category: 'Landscape' },
    { src: '/images/HotAirBalloonRide-7.JPG', title: 'Balloon Experience', category: 'Experience' },
    { src: '/images/cappadociaballoonride.jpg', title: 'Multiple Balloons', category: 'Balloons' },
    { src: '/images/cappadociaballoonride2.jpg', title: 'Göreme Valley', category: 'Landscape' },
    { src: '/images/cappadociaballoonride3.jpg', title: 'Dawn Flight', category: 'Sunrise' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Discover the breathtaking beauty of Cappadocia from above</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-700 mb-12 text-lg font-medium">
            These are just some of the incredible views you'll experience on your hot air balloon flight
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end p-6">
                  <p className="text-white font-bold text-lg mb-1">{image.title}</p>
                  <p className="text-orange-300 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Experience It Yourself</h2>
          <div className="aspect-video rounded-xl flex items-center justify-center relative overflow-hidden shadow-xl">
            <Image
              src="/images/Fly Over Cappadocia -Hot Air Balloon Tickets - Cappadocia Balloons.jpg"
              alt="Cappadocia Balloons"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 text-white">▶</div>
                <p className="text-xl font-semibold text-white drop-shadow-lg">Watch Our Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-orange-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Create Your Own Memories</h2>
        <p className="text-xl mb-8">Book your flight and capture unforgettable moments</p>
        <a href="/contact" className="inline-block bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
          Book Now
        </a>
      </section>
    </div>
  );
}
