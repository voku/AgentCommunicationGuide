export function EnvironmentSection() {
  return (
    <section id="environment" className="mb-12 sm:mb-16 scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Environment Design Matters More Than Prompts</h2>
      <p>Most productivity gains actually come from system design around the agent. Key elements:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>a repository with clear patterns</li>
        <li>specs describing target behavior</li>
        <li>examples showing expected structure</li>
        <li>validation tools (tests, linters, builds)</li>
        <li>agent skills for domain-specific work</li>
      </ul>
      <p>Once this system exists, prompts become extremely small. The prompt becomes a trigger, not a workflow description.</p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">AGENTS.md vs Skills</h3>
      <p>Another architectural lesson: <strong>AGENTS.md must stay small.</strong> Because it is included in every request.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
          <h4 className="font-medium mb-3">Good AGENTS.md contents:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Prefer existing project patterns</li>
            <li>• Verify changes with tests</li>
            <li>• Keep changes small</li>
            <li>• Treat specs and tests as source of truth</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border border-blue-100">
          <h4 className="font-medium mb-3 text-blue-900">Detailed guidance belongs in skills.</h4>
          <p className="text-sm text-blue-800 mb-2">Example skill: <em>Codeception Unit Tests</em></p>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Example test structure</li>
            <li>• Mocking patterns</li>
            <li>• Naming conventions</li>
            <li>• Common mistakes</li>
          </ul>
        </div>
      </div>
      <p className="text-center font-medium text-gray-700">Small global context. Rich targeted skills.</p>
    </section>
  );
}
