import { Code } from 'lucide-react';
import { CodeSnippet } from '../CodeSnippet';
import { Tooltip } from '../Tooltip';

export function AnchorsSection() {
  return (
    <section id="anchors" className="mb-12 sm:mb-16 scroll-mt-24">
      <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        <Tooltip content="Context Anchors Section"><Code className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" /></Tooltip> Context Anchors
      </h2>
      <p>
        A context anchor is a short phrase that encodes an entire engineering methodology. It triggers trained conceptual clusters much more efficiently than verbose instructions.
      </p>
      
      <div className="my-8">
        <CodeSnippet code="Implement this using TDD Detroit School" language="prompt" />
      </div>
      
      <p>That tiny phrase implies:</p>
      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        {[
          { tag: 'tests first', tooltip: 'Write tests before writing the implementation code.' },
          { tag: 'classicist testing', tooltip: 'Test the observable state of the system, not the internal interactions.' },
          { tag: 'state-based assertions', tooltip: 'Verify the final state rather than the methods called.' },
          { tag: 'inside-out development', tooltip: 'Build domain logic first, then the outer layers.' },
          { tag: 'black-box testing', tooltip: 'Test functionality without knowing internal implementation details.' },
          { tag: 'minimal mocking', tooltip: 'Use real objects whenever possible instead of mocks.' }
        ].map(({ tag, tooltip }) => (
          <Tooltip key={tag} content={tooltip}>
            <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors">
              {tag}
            </span>
          </Tooltip>
        ))}
      </div>
      
      <h4 className="font-medium mb-3">Other useful anchors:</h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
        {[
          { tag: 'apply SOLID', tooltip: 'Follow the 5 principles of object-oriented design.' },
          { tag: 'prefer composition over inheritance', tooltip: 'Build complex objects by combining simpler ones.' },
          { tag: 'functional core / imperative shell', tooltip: 'Keep pure logic in the center, side-effects at the edges.' },
          { tag: 'hexagonal architecture', tooltip: 'Isolate core logic from outside concerns using ports and adapters.' },
          { tag: 'strangler fig refactor', tooltip: 'Gradually replace a legacy system by building new features around it.' },
          { tag: 'boy scout rule', tooltip: 'Always leave the code cleaner than you found it.' }
        ].map(({ tag, tooltip }) => (
          <li key={tag} className="flex items-center">
            <span className="mr-2">•</span>
            <Tooltip content={tooltip}>
              <span className="hover:text-gray-900 transition-colors border-b border-dashed border-gray-400 hover:border-gray-900">
                {tag}
              </span>
            </Tooltip>
          </li>
        ))}
      </ul>
    </section>
  );
}
