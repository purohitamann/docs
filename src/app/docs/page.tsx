'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SpotlightCard from '@/components/SpotlightCard/SpotlightCard';
import ShinyText from '@/components/ShinyText/ShinyText';
import CopyCommand from '@/components/CopyCommand';

export default function DocsPage() {
  const router = useRouter();

  function handleJoinWaitlist() {
    router.push('/'); // redirect to homepage or waitlist page
  }

  return (
    <main className="max-w-5xl mx-auto py-12 px-6 sm:px-8 text-stone-800 dark:text-stone-200">
      {/* Top Nav */}
      <div className="flex flex-wrap gap-4 mb-8 text-sm justify-center sm:justify-start font-medium text-stone-600 dark:text-stone-400">
        <Link href="/">Home</Link>
        <Link href="https://www.npmjs.com/package/boilrplate" target="_blank">npm registry</Link>
        <Link href="https://github.com/purohitamann/boilrplate" target="_blank">github</Link>
        <Link href="/docs">docs</Link>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl  mb-10 text-center">Documentation</h1>

      {/* What you can do today */}
      <section className="mb-16">
        <h2 className="text-2xl  mb-4">What you can do today</h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400">
          <li>Scaffold fullstack apps instantly using predefined templates.</li>
          <li>Select frameworks like Next.js, Express.js, MongoDB, TailwindCSS, and more.</li>
          <li>AI-powered project generation is currently in early access (join waitlist).</li>
          <li>Automatic personalization of `.env`, `package.json`, and `README.md` files.</li>
        </ul>
      </section>

      {/* How to use Boilrplate CLI */}
      <section className="mb-16">
        <h2 className="text-2xl mb-4">How to use Boilrplate CLI</h2>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-md p-6 space-y-6 text-sm font-mono text-stone-700 dark:text-stone-300">
          <div>
            <p className="mb-2">Install or use directly:</p>
            <CopyCommand command="npx boilrplate" />
          </div>

          <div>
            <p className="mb-2">Pick a template:</p>
            <CopyCommand command="npx boilrplate" />
          </div>

          <div>
            <p className="mb-2">(Coming soon) Use natural language with access code:</p>
            <CopyCommand command='npx boilrplate "I want a Next.js + MongoDB app" --access YOUR-ACCESS-CODE' />
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mb-16">
        <h2 className="text-2xl  mb-4">Coming Soon</h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400">
          <li>Full AI-powered project scaffolding based on natural language prompts.</li>
          <li>Optional personal project analytics (privacy-first, opt-in only).</li>
          <li>Themeable starter templates (dark mode, corporate UI, e-commerce templates).</li>
          <li>Plugin integrations for auth, payments, CMS, and more.</li>
        </ul>
      </section>

      {/* Waitlist Card */}
      <section className="flex justify-center items-center mt-24 px-4">
        <div className="w-full max-w-lg">
          <SpotlightCard className="rounded-2xl shadow-md p-8 bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col justify-center items-center text-center gap-6">
              
              {/* Heading */}
              <div>
                <ShinyText
                  text="Get Early Access"
                  disabled={false}
                  speed={3}
                  className="text-2xl text-stone-600"
                />
                <p className="text-sm text-stone-400 mt-2">
                  Be first to know when AI features launch.
                </p>
              </div>

              {/* Button */}
              <button
                onClick={handleJoinWaitlist}
                className="px-6 py-2 bg-stone-800 hover:bg-white hover:text-stone-800 hover:border hover:border-stone-800 text-white font-medium rounded-lg transition-all duration-300"
              >
                Join Waitlist
              </button>

            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-stone-400 py-10">
        © {new Date().getFullYear()} Boilrplate. <Link href="/terms" className="underline">Terms of Service</Link>
      </footer>

    </main>
  );
}
