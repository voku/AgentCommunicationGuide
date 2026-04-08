import { FileCode2, Anchor, Map, GitBranch } from 'lucide-react';

export function Chapter3_CompressIntent() {
  return (
    <div id="chapter-3" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <FileCode2 className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" /> 
        3. Use Patterns That Compress Intent
      </h2>

      <p className="mb-8 text-xl font-medium text-gray-800 leading-relaxed">
        Reduce translation loss between intent and execution.
      </p>

      <p className="mb-10 text-gray-700 leading-relaxed">
        The more an agent has to translate your words into code, the more room there is for hallucination. The best instructions don't explain the code; they point to existing structures that already contain the explanation.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-blue-600" /> Examples Beat Prompts
          </h3>
          <p className="text-gray-600 mb-4">
            Examples reduce translation from rule to implementation. Instead of describing a complex validation rule, point the agent to a file where that rule is already implemented perfectly.
          </p>
          <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm text-gray-800 border border-gray-200">
            "Implement the user validation exactly like the ProductValidator.ts example."
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <Anchor className="w-5 h-5 text-blue-600" /> Context Anchors
          </h3>
          <p className="text-gray-600 mb-4">
            Context anchors reduce translation from methodology to instruction. Use specific, loaded terms that carry massive amounts of implicit engineering context.
          </p>
          <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm text-gray-800 border border-gray-200">
            "Use the TDD Detroit School approach for these tests."
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <Map className="w-5 h-5 text-blue-600" /> Roadmaps over Drip-Feeds
          </h3>
          <p className="text-gray-600 mb-4">
            Agents need roadmaps, not drip-fed commands. If you give an agent one step at a time, it will code itself into a corner. Give it the full sequence so it can plan the architecture.
          </p>
          <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm text-gray-800 border border-gray-200">
            "Here is the 5-step roadmap. We are on step 2. Do not start step 3."
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <FileCode2 className="w-5 h-5 text-blue-600" /> Repository Patterns
          </h3>
          <p className="text-gray-600 mb-4">
            The repository is usually the highest-fidelity specification you have. The closer the instruction points to real code, the less room the model has to invent its own architecture.
          </p>
          <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm text-gray-800 border border-gray-200">
            "Match the existing value-object architecture exactly."
          </div>
        </div>
      </div>
    </div>
  );
}
