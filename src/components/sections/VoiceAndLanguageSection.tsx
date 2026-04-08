import { Mic, ArrowRight } from 'lucide-react';
import { CodeSnippet } from '../CodeSnippet';
import { Tooltip } from '../Tooltip';

export function VoiceAndLanguageSection() {
  return (
    <section id="voice" className="mb-12 sm:mb-16 scroll-mt-24">
      <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        <Tooltip content="Voice & Language Section"><Mic className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" /></Tooltip> Speak First, Refine Later
      </h2>
      <p>
        One thing that dramatically improves my workflow with coding agents has nothing to do with prompts or models. It has to do with <strong>removing friction from thinking</strong>.
      </p>
      <p>
        When I explore ideas, I often use speech-to-text tools like Wispr Flow or the voice mode of coding assistants. Why? Because speaking is faster than typing when the goal is <strong>thinking out loud</strong>.
      </p>
      <p>Instead of carefully crafting a prompt, I simply say something like:</p>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
        "We probably need a small service that handles the LDAP lookup and caches the results locally. Maybe expose a simple API endpoint and let the frontend call that instead of hitting LDAP directly."
      </blockquote>
      <p>The transcript becomes the <strong>raw brainstorming material</strong>. The agent then helps turn that into structure.</p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Native Language vs English</h3>
      <p>Most documentation in projects still ends up in English (e.g., <code>TODO.md</code>, <code>SPEC.md</code>, <code>README.md</code>). Those files are written in English because they need to be readable by other developers, open-source contributors, future maintainers, and the LLM itself.</p>
      <p>But when working on <strong>business logic or feature ideas</strong>, I often switch to my <strong>native language</strong>. Not because the AI needs it. Because <strong>my brain does</strong>.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">Second Language</span>
          <p className="text-sm text-red-900 font-mono flex items-center justify-center gap-2 py-2">
            idea <ArrowRight className="w-3 h-3" aria-hidden="true" /> translate <ArrowRight className="w-3 h-3" aria-hidden="true" /> write
          </p>
          <p className="text-xs text-red-700 text-center mt-2">Introduces a constant translation step.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2 block">Native Language</span>
          <p className="text-sm text-emerald-900 font-mono flex items-center justify-center gap-2 py-2">
            idea <ArrowRight className="w-3 h-3" aria-hidden="true" /> write
          </p>
          <p className="text-xs text-emerald-700 text-center mt-2">Removes the mapping step entirely.</p>
        </div>
      </div>
      <p>For complex feature discussions, that difference matters.</p>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Brainstorming vs Final Instructions</h3>
      <p>This leads to a simple pattern:</p>
      
      <div className="space-y-6 my-6">
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-sm font-medium text-gray-700">Exploration Phase (Thinking)</span>
          </div>
          <div className="p-4 bg-white">
            <p className="text-sm text-gray-500 mb-2">Native language + voice input:</p>
            <CodeSnippet code="Wir brauchen wahrscheinlich eine kleine Cache-Schicht für die LDAP-Abfragen, sonst wird das Frontend langsam." language="german" />
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-medium text-gray-700">Implementation Phase (Executing)</span>
          </div>
          <div className="p-4 bg-white">
            <p className="text-sm text-gray-500 mb-2">Clear English instructions:</p>
            <CodeSnippet code="Implement an LDAP caching service.&#10;Expose a REST endpoint used by the frontend.&#10;Add tests for cache invalidation." language="english" />
          </div>
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">A Practical Workflow</h3>
      <p>Speech input works particularly well with coding agents because they are good at summarizing messy input, extracting tasks, and turning ideas into structure. Speech becomes <strong>the fastest way to dump ideas into the system</strong>.</p>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6 my-6 shadow-sm">
        <h4 className="font-medium mb-4 text-gray-900">The Loop:</h4>
        <ol className="list-decimal pl-5 space-y-3 text-gray-700">
          <li><strong>Brainstorm via voice</strong> (Wispr Flow / speech-to-text)</li>
          <li><strong>Agent summarizes ideas</strong></li>
          <li><strong>Convert ideas into structured tasks</strong></li>
          <li><strong>Execute with normal agent instructions</strong></li>
        </ol>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Example final instruction:</p>
          <CodeSnippet code="Implement the LDAP caching layer described above.&#10;Run CI and fix all findings on your way.&#10;Verify two stable CI runs before finishing." language="prompt" />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Human Cognitive Load</h3>
      <p>
        We talk about voice input and native language, which is great. But another huge factor is <strong>decision fatigue</strong>. Agents help because they remove:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1 sm:space-y-2 text-gray-700">
        <li>micro-decisions</li>
        <li>syntax recall</li>
        <li>boilerplate work</li>
      </ul>
      <p>By offloading these cognitive burdens to the agent, you preserve your mental energy for the high-level architecture and business logic.</p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl my-8">
        <h4 className="font-semibold text-blue-900 mb-2">The Real Insight</h4>
        <p className="text-blue-800 text-sm sm:text-base">
          Working with AI agents is not just about <strong>how we talk to machines</strong>. It is also about <strong>removing friction from how we think</strong>. Sometimes the best productivity boost is not a better prompt. It is simply speaking instead of typing, thinking in your native language, and letting the agent structure the result afterwards.
        </p>
      </div>
    </section>
  );
}
