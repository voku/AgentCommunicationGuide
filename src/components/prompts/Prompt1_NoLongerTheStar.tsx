export function Prompt1_NoLongerTheStar() {
  return (
    <div id="prompt-1" className="mb-16 scroll-mt-24 sm:mb-24">
      <div className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm sm:p-5 sm:text-base">
        <strong className="text-amber-950">Short version:</strong> the best prompts are not motivational speeches. They
        are small operational contracts.
      </div>

      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        1. The Prompt Is No Longer the Star
      </h2>

      <p className="mb-6 text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
        Early AI workflows focused heavily on prompt engineering. The story was seductive: write a better paragraph and
        the model will write better code.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700">
        Developers wrote elaborate instructions like this:
      </p>

      <pre className="mb-6 overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100">
        {`You are an expert senior software engineer.
Write clean, scalable, maintainable code.
Follow best practices and think step by step.`}
      </pre>

      <p className="mb-6 leading-relaxed text-gray-700">
        It sounded serious. It also constrained almost nothing. The model could still change APIs, rewrite half the
        repository, skip regression tests, invent patterns, and violate project rules — and then explain confidently why
        it did.
      </p>

      <div className="my-10 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-900">The core mistake</h3>
        <p className="mb-3 text-2xl font-semibold leading-tight text-blue-800 sm:text-3xl">
          Most prompts described personality instead of boundaries.
        </p>
        <p className="text-lg text-blue-700">Operational prompts describe constraints.</p>
      </div>
    </div>
  );
}
