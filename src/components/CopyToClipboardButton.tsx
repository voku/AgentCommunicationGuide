import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Tooltip } from './Tooltip';

const COPY_FEEDBACK_DURATION_MS = 1500;

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
  const timeoutRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      setCopied(false);
      frameRef.current = window.requestAnimationFrame(() => {
        setCopied(true);
        timeoutRef.current = window.setTimeout(() => {
          setCopied(false);
          timeoutRef.current = 0;
        }, COPY_FEEDBACK_DURATION_MS);
      });
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
