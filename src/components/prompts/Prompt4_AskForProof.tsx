export function Prompt4_AskForProof() {
  return (
    <div id="prompt-4" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        4. Ask for Proof, Not Confidence
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Models are extremely good at sounding confident. Confidence is not evidence.
      </p>

      <div className="mb-8 space-y-4">
        <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
          <div className="border-b border-red-200 bg-red-50 px-5 py-3">
            <span className="text-sm font-bold text-red-700">Bad prompt</span>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Explain why the code is correct.`}
            </pre>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm">
          <div className="border-b border-amber-200 bg-amber-50 px-5 py-3">
            <span className="text-sm font-bold text-amber-700">Better prompt</span>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Run the test suite and paste the raw output.`}
            </pre>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
          <div className="border-b border-blue-200 bg-blue-50 px-5 py-3">
            <span className="text-sm font-bold text-blue-700">Best prompt</span>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Run the failing test first.
Fix the bug.
Run the full test suite again and paste the output.`}
            </pre>
          </div>
        </div>
      </div>

      <div className="rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <p className="text-lg font-semibold text-blue-800">Verification beats explanation.</p>
      </div>
    </div>
  );
}
