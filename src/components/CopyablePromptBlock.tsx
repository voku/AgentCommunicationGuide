import { CopyToClipboardButton } from './CopyToClipboardButton';

interface CopyablePromptBlockProps {
  text: string;
  className?: string;
}

export function CopyablePromptBlock({
  text,
  className = 'overflow-x-auto whitespace-pre-wrap rounded-lg bg-gray-900 p-4 pr-24 font-mono text-sm leading-relaxed text-gray-100',
}: CopyablePromptBlockProps) {
  return (
    <div className="relative">
      <pre className={className}>{text}</pre>
      <div className="absolute right-2 top-2">
        <CopyToClipboardButton
          text={text}
          tooltip="Copy prompt"
          ariaLabel="Copy prompt"
          className="bg-black/25 text-gray-100 hover:bg-black/40"
        />
      </div>
    </div>
  );
}
