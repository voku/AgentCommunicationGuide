import { PromptExampleStack } from './PromptExampleLayouts';

export function Prompt13_DeletionContainment() {
  return (
    <div id="prompt-12" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        12. Prompt for Deletion and Containment
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        LLMs almost never volunteer removal. You have to ask explicitly — and ask first, before any fix is proposed.
      </p>

      <div className="space-y-6">
        <PromptExampleStack
          title="Deletion before extension"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content:
                'Add a fallback for the broken cache path.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Do not add a fallback automatically.\nFirst evaluate whether the old cache path should simply be removed.\nOnly propose an extension if removal is not safe.',
            },
          ]}
          note="Without this framing, the model defaults to addition. It patches, wraps, and extends. Removal requires an explicit invitation."
        />

        <PromptExampleStack
          title="Code that should not exist"
          entries={[
            {
              label: 'Prompt',
              tone: 'blue',
              content:
                'Look for code that can be deleted instead of extended.\nList each candidate with a one-line reason why it is safe to remove.',
            },
          ]}
          note="This is the deletion audit. It surfaces dead code, redundant paths, and over-engineered abstractions that no one will volunteer in a normal review."
        />

        <PromptExampleStack
          title="Feature removal check"
          entries={[
            {
              label: 'Prompt',
              tone: 'blue',
              content:
                'Check whether this feature should be removed entirely instead of patched.\nIf it should be removed, describe what cleanup is needed.\nIf it should be kept, explain why removal is not safe.',
            },
          ]}
          note="Forces the model to evaluate removal as a first-class option before proposing any fix."
        />

        <PromptExampleStack
          title="Containment: stop the rewrite reflex"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content:
                'Refactor this module.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Do not rewrite this module.\nApply the smallest reviewable patch that addresses only the stated problem.\nLeave everything else exactly as it is.',
            },
          ]}
          note="Without a containment prompt, 'refactor' often means the model rewrites everything it finds mildly suboptimal. The result is a diff that is impossible to review and easy to break."
        />

        <PromptExampleStack
          title="Editorial containment"
          entries={[
            {
              label: 'Bad',
              tone: 'red',
              content:
                'Improve this article.',
            },
            {
              label: 'Best',
              tone: 'blue',
              content:
                'Do not rewrite this article from scratch.\nYou are doing a focused editorial refinement: fix structure, sharpen examples, remove redundancy.\nDo not change the voice, the core argument, or the section order.',
            },
          ]}
          note="Mode-selection prompts tell the model what kind of intervention is allowed and what kind is forbidden. This is especially useful for editing, refactoring, and architectural review."
        />
      </div>
    </div>
  );
}
