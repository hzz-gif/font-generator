import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Font Generator Pro Usage Guidelines',
  description: 'Font Generator Pro terms of service. Free to use for personal and commercial purposes. Learn about acceptable use and our service guidelines.',
  openGraph: {
    title: 'Terms of Service - Font Generator Pro Usage Guidelines',
    description: 'Font Generator Pro terms of service. Free to use for personal and commercial purposes. Learn about acceptable use and our service guidelines.',
    url: 'https://font-generator.pro/terms/',
  },
  alternates: {
    canonical: 'https://font-generator.pro/terms/',
  },
};

export default function Terms() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">Last updated: December 2024</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Font Generator</h2>
            <p className="text-gray-700 leading-relaxed">
              By using Font Generator (the "Service"), you agree to these terms. Please read them carefully. 
              If you don't agree with any part of these terms, please don't use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Using Our Service</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Font Generator is a free web-based tool that converts regular text into various stylized Unicode fonts. 
                You can use our service for personal and commercial purposes without restriction.
              </p>
              <p>
                <strong>What you can do:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use generated fonts in social media posts, profiles, and content</li>
                <li>Include styled text in commercial projects and marketing materials</li>
                <li>Share and distribute text created with our tool</li>
                <li>Use the service for educational and personal projects</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                While we want you to be creative with Font Generator, please use it responsibly:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Don't use the service for illegal activities or harmful content</li>
                <li>Don't attempt to reverse engineer or copy our font conversion algorithms</li>
                <li>Don't overload our servers with automated requests or bots</li>
                <li>Respect others when using styled text in public forums and social media</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                The Font Generator website, including its design, code, and functionality, is owned by us and 
                protected by copyright laws. However, the Unicode characters and fonts we generate are part 
                of international standards and are freely usable.
              </p>
              <p>
                <strong>Your content:</strong> You retain all rights to the text you input into Font Generator. 
                We don't claim ownership of your content or store it on our servers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We strive to keep Font Generator available 24/7, but we can't guarantee uninterrupted service. 
                We may need to perform maintenance, updates, or deal with technical issues that temporarily 
                affect availability.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the service at any time, 
                though we'll do our best to provide advance notice for major changes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Font Generator is provided "as is" without warranties of any kind. While we test our fonts 
                across different platforms, we can't guarantee they'll display perfectly everywhere due to 
                varying Unicode support across devices and applications.
              </p>
              <p>
                We're not responsible for any issues that may arise from using styled text, including but 
                not limited to display problems, account restrictions on third-party platforms, or 
                compatibility issues.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. We don't store the text you convert, track your personal 
              information, or require registration. For more details, please see our 
              <Link href="/privacy" className="text-purple-600 hover:text-purple-700 underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these terms occasionally to reflect changes in our service or legal requirements. 
              When we do, we'll update the "Last updated" date at the top of this page. Continued use of 
              Font Generator after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Questions about these terms? We're here to help. You can reach us through our 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
                contact page
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
