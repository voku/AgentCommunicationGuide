import { ChatExample } from '../ChatExample';

export function ModelSpecializationSection() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Models Are Different Coworkers</h2>
      <p>Working with multiple models quickly reveals something interesting. They behave like different coworkers.</p>
      <p>For example, <strong>Gemini</strong> is excellent at large exploratory artifacts:</p>
      <ChatExample 
        title="Exploratory Task"
        messages={[
          { role: 'user', content: 'Create an SVG map of all LDAP employees. Connect nodes via manager relationships.' },
          { role: 'agent', content: 'I will create a D3.js based interactive SVG map. I\'ll structure the data hierarchically and use a force-directed graph layout to visualize the reporting lines...', delay: 1500 }
        ]} 
      />
      <p>Other models might be better at structured refactoring, repository editing, or strict instruction following. Treat models like team members with different strengths, not interchangeable tools.</p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-12 mb-4 sm:mb-6">The Model Specialization Matrix</h3>
      <p>
        To truly leverage multi-model workflows, you need to understand the specific strengths of each model. Just as you wouldn't assign a database migration to a purely visual designer, you shouldn't route all tasks to a single LLM.
      </p>
      
      <div className="overflow-x-auto my-8 bg-white border border-gray-200 rounded-xl shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-sm sm:text-base">
              <th className="py-4 px-6 font-semibold text-gray-900">Model Family</th>
              <th className="py-4 px-6 font-semibold text-gray-900">Primary Strength</th>
              <th className="py-4 px-6 font-semibold text-gray-900">Best Used For</th>
              <th className="py-4 px-6 font-semibold text-gray-900">Why It Excels</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base text-gray-700 divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 font-medium text-blue-600">Gemini (Google)</td>
              <td className="py-4 px-6">Massive Context & Multimodal</td>
              <td className="py-4 px-6">UI/UX, Whole-repo analysis, Visual regressions</td>
              <td className="py-4 px-6">Native multimodal training and 1M+ token windows allow it to "see" UI mockups and ingest entire codebases at once.</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 font-medium text-green-600">Codex / GPT-5.4 (OpenAI)</td>
              <td className="py-4 px-6">Algorithmic Logic & Backend</td>
              <td className="py-4 px-6">API design, Complex algorithms, Data pipelines</td>
              <td className="py-4 px-6">Deep training on structured logic and extensive backend repositories makes it highly reliable for strict algorithmic tasks.</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 font-medium text-purple-600">Claude (Anthropic)</td>
              <td className="py-4 px-6">Nuance, Review & Orchestration</td>
              <td className="py-4 px-6">Code review, Refactoring, Architecture planning</td>
              <td className="py-4 px-6">With a massive expanded token window and strong alignment for safety and nuance, it's an exceptional reviewer that catches edge cases other models miss across huge codebases.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Why Specialization is Beneficial</h3>
      <p>Routing tasks to specialized models provides three massive advantages over the "one model fits all" approach:</p>
      <ul className="space-y-6 mt-6">
        <li className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
          <div>
            <strong className="text-gray-900 block mb-1">Cost and Latency Optimization</strong>
            <p className="text-gray-600 text-sm sm:text-base">In real-world usage, token cost and latency become significant. Not every task requires a heavy reasoning model. Using smaller, faster models for simple scaffolding and reserving expensive reasoning models for complex architecture saves both time and API costs.</p>
          </div>
        </li>
        <li className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
          <div>
            <strong className="text-gray-900 block mb-1">Mitigating Model Bias</strong>
            <p className="text-gray-600 text-sm sm:text-base">Every model has a "lazy" default path based on its training data. By using Claude to review Gemini's code, or GPT-4 to write tests for Claude's implementation, you break the echo chamber of a single model's biases.</p>
          </div>
        </li>
        <li className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
          <div>
            <strong className="text-gray-900 block mb-1">Context Window Management</strong>
            <p className="text-gray-600 text-sm sm:text-base">Instead of filling one model's context window with both visual design specs and backend database schemas, you can isolate context. The UI model only sees the frontend context; the backend model only sees the API context.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
