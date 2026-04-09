export function Prompt7_RepositoryAnchors() {
  return (
    <div id="prompt-7" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        7. Use Repository Anchors
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Models perform far better when prompts reference existing code. Concrete anchors beat vague advice.
      </p>

      <div className="mb-8 space-y-4">
        <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
          <div className="border-b border-red-200 bg-red-50 px-5 py-3">
            <span className="text-sm font-bold text-red-700">Bad prompt</span>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Refactor this code to be cleaner.`}
            </pre>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
          <div className="border-b border-amber-200 bg-amber-50 px-5 py-3">
            <span className="text-sm font-bold text-amber-700">Better prompt</span>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Refactor this to match the existing immutable value-object pattern.`}
            </pre>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
          <div className="border-b border-blue-200 bg-blue-50 px-5 py-3">
            <span className="text-sm font-bold text-blue-700">Best prompt</span>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Refactor to match the existing value-object pattern:
final class
readonly properties
strict typing
no setters
PHPStan-clean`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
