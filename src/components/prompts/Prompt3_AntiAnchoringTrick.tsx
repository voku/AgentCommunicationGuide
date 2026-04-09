export function Prompt3_AntiAnchoringTrick() {
  return (
    <div id="prompt-3" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        3. The Anti-Anchoring Trick
      </h2>

      <p className="mb-6 text-xl font-medium leading-relaxed text-gray-800">
        One subtle problem appears when you pass code from one model to another.
      </p>

      <p className="mb-8 leading-relaxed text-gray-700">
        The second model often assumes the existing code is correct — even when you want it to challenge the
        implementation.
      </p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
          <div className="border-b border-red-200 bg-red-50 px-5 py-4">
            <h3 className="font-bold text-red-800">❌ Triggers anchoring</h3>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Here is the final implementation.
Review it.`}
            </pre>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
          <div className="border-b border-blue-200 bg-blue-50 px-5 py-4">
            <h3 className="font-bold text-blue-800">✓ Avoids anchoring</h3>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Here is a first draft implementation.
Review it critically and improve it.`}
            </pre>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <p className="leading-relaxed text-gray-300">
          Even if the code is already production-ready, calling it a "first draft" avoids anchoring bias. The next model
          will still analyze the code instead of simply accepting it.
        </p>
      </div>
    </div>
  );
}
