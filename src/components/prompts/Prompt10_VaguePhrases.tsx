import { PromptExampleStack } from './PromptExampleLayouts';

const VAGUE_WORDS = [
  'maybe',
  'possibly',
  'try to',
  'consider',
  'should probably',
  'generally',
  'perhaps',
  'kind of',
  'sort of',
  'if possible',
  'as needed',
  'approximately',
  'I think',
  'it might be good to',
];

export function Prompt10_VaguePhrases() {
  return (
    <div id="prompt-10" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        10. Words That Quietly Break Your Prompts
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Hedge words do not add nuance. They give the model permission to do nothing — and narrate it confidently.
      </p>

      <PromptExampleStack
        title="Vague prompt vs. operational prompt"
        entries={[
          {
            label: 'Bad',
            tone: 'red',
            content:
              'Maybe try to improve this code. Perhaps consider cleaning it up a bit if possible.',
          },
          {
            label: 'Better',
            tone: 'amber',
            content: 'Improve this code.',
          },
          {
            label: 'Best',
            tone: 'blue',
            content:
              'Remove the three duplicated parsing steps in this module.\nKeep the public API unchanged.\nDo not touch unrelated files.\nRun the test suite and paste the output.',
          },
        ]}
        note="Every hedge word weakens a constraint. 'Try to' means the model can skip it. 'Maybe' means the model can ignore it. 'If possible' means the model will skip the hard part first."
      />

      <div className="mt-8 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
        <div className="border-b border-red-200 bg-red-50 px-5 py-4">
          <h3 className="font-bold text-red-800">Words that weaken every prompt they appear in</h3>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {VAGUE_WORDS.map((word) => (
              <span
                key={word}
                className="rounded-full border border-red-200 bg-red-50 px-3 py-1 font-mono text-xs text-red-800"
              >
                {word}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Replace every one of these with a concrete action, a measurable outcome, or an explicit constraint. If you
            cannot replace it, the requirement itself is not yet clear enough to prompt.
          </p>
        </div>
      </div>

      <PromptExampleStack
        title="Stopping condition — vague vs. operational"
        entries={[
          {
            label: 'Bad',
            tone: 'red',
            content:
              'You might want to stop if something seems wrong, maybe after a few retries or so.',
          },
          {
            label: 'Best',
            tone: 'blue',
            content:
              'If the build fails three times in a row, stop.\nDo not attempt a fourth fix.\nSummarize the root cause and list what is still unknown.',
          },
        ]}
        note="'Maybe' stopping conditions are not stopping conditions. Write them as exact thresholds with exact actions."
      />
    </div>
  );
}
