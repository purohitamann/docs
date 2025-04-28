'use client';

import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import TextPressure from '../components/TextPressure/TextPressure';
import ShinyText from "../components/ShinyText/ShinyText";
import DecryptedText from "../components/DecryptedText/DecryptedText";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import { db } from '../../backend/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { sendEmail } from '../../backend/mail';
import { useEffect } from 'react';
import { send } from 'process';
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
    <div className="flex flex-col md:flex-row h-full min-h-screen items-center justify-center px-4 md:px-8 py-8 gap-8">
      {/* Left Side - Infinite Scroll */}
      {/* <div className="w-full md:w-1/2 flex justify-center items-center">
        <div style={{ height: '400px', position: 'relative', width: '100%' }} className="max-w-md mx-auto">
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.05}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </div> */}

      {/* Right Side - Welcome Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 md:p-8">
        {/* Main Title */}
        <TextPressure
          text="Boilrplate"
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

        {/* Small Decrypted Slogan */}
        <div className="mt-4">
          <DecryptedText
            text=" Skip the stack. Start building."
            speed={50}
            maxIterations={30}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            className="text-lg md:text-xl"
          />
        </div>

        {/* Description */}
        <p className="text-md mt-6 max-w-md leading-relaxed">
          Say goodbye to boilerplate headaches. Boilrplate CLI crafts full-stack projects 
          based on your exact needs from frontend to backend, all ready to go. What if boilerplate was no longer your problem? Build what matters. 

        </p>
        <br />


        {/* Spotlight Card with CTA */}
        {/* Spotlight Card with CTA */}
<div className="w-full max-w-md">
  <SpotlightCard className="custom-spotlight-card rounded-xl shadow-md py-6 px-6 bg-[#f9fafb] dark:bg-[#1f1f1f]">
  
    <div className="flex flex-col items-start gap-4">
          
          {/* Title */}
          <div>
            <ShinyText text="Get early access" disabled={false} speed={3} className="text-xl text-gray-500" />
            <p className="text-sm text-stone-500 mt-1">
              Ready to skip the setup and start building?
            </p>
          </div>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500 text-black placeholder-black"
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

          {/* Success Message */}
          {success && (
            <p className="text-green-500 text-sm mt-2">
              Successfully joined! please check your inbox and spam folder for confirmation.
            </p>
          )}
        </div>
  </SpotlightCard>
</div>



      </div>
    </div>
  );
}
