import type { ReactNode } from 'react';
import { ArrowRight, CheckCircle, Forward, Minimize2 } from 'lucide-react';
import { CopyablePromptBlock } from '../CopyablePromptBlock';

interface PromptTypeCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  example: string;
  note: string;
}

export function Prompt3_AntiAnchoringTrick() {
  return (
    <div id="prompt-3" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        3. The Prompt Classes That Actually Work
      </h2>

      <p className="mb-10 text-xl font-medium leading-relaxed text-gray-800">
        The prompt classes that keep showing up in real coding work are constraint prompts, verification prompts, scope
        prompts, and continuation prompts.
      </p>

      <div className="space-y-6">
        <PromptTypeCard
          number="1"
          icon={<CheckCircle className="h-6 w-6 text-blue-600" />}
          title="Constraint prompts"
          tagline="These define what must not break."
          example={`Fix the bug but keep the public API unchanged.
Run PHPStan at max level.
Do not add new ignores.`}
          note="Constraints shrink the search space. The agent has fewer ways to be creatively wrong."
        />

        <PromptTypeCard
          number="2"
          icon={<ArrowRight className="h-6 w-6 text-blue-600" />}
          title="Verification prompts"
          tagline="These require evidence."
          example={`Add a PHPUnit test that fails before the fix and passes after.
Paste the raw test output.`}
          note="Verification turns 'trust me' into observable proof. That is far more reliable than a confident summary."
        />

        <PromptTypeCard
          number="3"
          icon={<Minimize2 className="h-6 w-6 text-blue-600" />}
          title="Scope prompts"
          tagline="These limit how much code can change."
          example={`Produce the minimal patch required to fix the bug.
Do not modify unrelated files.`}
          note="Scope prompts fight the default LLM temptation to rewrite half the repository in search of a local win."
        />

        <PromptTypeCard
          number="4"
          icon={<Forward className="h-6 w-6 text-blue-600" />}
          title="Continuation prompts"
          tagline="These stop the agent from doing one polite step and then waiting forever."
          example={`Run the CI pipeline and fix all findings on your way.
Run until you reach the point of done as already requested before.`}
          note="Persistence and completeness usually need to be explicit. Otherwise many agents stop after the first acceptable-looking step."
        />
      </div>
    </div>
  );
}

function PromptTypeCard({ number, icon, title, tagline, example, note }: PromptTypeCardProps) {
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
        <div className="mb-4">
          <CopyablePromptBlock text={example} />
        </div>
        <p className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm leading-relaxed text-blue-800">{note}</p>
      </div>
    </div>
  );
}
