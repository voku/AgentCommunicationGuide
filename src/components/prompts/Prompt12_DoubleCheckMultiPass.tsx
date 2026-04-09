import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt12_DoubleCheckMultiPass() {
  return (
    <div id="prompt-12" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        12. Double-Check and Multi-Pass Prompts
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        A second pass with a different goal is not the same as doing the task twice. It is a separate mental mode:
        not generating, but validating.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Double-check prompt"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content: 'Check this.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Double check the implementation against the original requirements.\nList every place where the code diverges from the spec, even if the divergence seems minor.',
            },
          ]}
          note="Double-check prompts force a second pass with a different goal: not generating, but validating against what was asked. The model shifts from author to auditor."
        />

        <PromptExampleStack
          title="Double-check for gaps and risks"
          entries={[
            {
              label: 'Prompt',
              tone: 'blue',
              content:
                'Double check the diff and list:\n- anything unnecessary\n- anything risky\n- any missing edge cases or broken assumptions',
            },
          ]}
          note="Attaching double-check to a specific artifact (diff, PR, function) keeps the scope tight and the output actionable."
        />

        <PromptExampleStack
          title="Multi-pass prompt"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content:
                'Implement the fix, make sure it is correct, and simplify it.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Pass 1: Implement the fix.\nPass 2: Run a second pass focused only on correctness — missing edge cases, broken assumptions, untested paths.\nPass 3: Run a third pass focused only on simplification and unnecessary code.',
            },
          ]}
          note="Multi-pass prompts create separate mental modes. One giant instruction gets one blended pass. Three named passes get three different lenses: build, verify, simplify."
        />
      </div>

      <div className="mt-8 rounded-r-2xl border-l-4 border-violet-500 bg-violet-50 p-6 shadow-sm sm:p-8">
        <p className="text-lg font-semibold text-violet-800">
          The sequence matters. Correctness before simplification. Simplification never before correctness.
        </p>
      </div>
    </div>
  );
}
