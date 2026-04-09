export function Prompt5_PreventHallucination() {
  return (
    <div id="prompt-5" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        5. Prevent Hallucination Explicitly
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Models tend to fill missing information with guesses. You can block this behavior with one simple instruction.
      </p>

      <div className="mb-8 overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
        <div className="border-b border-blue-200 bg-blue-50 px-5 py-4">
          <h3 className="font-bold text-blue-800">Example</h3>
        </div>
        <div className="p-5">
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
            {`Derive documentation strictly from code and tests.
If information is missing, ask questions instead of guessing.`}
          </pre>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
          <h3 className="mb-2 font-bold text-red-900">Without this instruction</h3>
          <p className="leading-relaxed text-red-800">
            The model fills gaps with plausible-sounding guesses, producing documentation that looks correct but drifts
            from the actual behavior.
          </p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <h3 className="mb-2 font-bold text-blue-900">With this instruction</h3>
          <p className="leading-relaxed text-blue-800">
            Hallucination turns into gap detection. The model stops inventing and starts asking questions — which is
            exactly what a careful collaborator should do.
          </p>
        </div>
      </div>
    </div>
  );
}
