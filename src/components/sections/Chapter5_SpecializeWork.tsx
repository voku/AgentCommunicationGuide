import { Network, Users, Compass, CheckSquare } from 'lucide-react';

export function Chapter5_SpecializeWork() {
  return (
    <div id="chapter-5" className="scroll-mt-24 mb-16 sm:mb-24">
      <h2 className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        <Network className="text-blue-600 w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" /> 
        5. Specialize the Work
      </h2>

      <p className="mb-10 text-xl font-medium text-gray-800 leading-relaxed">
        Treat models like coworkers with different strengths. You wouldn't give a junior developer a blank slate architecture task, and you wouldn't ask a principal architect to write boilerplate unit tests.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
          <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
            <Compass className="w-6 h-6 text-purple-600" /> Exploration & Greenfield
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When you don't know the exact architecture yet, you need a model that excels at reasoning and exploring the solution space. These models are great at generating initial scaffolding, proposing architectures, and brainstorming.
          </p>
          <div className="bg-purple-50 text-purple-900 p-4 rounded-xl text-sm border border-purple-100">
            <strong>Example:</strong> Using models like Claude 3.5 Sonnet or OpenAI o3-mini for initial architecture design and complex reasoning tasks.
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
          <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
            <CheckSquare className="w-6 h-6 text-emerald-600" /> Deterministic & Refactoring
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When the architecture is set and the constraints are tight, you need a model that strictly follows rules without trying to be "creative." These models are best for refactoring, writing tests, and applying strict linting rules.
          </p>
          <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl text-sm border border-emerald-100">
            <strong>Example:</strong> Using models like Gemini 2.5 Pro or specialized coding models for massive refactors across large codebases where strict adherence to existing patterns is required.
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
        <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" /> Multi-Model Routing
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The best workflows don't rely on a single model. They route the task to the right coworker. Use a reasoning model to write the specification and the tests, then hand that specification to a fast, deterministic model to write the implementation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This is why multi-model CLIs and agent frameworks are becoming the standard. They allow you to swap the "brain" depending on the specific phase of the execution cycle.
        </p>
      </div>
    </div>
  );
}
