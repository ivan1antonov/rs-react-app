import { render, screen, fireEvent } from '@testing-library/react';
import Content from './Content';
import ErrorBoundary from './ErrorBoundary';
import { describe, it, expect, vi } from 'vitest';

export interface ContentBoxProps {
  data: { name: string; text: string }[];
}
export interface ContentProps extends ContentBoxProps {
  isError: () => void;
  shouldThrow?: boolean;
}

describe('Content', () => {
  it('render content with Button Error Test', () => {
    const isError = vi.fn();
    render(<Content isError={isError} data={[{ name: 'Test User', text: 'Hello World' }]} />);
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
        <Content isError={isError} data={[]} shouldThrow={true} />
      </ErrorBoundary>
    );
    const errorText = screen.getByText(/there was an error on the page/i);
    expect(errorText).toBeInTheDocument();
    const reloadButton = screen.getByText(/reload page/i);
    expect(reloadButton).toBeInTheDocument();
  });
});
