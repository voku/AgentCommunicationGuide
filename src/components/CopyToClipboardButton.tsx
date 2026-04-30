import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface CopyToClipboardButtonProps {
  text: string;
  tooltip?: string;
  ariaLabel?: string;
  className?: string;
}

export function CopyToClipboardButton({
  text,
  tooltip = 'Copy',
  ariaLabel = 'Copy to clipboard',
  className = '',
}: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      // clipboard access denied or unavailable
    }
  };

  return (
    <Tooltip content={copied ? 'Copied' : tooltip} interactiveChild>
      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-all ${className}`}
        aria-label={ariaLabel}
      >
        {copied ? (
          <>
            <Check size={13} aria-hidden="true" />
            <span className="text-[11px] font-semibold">Copied</span>
          </>
        ) : (
          <Copy size={13} aria-hidden="true" />
        )}
      </button>
    </Tooltip>
  );
}
