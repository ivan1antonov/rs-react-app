import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import { describe, it, expect } from 'vitest';
import { mockWindowReload } from '../test-utils/mockWindowReload';

describe('ErrorBoundary', () => {
  mockWindowReload();

  it('catches error and renders fallback UI', () => {
    const Thrower = () => {
      throw new Error('VVVroom');
    };
    // const onReload = vi.fn();
    render(
      <ErrorBoundary>
        <Thrower />
      </ErrorBoundary>
    );
    expect(
      screen.getByText(/There was an error on the page, please restart the application/i)
    ).toBeInTheDocument();

    const reloadButton = screen.getByText(/reload page/i);
    expect(reloadButton).toBeInTheDocument();

    fireEvent.click(reloadButton);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
