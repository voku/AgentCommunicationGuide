export function Prompt7_RepositoryAnchors() {
  return (
    <div id="prompt-7" className="mb-16 scroll-mt-24 sm:mb-24">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        7. Keep Context Anchors in the Prompt Article
      </h2>

      <p className="mb-8 text-xl font-medium leading-relaxed text-gray-800">
        A short phrase can compress a surprising amount of execution detail when it points at a known methodology or a
        trusted repository pattern.
      </p>

      <div className="mb-8 overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
        <div className="border-b border-blue-200 bg-blue-50 px-5 py-4">
          <h3 className="font-bold text-blue-800">Example anchor</h3>
        </div>
        <div className="p-5">
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-gray-900 p-4 font-mono text-sm leading-relaxed text-gray-100">
            Implement this using TDD Detroit School.
          </pre>
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          'tests first',
          'classicist testing',
          'state-based assertions',
          'inside-out development',
          'black-box testing',
          'minimal mocking',
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-gray-800">{item}</p>
          </div>
        ))}
      </div>

      <div className="rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6 shadow-sm sm:p-8">
        <p className="text-lg text-blue-700">
          This is powerful because it is not more context. It is compressed context that the model can actually reload.
        </p>
      </div>
    </div>
  );
}
