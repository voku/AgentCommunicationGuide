import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt14_VerifyWithTests() {
  return (
    <div id="prompt-14" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        14. Verify with Tests — Don't Just Make Them Pass
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Tests are a verification tool, not a target. Writing tests that pass without validating real behavior is worse
        than having no tests at all — it creates false confidence.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Use tests to validate, not to satisfy"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content:
                'Write tests for this code and make sure they all pass.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Verify your changes with tests and correct the code if necessary;\ndon\'t just write tests to make them pass, but use them for validation.',
            },
          ]}
          note="The bad prompt lets the agent retrofit tests to match whatever the code does. The best prompt makes clear: tests are witnesses, not accomplices. If a test fails, fix the code — not the test."
        />

        <PromptExampleStack
          title="Correct the code, not the test"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content:
                'The tests are failing. Update them so they pass.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'The tests are failing. Treat each failure as a signal.\nDo not modify the tests to make them pass — investigate why the code is wrong and fix it.\nOnly update a test if the original requirement itself has changed.',
            },
          ]}
          note="Changing tests to silence failures is a common agent failure mode. This prompt locks the test as the source of truth and forces the agent to fix the actual problem."
        />
      </div>

      <div className="mt-8 rounded-r-2xl border-l-4 border-violet-500 bg-violet-50 p-5 text-sm text-violet-900 shadow-sm sm:p-6">
        <strong className="text-violet-950">→ See also:</strong> Double-check and multi-pass prompts that separate the
        build pass from the verification pass are covered in{' '}
        <strong>section 11 (Double-Check and Multi-Pass Prompts)</strong> above.
      </div>
    </div>
  );
}
