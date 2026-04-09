export function Prompt8_StopIfStuck() {
  return (
    <div id="prompt-8" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        8. The "Stop If Stuck" Prompt
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        Agents can loop endlessly when something breaks. A simple fail-safe prevents this.
      </p>

      <div className="mb-8 overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
        <div className="border-b border-blue-200 bg-blue-50 px-5 py-4">
          <h3 className="font-bold text-blue-800">The fail-safe prompt</h3>
        </div>
        <div className="p-5">
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
            {`If the build fails repeatedly,
stop and summarize the root cause
instead of trying random fixes.`}
          </pre>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
          <h3 className="mb-2 font-bold text-red-900">Without this</h3>
          <p className="leading-relaxed text-red-800">
            The agent retries the same approach repeatedly, burning context and time, while progressively making the
            codebase messier.
          </p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <h3 className="mb-2 font-bold text-blue-900">With this</h3>
          <p className="leading-relaxed text-blue-800">
            The agent stops, summarizes what it found, and hands control back to you. Much faster and far less
            destructive.
          </p>
        </div>
      </div>
    </div>
  );
}
