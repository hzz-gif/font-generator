import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Font Generator Pro Data Protection',
  description: 'Font Generator Pro privacy policy. We collect minimal data, never store your text, and prioritize your privacy. Learn about our data practices.',
  openGraph: {
    title: 'Privacy Policy - Font Generator Pro Data Protection',
    description: 'Font Generator Pro privacy policy. We collect minimal data, never store your text, and prioritize your privacy. Learn about our data practices.',
    url: 'https://font-generator.pro/privacy/',
  },
  alternates: {
    canonical: 'https://font-generator.pro/privacy/',
  },
};

export default function Privacy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: December 2024</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Matters</h2>
            <p className="text-gray-700 leading-relaxed">
              At Font Generator, we believe privacy is a fundamental right. This policy explains how we handle 
              your information when you use our service. The short version: we collect as little data as possible 
              and never sell your information to anyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Don't Collect</h2>
            <div className="text-gray-700 space-y-4">
              <p>Let's start with what we DON'T do:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Your text content:</strong> We don't store, log, or save any text you type into Font Generator</li>
                <li><strong>Personal accounts:</strong> No registration required means no personal data collection</li>
                <li><strong>Email addresses:</strong> We don't ask for or store email addresses</li>
                <li><strong>Location tracking:</strong> We don't track your physical location</li>
                <li><strong>Cross-site tracking:</strong> We don't follow you around the internet</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do Collect</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                To keep Font Generator running smoothly and improve our service, we collect minimal, 
                non-personal information:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Basic Usage Analytics</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Page views and popular font categories (to know which features to improve)</li>
                  <li>Browser type and device info (to ensure compatibility)</li>
                  <li>General geographic region (country level only, for server optimization)</li>
                  <li>Referral sources (to understand how people find us)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Information</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>IP addresses (temporarily, for security and spam prevention)</li>
                  <li>Error logs (to fix bugs and improve performance)</li>
                  <li>Load times and performance metrics (to keep the site fast)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
            <div className="text-gray-700 space-y-4">
              <p>The limited data we collect is used solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep the service running and secure</li>
                <li>Understand which font styles are most popular</li>
                <li>Identify and fix technical issues</li>
                <li>Improve loading speeds and user experience</li>
                <li>Prevent abuse and spam</li>
              </ul>
              <p>
                <strong>We never:</strong> Sell data, share personal information with advertisers, 
                or use your information for marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Local Storage</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Font Generator uses minimal cookies and local storage to enhance your experience:
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-sm">
                  These remember your font category preferences and ensure the site works properly. 
                  They don't track you and are automatically deleted when you close your browser.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-sm">
                  We use privacy-focused analytics to understand how people use Font Generator. 
                  These don't identify you personally and help us improve the service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Font Generator uses a few trusted third-party services to operate:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hosting provider:</strong> For reliable website hosting and global content delivery</li>
                <li><strong>Analytics service:</strong> Privacy-focused analytics that don't track individuals</li>
                <li><strong>Security services:</strong> To protect against spam and malicious attacks</li>
              </ul>
              <p>
                All third-party services we use are carefully selected for their privacy practices and 
                commitment to data protection.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <div className="text-gray-700 space-y-4">
              <p>Since we collect minimal data, there's not much to manage, but you have these rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Ask what data we have about you (spoiler: very little)</li>
                <li><strong>Deletion:</strong> Request deletion of any data we might have</li>
                <li><strong>Opt-out:</strong> Disable analytics cookies in your browser settings</li>
                <li><strong>Questions:</strong> Contact us about any privacy concerns</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take security seriously. Font Generator uses industry-standard encryption, secure hosting, 
              and regular security updates. Since we don't store personal data, there's minimal risk to your privacy 
              even in the unlikely event of a security incident.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Font Generator is safe for users of all ages. We don't knowingly collect personal information 
              from children under 13, and our minimal data collection practices mean there's little privacy 
              risk for younger users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              If we ever need to update this privacy policy, we'll post the changes here and update the 
              "Last updated" date. We'll never make changes that reduce your privacy protections without 
              clear notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-700 leading-relaxed">
              Privacy questions or concerns? We're happy to help. Reach out through our 
              <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">
                contact page
              </Link> and we'll get back to you promptly.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
