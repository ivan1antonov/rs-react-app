import { render, screen, fireEvent } from '@testing-library/react';
import Content from './Content';
import ErrorBoundary from './ErrorBoundary';
import { describe, it, expect, vi } from 'vitest';

describe('Content', () => {
  it('render content with Button Error Test', () => {
    const isError = vi.fn();
    render(
      <Content
        isError={isError}
        data={[{ name: 'Test User', text: 'Hello World', url: '/details/1' }]}
        shouldThrow={false}
        onItemClick={vi.fn()}
      />
    );
    const contentDiv = screen.getByRole('main');
    expect(contentDiv).toBeInTheDocument();

    const errorButton = screen.getByText(/break the universe/i);
    expect(errorButton).toBeInTheDocument();

    fireEvent.click(errorButton);
    expect(isError).toHaveBeenCalledTimes(1);
  });

  it('throws error when shouldThrow is true', () => {
    const isError = vi.fn();
    render(
      <ErrorBoundary>
        <Content isError={isError} data={[]} shouldThrow={true} onItemClick={vi.fn()} />
      </ErrorBoundary>
    );
    const errorText = screen.getByText(/there was an error on the page/i);
    expect(errorText).toBeInTheDocument();
    const reloadButton = screen.getByText(/reload page/i);
    expect(reloadButton).toBeInTheDocument();
  });
});
