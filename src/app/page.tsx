'use client';

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import TextPressure from '../components/TextPressure/TextPressure';
import ShinyText from "../components/ShinyText/ShinyText";
import DecryptedText from "../components/DecryptedText/DecryptedText";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import { db } from '../backend/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
const items = [
  {
    content: (
      <div className="text-center p-8">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamdwd3lpaW1kdGxsZ3kwZHZmaHRmZWh3OWM0ZHJ2NHNocXBkMjFrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duNowzaVje6Di3hnOu/giphy.gif"
          alt="Boilrplate"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    content: (
      <div className="text-center p-8">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamdwd3lpaW1kdGxsZ3kwZHZmaHRmZWh3OWM0ZHJ2NHNocXBkMjFrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duNowzaVje6Di3hnOu/giphy.gif"
          alt="Boilrplate"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    content: (
      <div className="text-center p-8">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamdwd3lpaW1kdGxsZ3kwZHZmaHRmZWh3OWM0ZHJ2NHNocXBkMjFrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duNowzaVje6Di3hnOu/giphy.gif"
          alt="Boilrplate"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
  {
    content: (
      <div className="text-center p-8">
        <Image
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamdwd3lpaW1kdGxsZ3kwZHZmaHRmZWh3OWM0ZHJ2NHNocXBkMjFrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/duNowzaVje6Di3hnOu/giphy.gif"
          alt="Boilrplate"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    ),
  },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleJoinWaitlist = async () => {
    if (!email) return;

    try {
      setLoading(true);
      await addDoc(collection(db, "waitlist"), {
        email: email,
        createdAt: serverTimestamp(),
      });
      await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSuccess(true);
      
      setEmail('');
    } catch (error) {
      console.error("Error joining waitlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full min-h-screen items-center justify-center px-4 md:px-8 py-8 gap-8">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-8">
      <Navbar />
        <TextPressure
          text="Boilrplate CLI (Beta)"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={28}
        />
            <div className="mt-4">
          <DecryptedText
            text=" Skip the stack. Start building."
            speed={50}
            maxIterations={30}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            className="text-lg md:text-xl"
          />
        </div>
<div className="m-4">
  <div className="flex items-center gap-2 bg-yellow-600 border border-yellow-500 text-yellow-200 px-4 py-2 rounded-lg shadow animate-pulse">
    <svg className="w-5 h-5 text-yellow-100" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
    <span className="font-semibold">New Release!</span>
    <span>Boilrplate CLI Beta 2.0.2 is out now.</span>
  </div>
  <p className="text-sm text-stone-500 mt-2">
    boilerplating is now about to AI! use --access BLRP-CLI-AP to use boilerplate in natural language.
  </p>
</div>
<div className="flex flex-col mt-3 mb-3 items-center justify-center">
  <video
    className="rounded-md shadow-lg max-w-full h-auto"

    autoPlay
    muted
    loop
    playsInline
    preload="none"
  >
    <source src="/blrp-beta-demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div className=' mb-6'>
  <p>boilrplate cli is now powered with <span className='font-bold'>Generative AI</span> to make boilerplating as easy as prompting a chatbot to generate your desired project structure.</p>
</div>
    
<div className="w-full ">
   
  <SpotlightCard className="custom-spotlight-card rounded-xl shadow-md py-6 px-6 bg-[#f9fafb] dark:bg-[#1f1f1f]">
    <div className="flex flex-col items-start gap-4">
          <div>
            <ShinyText text="Get early access" disabled={false} speed={3} className="text-xl text-gray-500" />
            <p className="text-sm text-stone-500 mt-1">
               Signup to get the free early access to Boilrplate CLI and be the first to try it out.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 bg-stone-100 focus:outline-none focus:ring-2 text-black placeholder-black"
              type="email"
              placeholder="Enter your email"
            />
            <button
              onClick={handleJoinWaitlist}
              disabled={loading}
              className="w-full sm:w-auto px-5 py-2 bg-stone-700 hover:bg-white hover:text-black hover:border hover:border-black text-white font-medium rounded-md transition-all duration-300"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          {success && (
            <p className="text-green-500 text-sm mt-2">
              Successfully joined! please check your inbox and spam folder for confirmation.
            </p>
          )}
        </div>
  </SpotlightCard>
</div>
<div className="flex flex-col mt-3 items-center justify-center">
     <p className="text-md mt-6 leading-relaxed">
          Say goodbye to boilerplate headaches. Boilrplate CLI (v2.0.2) crafts full-stack projects 
          based on your exact needs from frontend to backend, all ready to go. What if boilerplate was no longer your problem? Build what matters. backed by Generative AI models like deepseek, llama.
        </p>
        <br />
  <video
    className="rounded-md shadow-lg max-w-full h-auto"

    autoPlay
    muted
    loop
    playsInline
    preload="none"
  >
    <source src="/demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<div className="flex text-center justify-center flex-col items-center mt-6">
  <p className="text-sm text-stone-500 mt-4">
    By joining, you agree to <Link href="/terms" className="underline">Terms of Service</Link> & <Link className="underline" href={"/terms/privacy"}>Privacy Policy</Link>
  </p>
</div>
        <div className="mt-8">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Boilrplate. All rights reserved.  
          </p>
        </div>

      </div>
    </div>
  );
}
