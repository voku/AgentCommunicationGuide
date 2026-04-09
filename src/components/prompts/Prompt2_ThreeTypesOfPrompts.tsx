import type { ReactNode } from 'react';
import { CheckCircle, Search, Minimize2 } from 'lucide-react';

export function Prompt2_ThreeTypesOfPrompts() {
  return (
    <div id="prompt-2" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        2. The Three Types of Prompts That Actually Work
      </h2>

      <p className="mb-10 text-xl font-medium leading-relaxed text-gray-800">
        In practice, effective prompts usually fall into three categories.
      </p>

      <div className="space-y-6">
        <PromptTypeCard
          number="1"
          icon={<CheckCircle className="h-6 w-6 text-blue-600" />}
          title="Constraint Prompts"
          tagline="These define what must not break."
          example={`Fix the bug but keep the public API unchanged.
Run PHPStan at max level.
Do not add new ignores.`}
          note="These prompts work because they reduce the solution space. The model cannot wander freely anymore."
        />

        <PromptTypeCard
          number="2"
          icon={<Search className="h-6 w-6 text-blue-600" />}
          title="Verification Prompts"
          tagline="These require evidence."
          example={`Add a PHPUnit test that fails before the fix and passes after.
Paste the raw test output.`}
          note="This forces the model to prove the result. Without verification prompts, models often summarize success without actually confirming it."
        />

        <PromptTypeCard
          number="3"
          icon={<Minimize2 className="h-6 w-6 text-blue-600" />}
          title="Scope Prompts"
          tagline="These limit how much code can change."
          example={`Produce the minimal patch required to fix the bug.
Do not modify unrelated files.`}
          note="This prevents the common LLM behavior of rewriting large sections of code."
        />
      </div>
    </div>
  );
}

function PromptTypeCard({
  number,
  icon,
  title,
  tagline,
  example,
  note,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  example: string;
  note: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
          {number}
        </span>
        {icon}
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="p-5 sm:p-6">
        <p className="mb-4 font-medium leading-relaxed text-gray-800">{tagline}</p>
        <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
          {example}
        </pre>
        <p className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm leading-relaxed text-blue-800">{note}</p>
      </div>
    </div>
  );
}
