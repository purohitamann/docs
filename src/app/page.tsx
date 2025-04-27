'use client';

import Image from "next/image";
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import TextPressure from '../components/TextPressure/TextPressure';
import ShinyText from "../components/ShinyText/ShinyText";
import DecryptedText from "../components/DecryptedText/DecryptedText";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
const items = [
  {
    content: (
      <div className="text-center p-8 font-mono">
        <p className="text-2xl font-semibold">Automated project scaffolding</p>
      </div>
    ),
  },
  {
    content: (
      <div className="text-center p-8 font-mono">
        <p className="text-2xl font-semibold">Personalized stacks for Frontend, Backend, Fullstack</p>
      </div>
    ),
  },
  {
    content: (
      <div className="text-center p-8 font-mono">
        <p className="text-2xl font-semibold">Get started in seconds, not hours!</p>
      </div>
    ),
  },
  {
    content: (
      <div className="text-center p-8 font-mono">
        <h2 className="text-3xl font-bold mb-4">Join the Waitlist Today!</h2>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center px-8">
      {/* Left Side - Infinite Scroll */}
      <div className="w-1/2 flex justify-center items-center">
        <div style={{ height: '600px', position: 'relative', width: '100%' }}>
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
      </div>

      {/* Right Side - Welcome Text */}
      <div className="w-1/2 flex flex-col justify-center items-start p-8 font-sans">
        {/* Main Title */}
        <TextPressure
          text="Boilrplate CLI"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />

        {/* Small Decrypted Slogan */}
        <div className="mt-4">
          <DecryptedText
            text="Automate your setup. Code faster."
            speed={50}
            maxIterations={30}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            className="text-xl font-semibold"
          />
        </div>

        {/* Description */}
        <p className="text-md mt-6 max-w-md leading-relaxed">
          Say goodbye to boilerplate headaches. Boilrplate CLI crafts full-stack projects 
          based on your exact needs — from frontend to backend, all ready to go.  
        </p>
        <div className="mt-4 flex items-left justify-center">
      <SpotlightCard className="custom-spotlight-card" >

   <div>
   <ShinyText text="Be the first to know when its live!" disabled={false} speed={3} className="text-xl" />
   <br />
        <button className="mt-4 bg-amber-500 px-4 py-2 rounded-3xl">
        <p  className="text-xl font-sans"  ><a href="/join-waitlist">Join the Waitlist</a></p>
        </button>
       
   </div>
         

</SpotlightCard>
      </div>

        {/* Call To Action */}
  
      </div>


    </div>
  );
}
