import { CopyToClipboardButton } from './CopyToClipboardButton';

const DEFAULT_PROMPT_BLOCK_CLASSNAME =
  'overflow-hidden rounded-lg bg-gray-900 text-gray-100';

const DEFAULT_PROMPT_TEXT_CLASSNAME =
  'overflow-x-auto whitespace-pre-wrap px-4 pb-4 pt-1 font-mono text-sm leading-relaxed';

interface CopyablePromptBlockProps {
  text: string;
  className?: string;
  textClassName?: string;
}

export function CopyablePromptBlock({
  text,
  className = DEFAULT_PROMPT_BLOCK_CLASSNAME,
  textClassName = DEFAULT_PROMPT_TEXT_CLASSNAME,
}: CopyablePromptBlockProps) {
  return (
    <div className={className}>
      <div className="flex justify-end px-2 pt-2">
        <CopyToClipboardButton
          text={text}
          tooltip="Copy prompt"
          ariaLabel="Copy prompt"
          className="bg-black/25 text-gray-100 hover:bg-black/40"
        />
      </div>
      <pre className={textClassName}>{text}</pre>
    </div>
  );
}
