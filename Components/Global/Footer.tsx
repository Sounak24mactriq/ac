import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* App Download Section */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="w-20 h-20 bg-orange-500 rounded-md mb-4 flex items-center justify-center text-white text-2xl font-bold">
              Etsy
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Download the Etsy App
            </button>
          </div>

          {/* Shop Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Shop</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Gift cards</Link></li>
              <li><Link href="#" className="hover:underline">Etsy Registry</Link></li>
              <li><Link href="#" className="hover:underline">Sitemap</Link></li>
              <li><Link href="#" className="hover:underline">Etsy blog</Link></li>
              <li><Link href="#" className="hover:underline">Etsy United Kingdom</Link></li>
              <li><Link href="#" className="hover:underline">Etsy Germany</Link></li>
              <li><Link href="#" className="hover:underline">Etsy Canada</Link></li>
            </ul>
          </div>

          {/* Sell Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Sell</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Sell on Etsy</Link></li>
              <li><Link href="#" className="hover:underline">Teams</Link></li>
              <li><Link href="#" className="hover:underline">Forums</Link></li>
              <li><Link href="#" className="hover:underline">Affiliates & Creators</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">About</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Etsy, Inc.</Link></li>
              <li><Link href="#" className="hover:underline">Policies</Link></li>
              <li><Link href="#" className="hover:underline">Investors</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
              <li><Link href="#" className="hover:underline">Impact</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Help</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Help Center</Link></li>
              <li><Link href="#" className="hover:underline">Privacy settings</Link></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {/* Instagram */}
              <Link href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              {/* Pinterest */}
              <Link href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </Link>
              {/* Twitter */}
              <Link href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </Link>
              {/* YouTube */}
              <Link href="#" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-black/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <span>United States</span>
              </button>
              <span>|</span>
              <button>English (US)</button>
              <span>|</span>
              <button>$ (USD)</button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link href="#" className="hover:underline">© 2024 Etsy, Inc.</Link>
              <Link href="#" className="hover:underline">Terms of Use</Link>
              <Link href="#" className="hover:underline">Privacy</Link>
              <Link href="#" className="hover:underline">Interest-based ads</Link>
              <Link href="#" className="hover:underline">Local Shops</Link>
              <Link href="#" className="hover:underline">Regions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}