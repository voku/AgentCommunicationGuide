import { Palette, LayoutTemplate, Component, Type, Maximize, MousePointerClick, FormInput, MessageSquareWarning } from 'lucide-react';
import { CodeSnippet } from '../CodeSnippet';

export function UIStyleGuideSection() {
  return (
    <section id="ui-style-guide" className="mb-12 sm:mb-16 scroll-mt-24">
      <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        <Palette className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" /> Providing UI Style Guides
      </h2>

      <div className="prose prose-blue max-w-none mb-8 text-gray-600">
        <p>
          When developers use AI coding agents to generate UI code, they often assume the agent will automatically produce interfaces that match the project's design. In reality, AI models know many different UI patterns, but they don’t know which ones your project expects.
        </p>
        <p>
          Without guidance, agents may mix patterns from several frameworks (e.g., a Material-style form on one page, a Bootstrap-style table on another, and a Tailwind layout on a third). This leads to UI fragmentation, where each generated page looks slightly different.
        </p>
        <p>
          The solution is to provide the AI agent with a <strong>UI style guide prompt</strong>. This gives the agent a design system to follow, ensuring that all generated interfaces remain visually and structurally consistent.
        </p>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-4 sm:mb-6">What a UI Style Guide Should Contain</h3>
      <p className="mb-6 text-gray-600">Unlike a traditional design system document, a UI guide for AI agents should focus on implementation rules, not only design theory. The goal is to make it easy for the AI to generate correct UI structures automatically.</p>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900"><LayoutTemplate className="w-4 h-4 text-blue-500" /> 1. Layout Structure</h4>
          <p className="text-sm text-gray-600">Define how pages are structured (e.g., Navigation → Header → Content → Footer). This prevents agents from inventing new page structures for every screen.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900"><Component className="w-4 h-4 text-blue-500" /> 2. Component Consistency</h4>
          <p className="text-sm text-gray-600">Specify a small set of reusable UI components (Buttons, Forms, Tables, Cards). Instead of generating custom elements each time, the agent should reuse these.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900"><Type className="w-4 h-4 text-blue-500" /> 3. Typography Hierarchy</h4>
          <p className="text-sm text-gray-600">Define a consistent typography structure (H1 for page title, H2 for section, etc.) so agents avoid arbitrary heading levels or inconsistent font sizes.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900"><Maximize className="w-4 h-4 text-blue-500" /> 4. Spacing & Rhythm</h4>
          <p className="text-sm text-gray-600">Provide a spacing scale (e.g., 4px, 8px, 16px, 24px). Agents should follow this scale rather than inventing random margins and paddings.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900"><MousePointerClick className="w-4 h-4 text-blue-500" /> 5. Button Rules</h4>
          <p className="text-sm text-gray-600">Establish clear hierarchy rules (Primary for main action, Secondary for optional, Danger for destructive). Avoid multiple primary actions in the same context.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900"><FormInput className="w-4 h-4 text-blue-500" /> 6. Form Patterns</h4>
          <p className="text-sm text-gray-600">Enforce consistent structures (Label → Input → Helper text → Validation). Validation messages must appear close to the relevant field.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm sm:col-span-2">
          <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900"><MessageSquareWarning className="w-4 h-4 text-blue-500" /> 7. Feedback & Status</h4>
          <p className="text-sm text-gray-600">Interfaces should clearly communicate system status using standard components (Success/Error alerts, Loading indicators). Never allow silent failures.</p>
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-8 sm:mt-10 mb-3 sm:mb-4">Example UI Style Guide Prompt</h3>
      <p className="mb-4 text-gray-600">Below is a reusable prompt that can be provided to AI coding agents to enforce these rules:</p>
      <CodeSnippet
        language="markdown"
        code={`# UI Style Guide

When generating UI code, follow these interface guidelines:

## 1. Layout Structure
All pages must follow the application layout: Header -> Sidebar navigation -> Page header -> Content area -> Footer. Do not invent new layout structures unless explicitly requested.

## 2. Component Usage
Prefer reusable components (buttons, tables, forms, cards, dialogs, alerts). Avoid creating custom UI elements unless necessary.

## 3. Typography
Use a consistent hierarchy: H1 (page title), H2 (section title), H3 (subsection), Body (normal content). Avoid skipping heading levels.

## 4. Spacing
Use consistent spacing increments: 4px, 8px, 16px, 24px. Do not use arbitrary spacing values.

## 5. Buttons
Follow button hierarchy rules: Primary (main action), Secondary (secondary action), Danger (destructive action). Do not place multiple primary buttons in the same context.

## 6. Forms
Forms must follow this structure: Label -> Input -> Helper text -> Validation message. Always include clear validation feedback.

## 7. Feedback
All user actions must provide feedback. Use success alerts, error alerts, loading indicators, and confirmation dialogs. Never allow silent failures.

## 8. Consistency
Prefer existing UI patterns instead of inventing new ones. If uncertain, choose the simplest consistent component structure.`}
      />

      <div className="mt-8 bg-blue-50/50 border border-blue-100 rounded-xl p-5 sm:p-6">
        <h4 className="font-semibold text-blue-900 mb-2">Why This Works Well With AI</h4>
        <p className="text-sm sm:text-base text-blue-800">
          Instead of asking the AI to <em>design</em> the UI, you are asking it to <em>implement</em> the UI system. This distinction dramatically improves results by reducing design ambiguity, preventing inconsistent layouts, ensuring reusable component patterns, and making generated interfaces easier to maintain.
        </p>
      </div>

      <div className="mt-6 bg-purple-50/50 border border-purple-100 rounded-xl p-5 sm:p-6">
        <h4 className="font-semibold text-purple-900 mb-2">Pro Tip: Separate Your Rules</h4>
        <p className="text-sm sm:text-base text-purple-800">
          The difference between UX rules, UI rules, and architecture rules for AI agents is crucial. Most teams mix these up, and separating them makes AI-generated code much more reliable. Keep your UI Style Guide focused purely on visual implementation, while maintaining separate guidelines for UX flows and system architecture.
        </p>
      </div>
    </section>
  );
}
