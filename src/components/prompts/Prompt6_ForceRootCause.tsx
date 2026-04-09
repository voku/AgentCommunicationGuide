export function Prompt6_ForceRootCause() {
  return (
    <div id="prompt-6" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        6. Force Root Cause Analysis
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        A common failure pattern: the model sees a failing test, changes code randomly, and eventually the test passes.
        That is patching symptoms.
      </p>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
          <div className="border-b border-red-200 bg-red-50 px-5 py-4">
            <h3 className="font-bold text-red-800">❌ Symptom patching</h3>
          </div>
          <div className="p-5">
            <ol className="space-y-2 text-sm leading-relaxed text-gray-700">
              <li>1. Model sees a failing test.</li>
              <li>2. It changes code randomly.</li>
              <li>3. Eventually the test passes.</li>
            </ol>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
          <div className="border-b border-blue-200 bg-blue-50 px-5 py-4">
            <h3 className="font-bold text-blue-800">✓ Require diagnosis first</h3>
          </div>
          <div className="p-5">
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
              {`Identify the root cause before changing code.
Then produce the smallest possible fix.`}
            </pre>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <p className="leading-relaxed text-gray-300">
          This produces much better results. A model that understands the root cause writes a targeted fix. A model that
          just makes the test pass writes a patch that will break something else later.
        </p>
      </div>
    </div>
  );
}
