import { useState } from 'react';

export default function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); 
  }

  return (
    <div className="relative bg-stone-100 dark:bg-stone-800 p-4 rounded-md flex items-center justify-between overflow-x-auto">
      <code className="text-sm text-stone-700 dark:text-stone-300 font-mono">{command}</code>
      <button
        onClick={handleCopy}
        className="ml-4 text-xs bg-stone-700 text-white px-2 py-1 rounded hover:bg-stone-600 transition"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}
