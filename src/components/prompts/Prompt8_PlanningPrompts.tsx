import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt8_PlanningPrompts() {
  return (
    <div id="prompt-8" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        8. Planning Prompts: Decide Before You Execute
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Hard tasks do better when the prompt decides whether the agent should execute immediately or plan first.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Deterministic mode"
          entries={[
            {
              label: 'Prompt',
              tone: 'blue',
              content: 'Implement the spec.\nRun tests.\nFix all findings.',
            },
          ]}
          note="Use this when the path is already known and the agent should just execute the checklist."
        />

        <PromptExampleStack
          title="Exploration mode"
          entries={[
            {
              label: 'Prompt',
              tone: 'emerald',
              content: 'Explore three alternative implementations.\nEvaluate tradeoffs.\nDo not code yet.',
            },
          ]}
          note="This forces the agent to widen the option set before it starts editing files."
        />

        <PromptExampleStack
          title="Unknown work"
          entries={[
            {
              label: 'Prompt',
              tone: 'amber',
              content: 'Do not implement yet.\nFirst gather context, identify unknowns, and propose a short execution plan.',
            },
          ]}
          note="Plan-first prompts are especially useful when the task is vague, risky, or cross-cutting."
        />
      </div>
    </div>
  );
}
