import { PromptPatternCard } from './PromptExampleLayouts';

const PATTERNS = [
  {
    title: 'Specify minimum guarantees',
    bad: 'add a unit test',
    best: 'add at least one PHPUnit test for the edge case that triggered this bug, and write the test before the fix',
    why: 'A stronger minimum guarantee forces a causal test instead of a decorative assertion.',
  },
  {
    title: 'Anchor to repository patterns',
    bad: 'refactor this code',
    best: 'refactor to match the existing value-object architecture exactly: final class, readonly properties, strict typing, no setters, PHPStan-clean',
    why: 'Concrete repository anchors beat vague style advice because they point at code instead of taste.',
  },
  {
    title: 'Use tooling as the judge',
    bad: 'improve the code',
    best: 'make the change pass PHPStan max, keep strict types, and do not add baseline entries or weaken existing annotations',
    why: 'Tooling gives the agent a measurable finish line.',
  },
  {
    title: 'State what must not change',
    bad: 'fix this bug',
    best: 'identify the root cause, produce the smallest stable patch, keep the public API unchanged, preserve existing contracts, and do not weaken tests',
    why: 'Explicit invariants reduce blast radius and discourage opportunistic rewrites.',
  },
  {
    title: 'Force schema-first debugging',
    bad: 'fix the broken query',
    best: 'inspect the schema first, compare the working and failing joins, identify the root cause, then produce the minimal fix',
    why: 'In data-heavy systems, structure should come before patching.',
  },
  {
    title: 'Force verification loops',
    bad: 'implement the feature',
    best: 'implement the feature, run the relevant test suite, paste the raw output, and do not modify assertions unless you can justify the behavior change explicitly',
    why: 'Verification loops make completion observable instead of implied.',
  },
  {
    title: 'Block hallucinations explicitly',
    bad: 'write docs for this module',
    best: 'derive documentation strictly from code, tests, and observable behavior; for anything not derivable, ask questions instead of guessing',
    why: 'Ask instead of guess is one of the highest-leverage prompt phrases you can use.',
  },
  {
    title: 'Design for stateless handoff',
    bad: 'continue where we left off',
    best: 'here is the current TODO state, last confirmed decision, open constraint not yet encoded, files touched, and what is still unknown',
    why: 'A good handoff prompt survives context loss and helps both humans and agents.',
  },
] as const;

export function Prompt4_AskForProof() {
  return (
    <div id="prompt-4" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        4. Keep the Reusable Prompt Patterns
      </h2>

      <p className="mb-10 text-xl font-medium leading-relaxed text-gray-800">
        These examples are too useful to lose. They are the kinds of prompts developers can reuse tomorrow.
      </p>

      <div className="grid gap-6 xl:grid-cols-2">
        {PATTERNS.map((pattern) => (
          <div key={pattern.title}>
            <PromptPatternCard title={pattern.title} bad={pattern.bad} best={pattern.best} why={pattern.why} />
          </div>
        ))}
      </div>
    </div>
  );
}
