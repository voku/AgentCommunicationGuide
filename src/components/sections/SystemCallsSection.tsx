import { CodeSnippet } from '../CodeSnippet';

export function SystemCallsSection() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Prefer System Calls Over MCP</h2>
      <p>Modern agents often use MCP tools. They are powerful—but expensive. Each MCP call introduces latency, orchestration overhead, and additional failure modes.</p>
      <p>Whenever possible, prefer local commands:</p>
      <CodeSnippet code="npm install\nnpm run build\nnpm run test" language="bash" />
      <p>Use MCP only when the capability truly lives there (e.g., real browser validation, DOM inspection, screenshots).</p>
    </section>
  );
}
