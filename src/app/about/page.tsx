import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Font Generator Pro - Our Story & Mission',
  description: 'Learn about Font Generator Pro, the leading online text styling tool serving 2+ million users monthly with 159+ unique font styles.',
  openGraph: {
    title: 'About Font Generator Pro - Our Story & Mission',
    description: 'Learn about Font Generator Pro, the leading online text styling tool serving 2+ million users monthly with 159+ unique font styles.',
    url: 'https://font-generator.pro/about/',
  },
  alternates: {
    canonical: 'https://font-generator.pro/about/',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Font Generator
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Font Generator</h1>
          <p className="text-xl text-gray-600">Your go-to tool for creating stunning text styles</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Font Generator was born out of a simple frustration: why was it so hard to make text look interesting online? 
              Back in 2019, our founder was trying to create an eye-catching Instagram bio and spent hours searching for 
              tools that could transform plain text into something special.
            </p>
            
            <p>
              What started as a weekend project quickly grew into something much bigger. We realized that millions of people 
              were facing the same challenge - they wanted their text to stand out on social media, in gaming profiles, 
              and in digital communications, but existing tools were either limited, complicated, or required downloads.
            </p>
            
            <p>
              Today, Font Generator serves over 2 million users monthly, from content creators and gamers to students and 
              professionals. We've grown from offering just a handful of font styles to providing 159+ unique text 
              transformations, all accessible instantly through your web browser.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          
          <div className="text-gray-700 space-y-4">
            <p>
              We believe that everyone should have access to creative text styling tools, regardless of their technical 
              background or budget. That's why Font Generator is completely free to use, with no hidden fees, 
              registration requirements, or download hassles.
            </p>
            
            <p>
              Our goal is simple: make text transformation as easy as typing. Whether you're a social media influencer 
              crafting the perfect post, a gamer creating a unique username, or a student making their notes more 
              visually appealing, we want to be your trusted companion.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🚀 Instant Results</h3>
              <p className="text-gray-700">
                No waiting, no processing time. See your text transformed in real-time as you type.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🌍 Universal Compatibility</h3>
              <p className="text-gray-700">
                Our fonts work everywhere - Instagram, Discord, Twitter, WhatsApp, and any platform that supports Unicode.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📱 Mobile First</h3>
              <p className="text-gray-700">
                Designed for the mobile generation. Works perfectly on phones, tablets, and desktops.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Privacy Focused</h3>
              <p className="text-gray-700">
                We don't store your text, track your usage, or require personal information. Your privacy matters.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Behind the Scenes</h2>
          
          <div className="text-gray-700 space-y-4">
            <p>
              Font Generator is maintained by a small but passionate team of developers and designers who understand 
              the importance of digital self-expression. We're constantly working to add new font styles, improve 
              performance, and ensure compatibility across all platforms.
            </p>
            
            <p>
              Every font style in our collection has been carefully tested across different devices and platforms. 
              We regularly update our library based on user feedback and emerging trends in digital typography.
            </p>
            
            <p>
              Have a suggestion for a new font style? Found a bug? We'd love to hear from you. Your feedback helps 
              us make Font Generator better for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
