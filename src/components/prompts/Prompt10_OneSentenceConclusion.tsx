import { CodeSnippet } from '../CodeSnippet';

export function Prompt10_OneSentenceConclusion() {
  return (
    <div id="prompt-9" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        9. Native-Language Prompting
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Native-language prompting is not workflow trivia. It is a practical way to preserve fast thinking while still
        producing durable English repo artifacts.
      </p>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="mb-3 font-bold text-gray-900">Brainstorm fast</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">Use your native language while exploring the problem.</p>
          <CodeSnippet code="[brainstorm in native language]" language="native" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="mb-3 font-bold text-gray-900">Then operationalize it</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">Turn the raw idea into a durable execution prompt.</p>
          <CodeSnippet
            code="Summarize this into a short English implementation plan with acceptance criteria."
            language="prompt"
          />
        </div>
      </div>

      <p className="leading-relaxed text-gray-700">
        That gives you low-friction thinking up front and high-quality English artifacts when it is time to hand work to
        the repository, the team, or the next agent.
      </p>
    </div>
  );
}
