import { CheckCircle } from 'lucide-react';
import { Tooltip } from '../Tooltip';

export function SummarySection() {
  return (
    <div id="summary" className="scroll-mt-24">
      {/* The Hard Truth */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">The Hard Truth: LLMs Prefer Adding Code</h2>
        <p>
          LLMs love adding code. They are much worse at removing code. From the model's perspective, adding a compatibility layer or fallback is safe. From a maintenance perspective, it creates complexity.
        </p>
        <p>
          Sometimes the correct solution is simply to delete the file, remove the feature, or simplify the system. But that decision usually requires a human.
        </p>
        <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-800 my-6 sm:my-8 text-lg sm:text-xl font-serif">
          "We don't need this anymore."
        </blockquote>
      </section>

      {/* Conclusion */}
      <section className="mb-12 sm:mb-16 pt-6 sm:pt-8 border-t border-gray-200">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Conclusion</h2>
        <p>
          Prompt engineering was an important stepping stone. But the real leverage today lies somewhere else: repository structure, examples, specs, tools, workflows, and skills.
        </p>
        <p>
          Once those exist, the prompt becomes small. The agent does the mechanical work. The human decides what actually matters.
        </p>
        <div className="bg-blue-600 text-white p-6 sm:p-8 rounded-2xl mt-6 sm:mt-8 text-center shadow-xl">
          <p className="text-lg sm:text-xl font-medium mb-0">
            And sometimes the most valuable instruction you can give a coding agent is still:
          </p>
          <p className="text-2xl sm:text-3xl font-bold mt-3 sm:mt-4 font-serif italic">
            "Just delete it."
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Summary</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-8">
          <h3 className="font-medium mb-3 sm:mb-4 text-gray-900">Key takeaways:</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span><strong>Examples beat prompts.</strong></span></li>
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span><strong>Context anchors</strong> compress engineering knowledge.</span></li>
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span>Instructions should <strong>define outcomes</strong>, not actions.</span></li>
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span>Give agents <strong>roadmaps</strong>, not single tasks.</span></li>
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span>Keep <strong>AGENTS.md small</strong>.</span></li>
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span>Prefer <strong>system calls</strong> over MCP when possible.</span></li>
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span>Treat models like <strong>coworkers</strong> with different strengths.</span></li>
            <li className="flex items-start gap-2 sm:gap-3"><Tooltip content="Key Takeaway"><CheckCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" /></Tooltip> <span>LLMs are great at writing code—but <strong>humans must decide what should disappear</strong>.</span></li>
          </ul>
        </div>
      </section>

      {/* What's Next */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">What's Next?</h2>
        <p>Future deep dives could explore:</p>
        <ul className="list-disc pl-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
          <li>designing high-quality agent skills</li>
          <li>structuring repositories for LLM collaboration</li>
          <li>preventing agents from creating layered legacy systems</li>
          <li>forcing real verification instead of fake green checkmarks</li>
        </ul>
        <p className="font-medium text-base sm:text-lg text-gray-900">
          Because the future of AI-assisted development is not better prompt poetry. It's better engineering systems around the agent.
        </p>
      </section>
    </div>
  );
}
