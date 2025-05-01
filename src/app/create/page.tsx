'use client';

import CopyCommand from '@/components/CopyCommand';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Create = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between  text-stone-800 dark:text-stone-200">
    

      <main className="flex flex-col items-center justify-center px-4 py-12 text-center">
      <Navbar />
        <h1 className="text-3xl sm:text-4xl font-semibold mt-10 mb-3">
          Get Started with Boilrplate
        </h1>
        <p className="text-base sm:text-lg mb-8 max-w-xl">
          Create your project with ease. Choose the stack you want and get started in seconds.
        </p>

        <a href="/create/templates">
          <button className="px-6 py-2 bg-stone-800 hover:bg-white hover:text-stone-800 hover:border hover:border-stone-800 text-white font-medium rounded-md transition">
            Create Project
          </button>
        </a>

        <div className="mt-8 w-full max-w-md">
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-2">
            Prefer using the CLI? Run the command below:
          </p>
          <div className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 p-3 rounded-md font-mono text-sm flex items-center justify-center">
            <CopyCommand command="npx boilrplate" />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Need help?{' '}
            <a
              href="/docs"
              className="text-stone-800 dark:text-stone-200 hover:underline"
            >
              View Documentation
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Create;
