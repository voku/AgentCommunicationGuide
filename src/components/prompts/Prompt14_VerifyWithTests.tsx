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
          title="Start planned feature work with TDD"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'Add the feature as planned.\nRun tests when you are done.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Add the feature as planned, but start with a TDD approach.\nBegin with a failing test, then implement only enough code to pass it, and keep iterating until the task meets its acceptance criteria or definition of done.',
            },
          ]}
          note="This prompt does not just ask for tests at the end. It makes the test suite drive the implementation order, which reduces speculative code and forces progress to stay measurable."
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

        <PromptExampleStack
          title="Validate test logic end-to-end"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content:
                'Check that all tests pass and the coverage looks good.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Do a final validation using your own reasoning.\nFor each file under test, read its return type and output contract, then verify the tests exercise every branch.\nFor example, if a hook returns `data: User | null`, confirm one test covers the null case and another covers a valid User with all expected fields.\nConfirm your own reasoning after each file, then move on — run in auto-agent mode until every output contract is validated or a gap is flagged.',
            },
          ]}
          note="This prompt makes the agent act as a test reviewer, not just a test runner. It forces branch-by-branch reasoning against the actual return types and output contracts, catching tests that pass but never truly exercise the code paths they claim to cover."
        />

        <PromptExampleStack
          title="Add tests that hunt for regressions"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'Add unit tests for the existing code.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'The code already exists. Add unit tests with the mindset that good tests should discover regressions in the codebase.\nKeep adding tests until you expose real broken assumptions, missing edge cases, or behavior drift; otherwise you are only testing the happy path.',
            },
          ]}
          note="Regression-seeking prompts push the agent past shallow coverage. The goal is to find where reality disagrees with expectations, not to produce a comforting number of passing tests."
        />

        <PromptExampleStack
          title="Combined example — calibrate coverage to a real maintainer"
          entries={[
            {
              label: 'Weak',
              tone: 'amber',
              content: 'Please add some more tests.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Expand the current tests until Lars Moelleken (voku) would be OK with the amount of test coverage and you discovered at least one real issue.\nKeep pushing past the happy path.\nIf you do not find a real issue, missing edge case, or broken assumption, the suite is still too weak, so continue.\nIf a new test fails, fix the code instead of weakening the assertion.\nReport what issue you found or which risk area you closed.',
            },
          ]}
          note="This works better than “please add some more tests” because it anchors the quality bar to a concrete maintainer standard, forces the agent to keep extending coverage until it finds a real weakness, and makes test discovery the goal instead of polite test-count inflation. In mature PHP repositories, that maintainer- and repo-shaped target is often far easier for the model to act on than a generic request."
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
