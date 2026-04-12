import { CodeSnippet } from '../CodeSnippet';

export function Prompt8_PlanningPrompts() {
  return (
    <div id="prompt-8" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        8. Native-Language Prompting
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Think fast in your native language. Write for the repository in English.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700">
        Native-language prompting lets you preserve rapid, low-friction thinking during exploration — then convert the
        result into a durable English artifact before handing the work to the repository, the team, or the next agent.
      </p>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="mb-3 font-bold text-gray-900">Step 1 — brainstorm in your language</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">Explore the problem without switching cognitive gears.</p>
          <CodeSnippet code="[brainstorm in native language]" language="native" />
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="mb-3 font-bold text-gray-900">Step 2 — operationalize it</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">Convert the raw idea into a durable execution prompt.</p>
          <CodeSnippet
            code="Summarize this into a short English implementation plan with acceptance criteria."
            language="prompt"
          />
        </div>
      </div>

      <div className="rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <p className="text-lg text-blue-700">
          The goal is low-friction thinking up front and high-quality English artifacts at handoff. The language you
          think in does not have to be the language the repository speaks.
        </p>
      </div>
    </div>
  );
}
