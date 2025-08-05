import * as ReactDOMClient from 'react-dom/client';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { Mock } from 'vitest';

vi.mock('react-dom/client', () => {
  return {
    createRoot: vi.fn(() => ({
      render: vi.fn(),
    })),
  };
});

describe('main.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.resetModules();
  });

  it('calls createRoot and render', async () => {
    await import('./main.tsx');

    const createRootMock = ReactDOMClient.createRoot as unknown as Mock;
    expect(createRootMock).toHaveBeenCalledWith(document.getElementById('root'));

    const rootInstance = createRootMock.mock.results[0].value;
    expect(rootInstance.render).toHaveBeenCalled();
  });

  it('throws error if root container is missing', async () => {
    document.body.innerHTML = '';

    await expect(async () => {
      await import('./main.tsx');
    }).rejects.toThrow('Root element not found');
  });
});
