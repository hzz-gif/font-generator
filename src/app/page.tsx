import { Star } from 'lucide-react';
import FontGeneratorIcon from '@/components/FontGeneratorIcon';
import FontGenerator from '@/components/FontGenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="bg-white px-6 py-8 text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-4 flex items-center justify-center gap-3">
            <FontGeneratorIcon size={40} />
            Font Generator<span className="relative inline-flex items-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold px-2 py-1 rounded-md ml-2 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                .pro
              </span>
            </span>
          </h1>
          <p className="text-gray-600 mb-2">
            #1 Font & Text Generator with 180+ fonts & 30 font styles (
            <span className="font-bold">🅒🅞🅞🅛</span>, fancy, <em>cursive</em> and more). Just copy and paste.
          </p>
          <div className="flex items-center justify-center gap-1 text-pink-500 mb-6" role="img" aria-label="4.8 out of 5 stars rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="ml-2 font-semibold">4.8</span>
            <span className="text-gray-500 ml-1">(1,666)</span>
          </div>
        </header>

        {/* Font Generator Component */}
        <FontGenerator />

        {/* Main Content Sections */}
        <section className="bg-white px-6 py-12 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">#1 Font & Text Generator</h2>
              <p className="text-lg text-gray-700 mb-6 text-left">
                Welcome to the most comprehensive Font Generator on the web! Our advanced text transformation tool
                offers over 159 unique font styles across 20 different categories to make your text stand out. Whether you're looking for bold,
                fancy, cursive, or cool fonts, our Font Generator has everything you need to create stunning text
                for social media, gaming, or any creative project.
              </p>

              <p className="text-lg text-gray-700 mb-6 text-left">
                Our Font Generator uses Unicode characters to create beautiful, stylish text that works everywhere.
                From Instagram bios to Discord usernames, from Twitter posts to gaming profiles, our fonts are
                compatible with all major platforms and devices. No downloads, no installations - just instant,
                beautiful text transformation at your fingertips.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">180+ stylish text options</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Make your text fancy with a variety of styles 💖, categorized into relevant categories.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Perfect for Every Platform</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  😍 Thousands of cool Unicode symbols combined to create fonts for almost every use.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Fast, Fun, and Ready in Seconds</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  💎 Enter your text, preview in cool styles in seconds, and copy with just one click!
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">People love FontGenerator.pro</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Thousands have made text stylish 🔥 650+ upvotes on Reddit & 100+ points on Y Combinator.
                </p>
              </div>
            </div>


          </div>
        </section>



        <section className="bg-white px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use Our Font Generator</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Getting started with our Font Generator is incredibly simple. Follow these easy steps to create
              beautiful, stylized text in seconds.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-purple-600 flex-shrink-0">
                  1
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Your Text</h3>
                  <p className="text-gray-700">
                    Type or paste any text into the Font Generator input field. You can enter names, quotes,
                    messages, or any content you want to stylize. Our tool works with text of any length.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-purple-600 flex-shrink-0">
                  2
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse Font Styles</h3>
                  <p className="text-gray-700">
                    Explore our extensive collection of 159+ font styles organized in 20 categories.
                    The Font Generator will instantly show you how your text looks in each style.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-purple-600 flex-shrink-0">
                  3
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select and Copy</h3>
                  <p className="text-gray-700">
                    Click on any font style you like, and the Font Generator will automatically copy it to your
                    clipboard. You'll see a confirmation message when the text is successfully copied.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-purple-600 flex-shrink-0">
                  4
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Paste Anywhere</h3>
                  <p className="text-gray-700">
                    Paste your stylized text anywhere you want - social media posts, messaging apps, documents,
                    or websites. The Font Generator ensures your text will display perfectly everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Can Use Our Fonts For</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our Font Generator creates versatile text styles perfect for any platform or purpose.
              Discover the endless possibilities for using stylized fonts in your digital life.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-center">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Social Media</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Instagram bios and captions</li>
                  <li>• Twitter posts and profiles</li>
                  <li>• Facebook status updates</li>
                  <li>• TikTok video descriptions</li>
                  <li>• LinkedIn professional profiles</li>
                  <li>• YouTube channel names</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Make your social media presence stand out with unique fonts from our Font Generator.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-center">🎮</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Gaming & Communication</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Discord usernames and status</li>
                  <li>• Gaming profile names</li>
                  <li>• Clan tags and team names</li>
                  <li>• WhatsApp messages</li>
                  <li>• Telegram channel names</li>
                  <li>• Forum signatures</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Create memorable gaming identities with cool fonts from our Font Generator.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-center">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Professional & Creative</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Business card designs</li>
                  <li>• Logo and branding text</li>
                  <li>• Website headers</li>
                  <li>• Email signatures</li>
                  <li>• Presentation titles</li>
                  <li>• Creative project names</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Add professional flair to your work with elegant fonts from our Font Generator.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Why Our Font Generator is Perfect for Every Use Case</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-gray-900 mb-2">✨ Versatile Styles</div>
                  <p className="text-gray-700 text-sm">
                    Our Font Generator offers styles ranging from professional and elegant to fun and creative,
                    ensuring you find the perfect font for any occasion.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">🔄 Instant Updates</div>
                  <p className="text-gray-700 text-sm">
                    Change your text style anytime with our Font Generator. No commitments, no limitations -
                    just endless creative possibilities.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">🌐 Global Compatibility</div>
                  <p className="text-gray-700 text-sm">
                    Fonts created with our Font Generator work worldwide, across all languages, platforms,
                    and devices without any special requirements.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-2">💯 Always Free</div>
                  <p className="text-gray-700 text-sm">
                    Our Font Generator remains completely free to use with no hidden costs, registration
                    requirements, or usage limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>







        <section className="bg-white px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Font Generator FAQs</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">❓ What is a Font Generator?</h3>
                <p className="text-gray-700 mb-4">
                  A Font Generator is a tool that converts your regular text into stylish, fancy text using Unicode characters.
                  Our generator offers 180+ unique font styles including bold, italic, cursive, bubble, and symbol fonts that work across all platforms.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔧 How does the Font Generator work?</h3>
                <p className="text-gray-700 mb-4">
                  Simply type your text in the input box, and our generator instantly converts it into multiple font styles.
                  Click on any style to copy it to your clipboard, then paste it anywhere you want - social media, gaming platforms, or messaging apps.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Is the Font Generator free to use?</h3>
                <p className="text-gray-700 mb-4">
                  Yes! Our Font Generator is completely free with no hidden fees, registration requirements, or download needed.
                  You can generate unlimited fancy text and use all 180+ font styles without any restrictions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📱 Where can I use these fonts?</h3>
                <p className="text-gray-700 mb-4">
                  Our fonts work everywhere! Use them on Instagram bios, Twitter posts, Discord usernames, gaming profiles,
                  WhatsApp status, YouTube channel names, Facebook posts, TikTok captions, and any platform that supports Unicode text.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔒 Are the generated fonts safe to use?</h3>
                <p className="text-gray-700 mb-4">
                  Absolutely! Our fonts use standard Unicode characters that are universally supported and safe.
                  They won't harm your device or accounts, and they display correctly across different operating systems and browsers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ Why choose FontGenerator.pro?</h3>
                <p className="text-gray-700 mb-4">
                  We offer the largest collection of 180+ font styles, instant preview, one-click copying, mobile-responsive design,
                  and work on all platforms. No registration needed, completely free, and trusted by millions of users worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="mb-3">
                <h3 className="text-lg font-bold mb-2">Font Generator</h3>
                <p className="text-gray-300 mb-2 max-w-2xl text-sm">
                  The ultimate Font Generator for creating stylish text. Transform your ordinary text into extraordinary designs with our comprehensive Font Generator collection of Unicode fonts.
                </p>
                <div className="flex items-center justify-center gap-2 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                  <span className="text-white ml-2">4.8/5</span>
                </div>

                {/* Social Media Share Buttons */}
                <div className="mb-3">
                  <p className="text-gray-300 text-xs mb-2">Share FontGenerator.pro with friends:</p>
                  <div className="flex items-center justify-center gap-4">
                    {/* Twitter/X Share */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check out this amazing Font Generator! Transform your text into 180+ stylish fonts instantly 🎨&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://fontgenerator.pro')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Share on X
                    </a>

                    {/* Facebook Share */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://fontgenerator.pro')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Share on Facebook
                    </a>

                    {/* LinkedIn Share */}
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://fontgenerator.pro')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Share on LinkedIn
                    </a>

                    {/* WhatsApp Share */}
                    <a
                      href={`https://wa.me/?text=Check out this amazing Font Generator! Transform your text into 180+ stylish fonts instantly 🎨 ${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://fontgenerator.pro')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                      aria-label="Share on WhatsApp"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Share on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                <p className="text-gray-300 text-sm">
                  © 2024 Font Generator. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
                  <a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</a>
                  <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
