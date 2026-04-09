import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt5_PreventHallucination() {
  return (
    <div id="prompt-5" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        5. Add the Anti-Anchoring Prompts Back In
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Calling code final too early makes the next model work like a polite reviewer instead of a critical engineer.
      </p>

      <PromptExampleStack
        entries={[
          {
            label: 'Bad',
            tone: 'red',
            content: 'Here is the final implementation. Review it.',
          },
          {
            label: 'Better',
            tone: 'amber',
            content: 'Here is the code. What is wrong with it?',
          },
          {
            label: 'Best',
            tone: 'blue',
            content: 'Here is a first draft implementation.\nReview it critically, prove why it might fail under load, and improve it.',
          },
        ]}
        note="Calling even production-ready code a first draft reduces anchoring. It nudges the next model to challenge the implementation instead of rubber-stamping it."
      />
    </div>
  );
}
