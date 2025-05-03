'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6 text-stone-700 dark:text-stone-300">
      <Navbar />

      <h1 className="text-3xl mt-8 mb-8 text-center">Privacy Policy</h1>

      <p className="mb-4">Effective Date: April 25, 2025</p>
      <p className="mb-6">
        Boilrplate ("we", "us", or "our") provides a command-line interface (CLI) and website (
        <a href="https://boilrplate.com" className="underline text-blue-500">https://boilrplate.com</a>) to help developers scaffold fullstack projects.
      </p>

      <section className="mb-8">
        <h2 className="text-xl  mb-2">1. Information We Collect</h2>
        <p className="mb-2">We do <strong>not</strong> collect personal data through the CLI tool. However, we may collect limited technical and usage data to improve the product:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Command usage (e.g., which templates are used)</li>
          <li>Flags or options passed (e.g., <code>--frontend nextjs</code>)</li>
          <li>Timestamp and approximate geolocation (based on IP)</li>
          <li>Version of the CLI or Node.js runtime</li>
        </ul>
        <p className="mb-2">If you use our website and opt into early access features, we may collect:</p>
        <ul className="list-disc list-inside">
          <li>Your name and email (only when submitted)</li>
          <li>Waitlist or signup timestamps</li>
          <li>Interaction data (e.g., page views, clicks)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl mb-2">2. How We Use the Data</h2>
        <ul className="list-disc list-inside">
          <li>Improve the performance and UX of the CLI tool</li>
          <li>Analyze which stacks are most popular</li>
          <li>Track adoption metrics</li>
          <li>Contact users who join the waitlist (optional)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl  mb-2">3. Third-Party Services</h2>
        <p className="mb-2">We may use third-party analytics tools like:</p>
        <ul className="list-disc list-inside">
          <li>PostHog or Amplitude for usage events</li>
          <li>Google Analytics (website only)</li>
          <li>Vercel Analytics (if deployed with Vercel)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl mb-2">4. Your Rights</h2>
        <p>
          You can request deletion of any stored data submitted via our forms. For CLI usage, we store no personal data unless explicitly opted in.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl  mb-2">5. Updates</h2>
        <p>
          We may update this Privacy Policy as our service evolves. Any changes will be posted on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl  mb-2">6. Contact</h2>
        <p className="mb-2">If you have any questions or concerns, please reach out to us:</p>
        <ul className="list-disc list-inside">
          <li>Email: <a href="mailto:purohitaman@icloud.com" className="underline text-blue-500">purohitaman@icloud.com</a></li>
          <li>Website: <a href="https://www.heyboilrplate.com" className="underline text-blue-500">heyboilrplate.com</a></li>
        </ul>
      </section>

      <footer className="text-center text-xs text-stone-400 py-6">
        © {new Date().getFullYear()} Boilrplate. <Link href="/terms" className="underline">Terms of Service</Link>
      </footer>
    </main>
  );
}
