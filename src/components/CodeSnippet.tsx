import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { Tooltip } from './Tooltip';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export function CodeSnippet({ code, language = 'text' }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{language}</span>
        <Tooltip content="Copy code snippet" interactiveChild>
          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-400 hover:text-gray-100 hover:bg-gray-700 rounded-md transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={14} className="text-green-400" aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
          </button>
        </Tooltip>
      </div>
      <div className="p-3 sm:p-4 overflow-x-auto">
        <pre className="text-xs sm:text-sm font-mono text-gray-200 whitespace-pre-wrap break-words">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
