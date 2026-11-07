import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useVirtualizer } from '@tanstack/react-virtual';

function renderVirtualizedRowCount(count) {
  function VirtualRows() {
    const virtualizer = useVirtualizer({
      count,
      getScrollElement: () => null,
      estimateSize: () => 80,
      overscan: 5,
    });

    return createElement('output', {
      'data-total-size': virtualizer.getTotalSize(),
    });
  }

  return renderToStaticMarkup(createElement(VirtualRows));
}

test('virtualizer calculates the three estimated chat row heights', () => {
  assert.match(renderVirtualizedRowCount(3), /data-total-size="240"/);
});

test('virtualizer handles an empty chat without a scroll element', () => {
  assert.match(renderVirtualizedRowCount(0), /data-total-size="0"/);
});
