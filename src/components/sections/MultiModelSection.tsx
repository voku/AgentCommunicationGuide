import { CheckCircle } from 'lucide-react';
import { CodeSnippet } from '../CodeSnippet';

export function MultiModelSection() {
  return (
    <section className="mb-12 sm:mb-16">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Multi-Model Workflows: Stop Forcing One AI to Do Everything</h2>
      <p>
        Another pattern that has emerged recently is something many experienced developers discovered independently: <strong>Different models are good at different tasks.</strong>
      </p>
      <p>
        Trying to force a single model to do everything is like asking the same engineer to simultaneously be:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1 sm:space-y-2 text-gray-700">
        <li>a UX designer</li>
        <li>a backend architect</li>
        <li>a security reviewer</li>
        <li>a technical writer</li>
      </ul>
      <p>Sometimes it works. Often it doesn’t.</p>
      <p>So the newer workflow emerging in the developer community is simple: <strong>Use multiple models together.</strong></p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">One CLI, Multiple Models</h3>
      <p>A common setup today uses tools like OpenCode as a universal adapter. Instead of switching between separate CLIs like Gemini CLI, Codex CLI, or Claude Code, you run one interface and route tasks to the best model.</p>
      
      <div className="bg-gray-900 text-gray-300 p-4 sm:p-6 rounded-xl my-6 font-mono text-sm shadow-lg">
        <div className="mb-2"><span className="text-gray-500"># Frontend tasks:</span><br/><span className="text-blue-400">@gemini</span> build the dashboard component</div>
        <div className="mb-2"><span className="text-gray-500"># Backend tasks:</span><br/><span className="text-green-400">@codex</span> implement the API endpoint</div>
        <div><span className="text-gray-500"># Review and orchestration:</span><br/><span className="text-purple-400">@claude</span> review the implementation and propose improvements</div>
      </div>
      <p>All changes still happen in the same repository. The CLI just routes the work.</p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Parallel Model Workflows</h3>
      <p>Some tools even allow multiple models to run in parallel. A typical flow looks like this:</p>
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        <li><strong>Gemini</strong> generates UI and explores layout ideas</li>
        <li><strong>Codex</strong> implements the backend logic</li>
        <li><strong>Claude</strong> reviews the result and proposes fixes</li>
      </ol>
      <p>The orchestration model then decides what to keep. This kind of multi-model verification loop often produces better results than relying on a single model.</p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Why This Fits the Execution Design Idea</h3>
      <p>This trend reinforces the main argument of this article. The productivity gains do not come from better prompts. They come from better systems around the models. That includes:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-6 text-sm sm:text-base">
        <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" /> structured repositories</li>
        <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" /> clear specs</li>
        <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" /> validation loops</li>
        <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" /> agent skills</li>
        <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" /> model routing</li>
      </ul>
      <p>The prompt is still tiny:</p>
      <CodeSnippet code="implement the spec" language="prompt" />
      <p>But the execution environment has become smarter.</p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">The Real Lesson</h3>
      <p>Stop asking:</p>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        "Which AI model is the best?"
      </blockquote>
      <p>Start asking:</p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-900 my-4 font-medium">
        "How do we design a system where each model does what it’s best at?"
      </blockquote>
      <p>Because once again, the leverage does not come from prompt wording. It comes from engineering the workflow around the agents.</p>
    </section>
  );
}
