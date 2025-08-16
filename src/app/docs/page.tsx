'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SpotlightCard from '@/components/SpotlightCard/SpotlightCard';
import ShinyText from '@/components/ShinyText/ShinyText';
import CopyCommand from '@/components/CopyCommand';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DocsPage() {
  const router = useRouter();

  function handleJoinWaitlist() {
    router.push('/'); // redirect to homepage or waitlist page
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-6 sm:px-8 text-stone-800 dark:text-stone-200">
      {/* Top Nav */}
<Navbar />

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
      <section className="mb-16 relative">
        {/* Highlight effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-yellow-100 via-stone-200 to-stone-300 opacity-30 rounded-lg blur-md"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl mb-4 font-bold  flex items-center gap-2">
        <span className="animate-pulse">✨</span>
        What's New?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-stone-700 dark:text-stone-300">
        <li>Full AI-powered project scaffolding based on natural language prompts using Generative AI</li>
        <li>Enhanced template customization options</li>
        <li>Backed by LLM models like DeepSeek and Llama</li>
          </ul>
        </div>
      </section>

      {/* How to use Boilrplate CLI */}
      <section className="mb-16">
        <h2 className="text-2xl mb-4">How to use Boilrplate CLI</h2>

        <p className="mb-4">
          Boilrplate CLI is a command-line tool that helps you quickly set up your project with the
          stack of your choice. You can use it to create a new project or add new features to an
          existing one.
        </p>

        <div className="bg-stone-100 dark:bg-stone-800 rounded-md p-6 space-y-6 text-sm font-mono text-stone-700 dark:text-stone-300">
          <div>
            <p className="mb-2">Install or use directly:</p>
            <CopyCommand command="npx boilrplate" />
          </div>

          <div>
            <p className="mb-2">use the framework picker to simply copy then paste on your terminal <Link href="/create/templates">
              <span className="text-gray-400  underline">
                Create Project
              </span>
            </Link></p>
          
          </div>
          <div>
            <p> </p>
                  <CopyCommand command={`npx boilrplate  [frontend] [backend] [database] --flat`} />
            
          </div>
          <div>
            <p className="mb-2">(NEW!) Use natural language with access code:</p>
            <CopyCommand command='npx boilrplate "I want a Next.js + MongoDB app" --access YOUR-ACCESS-CODE' />
          </div>
      
        </div>
      </section>

      {/* Coming Soon */}
     
   {/* <section className="mb-16">
        <h2 className="text-2xl  mb-4">What's Coming?</h2>
        <ul className="list-disc list-inside space-y-2 text-stone-600 dark:text-stone-400">
    <li>Optional personal project analytics (privacy-first, opt-in only).</li>
          <li>Themeable starter templates (dark mode, corporate UI, e-commerce templates).</li>
          <li>Plugin integrations for auth, payments, CMS, and more.</li>
        </ul>
      </section> */}
        

      {/* Waitlist Card */}
      <section className="flex justify-center items-center mt-24 px-4">
        <div className="w-full max-w-lg">
          <SpotlightCard className="rounded-2xl shadow-md p-8 bg-stone-100 dark:bg-stone-900">
            <div className="flex flex-col justify-center items-center text-center gap-6">
              
              {/* Heading */}
              <div>
                <ShinyText
                  text="Get Free Access"
                  disabled={false}
                  speed={3}
                  className="text-2xl text-stone-600"
                />
                <p className="text-sm text-stone-400 mt-2">
                  Signup to get the free early access to Boilrplate CLI and be the first to try it out.
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
  <Footer />
    </main>
  );
}
