import { CopyToClipboardButton } from './CopyToClipboardButton';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export function CodeSnippet({ code, language = 'text' }: CodeSnippetProps) {
  return (
    <div className="relative group my-6 rounded-xl overflow-hidden border border-gray-800 bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{language}</span>
        <CopyToClipboardButton
          text={code}
          tooltip="Copy code snippet"
          ariaLabel="Copy code"
          className="text-gray-400 hover:bg-gray-700 hover:text-gray-100"
        />
      </div>
      <div className="p-3 sm:p-4 overflow-x-auto">
        <pre className="text-xs sm:text-sm font-mono text-gray-200 whitespace-pre-wrap break-words">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
