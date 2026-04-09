import { TerminalSquare } from 'lucide-react';

export function Chapter1_PromptEngineeringOver() {
  return (
    <div id="chapter-1" className="scroll-mt-24 mb-16 sm:mb-24">
      <div className="bg-gray-50 p-4 sm:p-5 rounded-xl mb-10 text-sm sm:text-base text-gray-600 border border-gray-200 shadow-sm">
        <strong className="text-gray-900">Scope:</strong> This is about how to structure communication and execution around coding agents. Not a security guide, procurement guide, or product comparison.
      </div>

      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <TerminalSquare className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
        1. The Shift
      </h2>

      <p className="text-lg sm:text-xl text-gray-600 font-light mb-6 leading-relaxed">
        Prompts were the interface in 2024. Workflows and agents took over in 2025. Now the prompt is mostly just the ignition point for an execution system built from tools, validators, contracts, repository patterns, and context.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 sm:p-8 rounded-r-2xl my-10 shadow-sm">
        <h3 className="font-bold text-blue-900 text-sm uppercase tracking-wider mb-3">The actual rule</h3>
        <p className="text-blue-800 font-semibold text-2xl sm:text-3xl leading-tight mb-3">
          The system is the prompt.
        </p>
        <p className="text-blue-700 text-lg">
          Long prose is fragile. Constraints survive execution.
        </p>
      </div>

      <p className="mb-8 text-gray-700 leading-relaxed">
        That is the spine. Everything else in this article hangs off it.
      </p>

      <div className="p-6 sm:p-8 bg-gray-900 text-white rounded-2xl font-medium text-center shadow-xl transform transition-transform hover:scale-[1.01]">
        <p className="text-lg sm:text-xl mb-2 text-gray-300">The job is no longer to "describe the ideal developer."</p>
        <p className="text-xl sm:text-2xl text-blue-300 font-semibold">The job is to build a system that makes the wrong move hard.</p>
      </div>
    </div>
  );
}
