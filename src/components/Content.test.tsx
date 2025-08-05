import { render, screen, fireEvent } from '@testing-library/react';
import Content from './Content';
import ErrorBoundary from './ErrorBoundary';
import { describe, it, vi, beforeEach, afterEach, expect, type Mock } from 'vitest';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

const mockUseSelector = useSelector as unknown as Mock;
const mockUseDispatch = useDispatch as unknown as Mock;

const createMockState = (shouldThrow: boolean): RootState => ({
  valueReducer: { value: '' },
  shouldThrowReducer: { shouldThrow },
  paginationReducer: {
    pagination: 1,
  },
  loaderReducer: { isLoader: false },
  dataReducer: [],
  pageReducer: 1,
  selectReducer: { items: [] },
});

describe('Content component with vitest', () => {
  beforeEach(() => {
    mockUseDispatch.mockReturnValue(vi.fn());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders Content and triggers error on click', () => {
    mockUseSelector.mockImplementation((selector: (state: RootState) => unknown) =>
      selector(createMockState(false))
    );

    render(
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    );

    const button = screen.getByText(/break the universe/i);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const errorText = screen.getByText(/there was an error on the page/i);
    expect(errorText).toBeInTheDocument();
  });

  it('throws error immediately if shouldThrow is true', () => {
    mockUseSelector.mockImplementation((selector: (state: RootState) => unknown) =>
      selector(createMockState(true))
    );

    render(
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    );

    expect(screen.getByText(/there was an error on the page/i)).toBeInTheDocument();
  });
});
