import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Flyover Cappadocia</h3>
            <p className="text-gray-400">Experience the magic of Cappadocia from above with our trusted balloon ride partners.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link href="/packages" className="text-gray-400 hover:text-orange-500">Packages</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-orange-500">Gallery</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-orange-500">How It Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-orange-500">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@flyovercappadocia.com</li>
              <li>📱 +90 539 502 53 10</li>
              <li>📍 Cappadocia, Turkey</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Flyover Cappadocia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
