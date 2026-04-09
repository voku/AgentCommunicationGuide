export function Prompt9_PromptsShouldShrink() {
  return (
    <div id="prompt-9" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        9. Prompts Should Shrink Over Time
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Early in a project, prompts often need to contain more guidance. As the repository evolves, they should shrink.
      </p>

      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-bold text-gray-900">What replaces the prompt over time</h3>
        <div className="space-y-3">
          {[
            'patterns become visible',
            'tests enforce behavior',
            'static analysis enforces style',
            'CI enforces validation',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
        <div className="border-b border-blue-200 bg-blue-50 px-5 py-4">
          <h3 className="font-bold text-blue-800">Eventually, many tasks collapse into something like</h3>
        </div>
        <div className="p-5">
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
            {`Implement the spec.
Run the checks.`}
          </pre>
        </div>
      </div>

      <div className="rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <p className="text-lg text-blue-700">
          Because the system carries the real rules. The prompt is just the trigger.
        </p>
      </div>
    </div>
  );
}
