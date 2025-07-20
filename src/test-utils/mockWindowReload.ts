import { afterEach, beforeEach, vi } from 'vitest';

export function mockWindowReload() {
  const original = window.location;
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...original,
        reload: vi.fn(),
      },
    });
  });
  afterEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: original,
    });
  });
}
