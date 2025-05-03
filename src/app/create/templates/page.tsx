"use client";

import CopyCommand from "@/components/CopyCommand";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { JSX, useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

interface StackOption {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface StackCardProps {
  selected: boolean;
  onClick: () => void;
  option: StackOption;
}

const frontendOptions: StackOption[] = [
  { label: "Next.js", value: "nextjs", icon: <SiNextdotjs className="text-xl" /> },
  { label: "React", value: "react", icon: <SiReact className="text-xl" /> },
  { label: "Vue", value: "vue", icon: <SiVuedotjs className="text-xl" /> },
];

const backendOptions: StackOption[] = [
  { label: "Express", value: "express", icon: <SiExpress className="text-xl" /> },
  { label: "FastAPI", value: "fastapi", icon: <SiFastapi className="text-xl" /> },
  { label: "NestJS", value: "nestjs", icon: <SiNestjs className="text-xl" /> },
];

const databaseOptions: StackOption[] = [
  { label: "MongoDB", value: "mongodb", icon: <SiMongodb className="text-xl" /> },
  { label: "PostgreSQL", value: "postgresql", icon: <SiPostgresql className="text-xl" /> },
  { label: "MySQL", value: "mysql", icon: <SiMysql className="text-xl" /> },
];

function StackCard({ selected, onClick, option }: StackCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 border rounded-md px-4 py-2 cursor-pointer transition-all text-sm
        ${selected ? "bg-stone-800 text-white border-stone-800" : "bg-stone-100 dark:bg-stone-800 text-stone-600"}`}
    >
      {option.icon}
      <span>{option.label}</span>
      
    </div>
  );
}

export default function StackPicker(): JSX.Element {
  const [frontend, setFrontend] = useState<string | null>(null);
  const [backend, setBackend] = useState<string | null>(null);
  const [database, setDatabase] = useState<string | null>(null);
  const [flat, setFlat] = useState<boolean>(false);

  const [submitted, setSubmitted] = useState(false);
  const handleFrontendChange = (value: string) => {
    setFrontend(value);
    setSubmitted(false);
  };
  const handleSubmit = () => {
    if (!frontend || !backend) {
      alert("Please select both frontend and backend options.");
      return;
    }
    setSubmitted(true); 
    
  };

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <h1 className="text-3xl  mb-10 text-center">Pick Your Stack</h1>

      <div className="mb-6">
        <label className="block mb-2 text-stone-600 dark:text-stone-300">Frontend</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {frontendOptions.map((opt) => (
            <StackCard
              key={opt.value}
              option={opt}
              selected={frontend === opt.value}
              onClick={() => setFrontend(opt.value)}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-stone-600 dark:text-stone-300">Backend</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {backendOptions.map((opt) => (
            <StackCard
              key={opt.value}
              option={opt}
              selected={backend === opt.value}
              onClick={() => setBackend(opt.value)}
            />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <label className="block mb-2 text-stone-600 dark:text-stone-300">Database</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {databaseOptions.map((opt) => (
            <StackCard
              key={opt.value}
              option={opt}
              selected={database === opt.value}
              onClick={() => setDatabase(opt.value)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mb-2">


      <label className="flex items-center gap-2 mt-4">
  <input
    type="checkbox"
    checked={flat}
    onChange={(e) => setFlat(e.target.checked)}
  />
  <span className="text-sm text-stone-600 dark:text-stone-300">Create in current folder (--flat)</span>
</label>
</div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-stone-800 hover:bg-white hover:text-stone-800 hover:border hover:border-stone-800 text-white font-medium rounded-lg transition-all duration-300"
        >
          Create Stack
        </button>
      </div>
      {submitted && (
  <div className="text-center mt-6">
    <h2 className="text-lg  mb-2">Copy & Run this command in your terminal:</h2>

    <div className="bg-stone-100 dark:bg-stone-800  text-stone-700 dark:text-stone-300 p-2 rounded-lg font-mono flex flex-col sm:flex-row justify-center items-center gap-4">
   
      <CopyCommand command={`npx boilrplate ${frontend} ${backend} ${database ? `${database}` : ''}${flat ? ' --flat' : ''}`} />
    </div>
  </div>
)}
    <Footer />
    </main>
  );
}
