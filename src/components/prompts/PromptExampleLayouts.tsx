import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { CopyToClipboardButton } from '../CopyToClipboardButton';

const TONE_STYLES = {
  red: {
    header: 'border-red-200 bg-red-50 text-red-700',
    body: 'border-red-100 bg-red-50 text-red-900',
    icon: XCircle,
  },
  amber: {
    header: 'border-amber-200 bg-amber-50 text-amber-700',
    body: 'border-amber-100 bg-amber-50 text-amber-900',
    icon: AlertTriangle,
  },
  emerald: {
    header: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    body: 'border-emerald-100 bg-emerald-50 text-emerald-900',
    icon: CheckCircle,
  },
  blue: {
    header: 'border-blue-200 bg-blue-50 text-blue-700',
    body: 'border-blue-100 bg-blue-50 text-blue-900',
    icon: CheckCircle,
  },
} as const;

type Tone = keyof typeof TONE_STYLES;

interface PromptExampleEntry {
  label: string;
  content: string;
  tone: Tone;
}

interface PromptExampleStackProps {
  title?: string;
  intro?: string;
  entries: PromptExampleEntry[];
  note?: string;
  noteTitle?: string;
}

export function PromptExampleStack({
  title,
  intro,
  entries,
  note,
  noteTitle = 'Why this works',
}: PromptExampleStackProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {(title || intro) && (
        <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
          {title && <h3 className="text-lg font-bold text-gray-900">{title}</h3>}
          {intro && <p className="mt-2 text-sm leading-relaxed text-gray-600">{intro}</p>}
        </div>
      )}

      <div className="space-y-4 p-5 sm:p-6">
        {entries.map(({ label, content, tone }) => {
          const { header, body, icon: Icon } = TONE_STYLES[tone];

          return (
            <div key={`${label}-${content}`} className="grid gap-3 md:grid-cols-[92px_1fr] md:items-start">
              <div className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-bold uppercase tracking-wider ${header}`}>
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{label}</span>
              </div>
              <div className="relative group/entry">
                <pre className={`overflow-x-auto whitespace-pre-wrap rounded-xl border px-4 py-3 pr-24 font-mono text-sm leading-relaxed ${body}`}>
                  {content}
                </pre>
                <div className="absolute top-2 right-2">
                  <CopyToClipboardButton
                    text={content}
                    tooltip="Copy prompt"
                    ariaLabel="Copy prompt"
                    className="text-current opacity-60 hover:bg-black/10 hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {note && (
        <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-500">{noteTitle}</span>
          <p className="text-sm leading-relaxed text-gray-700">{note}</p>
        </div>
      )}
    </div>
  );
}

interface PromptPatternCardProps {
  title: string;
  best: string;
  why: string;
  bad?: string;
}

export function PromptPatternCard({ title, best, why, bad }: PromptPatternCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="mb-4 text-lg font-bold text-gray-900">{title}</h3>
      <div className="space-y-3">
        {bad && (
          <div>
            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-red-500">Bad</span>
            <div className="relative group/bad">
              <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-red-100 bg-red-50 px-4 py-3 pr-24 font-mono text-sm leading-relaxed text-red-900">
                {bad}
              </pre>
              <div className="absolute top-2 right-2 text-red-900">
                <CopyToClipboardButton
                  text={bad}
                  tooltip="Copy prompt"
                  ariaLabel="Copy prompt"
                  className="opacity-60 hover:bg-black/10 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        )}
        <div>
          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-blue-600">Best</span>
          <div className="relative group/best">
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 pr-24 font-mono text-sm leading-relaxed text-blue-900">
              {best}
            </pre>
            <div className="absolute top-2 right-2 text-blue-900">
              <CopyToClipboardButton
                text={best}
                tooltip="Copy prompt"
                ariaLabel="Copy prompt"
                className="opacity-60 hover:bg-black/10 hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 border-l-2 border-gray-300 pl-3 text-sm leading-relaxed text-gray-600">{why}</p>
    </div>
  );
}
