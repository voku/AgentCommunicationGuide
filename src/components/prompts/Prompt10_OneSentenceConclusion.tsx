export function Prompt10_OneSentenceConclusion() {
  return (
    <div id="prompt-10" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        10. The Best Prompt Is Often One Sentence
      </h2>

      <p className="mb-6 text-xl font-medium leading-relaxed text-gray-800">
        Developers often assume longer prompts produce better results. The opposite is usually true.
      </p>

      <p className="mb-8 leading-relaxed text-gray-700">
        Long prompts introduce ambiguity. Short prompts that reference external constraints are stronger.
      </p>

      <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-bold text-gray-900">Examples that work well</h3>
        <div className="space-y-3">
          {[
            'Fix the root cause. Keep the public API unchanged.',
            'Add a regression test. Run PHPStan at max level.',
            'Produce the smallest patch that makes the test pass.',
          ].map((example) => (
            <pre
              key={example}
              className="overflow-x-auto rounded-lg bg-gray-900 p-3 font-mono text-sm leading-relaxed whitespace-pre-wrap text-gray-100"
            >
              {example}
            </pre>
          ))}
        </div>
      </div>

      <div className="my-10 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-900">The actual rule</h3>
        <p className="mb-3 text-2xl font-semibold leading-tight text-blue-800 sm:text-3xl">
          Prompts still matter — but only when they encode constraints, not personality.
        </p>
        <p className="text-lg text-blue-700">
          Once constraints are in place, the prompts become surprisingly small. And that is a good sign.
        </p>
      </div>

      <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-xl sm:p-8">
        <h3 className="mb-4 font-bold text-blue-200">Good prompts</h3>
        <div className="space-y-2">
          {[
            'define constraints',
            'require verification',
            'limit scope',
            'reference repository patterns',
            'prevent guessing',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-400">
          Because the real intelligence no longer lives in the prompt. It lives in the system the prompt activates.
        </p>
      </div>
    </div>
  );
}
