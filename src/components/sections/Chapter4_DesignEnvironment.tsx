import { Settings, FileText, Trash2, Cpu } from 'lucide-react';

export function Chapter4_DesignEnvironment() {
  return (
    <div id="chapter-4" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <Settings className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" /> 
        4. Design the Agent Environment
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        The environment dictates the behavior. If you have to repeatedly tell the agent how to behave, your environment is broken.
      </p>

      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-500" /> AGENTS.md vs Skills
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Skills reduce translation from team convention to agent behavior. Keep your <code>AGENTS.md</code> file small. It should only contain universal repository rules (e.g., "Never use mock data, always use the real DB"). 
          </p>
          <p className="text-gray-700 leading-relaxed">
            For specific workflows (like "How to build a UI component" or "How to write a database migration"), use dedicated Skill files. This prevents the agent from being overwhelmed by irrelevant instructions on every turn.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Trash2 className="w-5 h-5 text-gray-500" /> Context Minimization
          </h3>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
            <h4 className="font-bold text-amber-900 mb-2">The 50% Heuristic</h4>
            <p className="text-amber-800 font-medium">
              Around the midpoint of the effective context window, reliability often drops enough that restarting becomes cheaper than arguing with the model.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Context rots. As a conversation grows, the agent's attention diffuses. It starts forgetting earlier constraints or hallucinating connections that don't exist. When you notice the agent starting to drift, do not correct it. Summarize the current state, open a fresh session, and hand off the summary.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-gray-500" /> System Calls vs MCP
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Prefer system calls over MCP (Model Context Protocol) when possible. Native system tools (like grep, ripgrep, or direct file reads) are often faster, more reliable, and less prone to protocol overhead than complex MCP server integrations. Give the agent direct, simple tools to observe its environment.
          </p>
        </section>
      </div>
    </div>
  );
}
