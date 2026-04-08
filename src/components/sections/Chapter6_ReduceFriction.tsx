import { Mic, Globe, Brain, Trash2 } from 'lucide-react';

export function Chapter6_ReduceFriction() {
  return (
    <div id="chapter-6" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <Brain className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" /> 
        6. Reduce Cognitive Friction
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        The goal of an agent is to reduce your cognitive load, not replace your judgment. If talking to the agent feels like writing a Jira ticket, you are doing it wrong.
      </p>

      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Mic className="w-5 h-5 text-gray-500" /> Speech-to-Text & Wispr Flow
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Speech reduces translation from thought to text. Typing forces you to format your thoughts. Speaking allows you to dump raw intent. I frequently use tools like Wispr Flow for brainstorming and initial task definition. I just talk through the problem, let the tool format it into coherent text, and hand that directly to the agent.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-gray-500" /> Native Language vs English
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Native language reduces translation in your head. I often use my native language because my brain does. When I need something done quickly, I will literally just type <code className="bg-gray-100 px-2 py-1 rounded text-sm">"mach fertig"</code> (German for "finish it").
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
            <p className="text-blue-900 font-medium text-lg">
              Native language for business logic, English for repo artifacts.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            This is a hard-earned practical rule. Speak to the agent in whatever language lets you think fastest about the domain logic. But strictly instruct the agent to write all code, comments, commit messages, and documentation in English.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-gray-500" /> Humans Still Decide What to Delete
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            LLMs add code much more easily than they remove it. They are generative by nature. They will happily abstract, wrap, and extend. They are terrified of deleting things unless explicitly told to do so.
          </p>
          <p className="text-gray-700 font-medium text-lg mb-4">
            Sometimes the best instruction is just "delete it."
          </p>
          <p className="text-gray-700 leading-relaxed">
            The real work of execution design is curation. The agent generates the mass; the human carves away the excess. If you aren't actively deleting code the agent wrote, your codebase is slowly rotting from generative bloat.
          </p>
        </section>
      </div>
    </div>
  );
}
