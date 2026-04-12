import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';

import { PromptExampleStack, PromptPatternCard } from './PromptExampleLayouts';
import { Prompt13_MomentumMissingness } from './Prompt13_MomentumMissingness';
import { Prompt14_VerifyWithTests } from './Prompt14_VerifyWithTests';

const prompt13Source = readFileSync(new URL('./Prompt13_MomentumMissingness.tsx', import.meta.url), 'utf8');

test('PromptExampleStack uses the default "Why this works" note title', () => {
  const html = renderToStaticMarkup(
    <PromptExampleStack
      title="Validation example"
      intro="Intro text"
      entries={[{ label: 'Best', content: 'Do the work.', tone: 'blue' }]}
      note="Reasoning matters."
    />,
  );

  assert.match(html, /Validation example/);
  assert.match(html, /Intro text/);
  assert.match(html, /Why this works/);
  assert.match(html, /Reasoning matters\./);
});

test('PromptExampleStack respects a custom note title', () => {
  const html = renderToStaticMarkup(
    <PromptExampleStack
      entries={[{ label: 'Weak', content: 'Just do it.', tone: 'amber' }]}
      noteTitle="Why this works better"
      note="It adds a concrete constraint."
    />,
  );

  assert.match(html, /Why this works better/);
  assert.match(html, /It adds a concrete constraint\./);
});

test('PromptPatternCard hides the bad example when none is provided', () => {
  const html = renderToStaticMarkup(
    <PromptPatternCard title="Tooling guardrail" best="Run the linter." why="Tooling closes the loop." />,
  );

  assert.match(html, /Tooling guardrail/);
  assert.doesNotMatch(html, />Bad</);
  assert.match(html, />Best</);
});

test('Prompt 14 includes the new combined coverage example and explanation', () => {
  const html = renderToStaticMarkup(<Prompt14_VerifyWithTests />);

  assert.match(html, /Combined example — raise the bar for coverage/);
  assert.match(html, /Please add some more tests\./);
  assert.match(html, /skeptical maintainer would accept the coverage/);
  assert.match(html, /expose at least one real issue, missing edge case, or broken assumption/);
  assert.match(html, /works better than “please add some more tests” because it defines the quality bar/);
});

test('Prompt 14 keeps multiple verification patterns, not just one shallow test instruction', () => {
  const html = renderToStaticMarkup(<Prompt14_VerifyWithTests />);

  const stackCount = (html.match(/Why this works/g) ?? []).length;
  assert.ok(stackCount >= 6, `expected at least 6 verification examples, got ${stackCount}`);
  assert.match(html, /Start planned feature work with TDD/);
  assert.match(html, /Validate test logic end-to-end/);
  assert.match(html, /Add tests that hunt for regressions/);
});

test('Prompt 13 no longer ships unresolved placeholder text in the public prompt example', () => {
  renderToStaticMarkup(<Prompt13_MomentumMissingness />);

  assert.doesNotMatch(prompt13Source, /\[placeholder\]/);
  assert.doesNotMatch(prompt13Source, /\[the point of done as defined in your custom instructions\]/);
});
