import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import Content from './Content';
import { callAction } from '../utils/dispatch';
import { MemoryRouter } from 'react-router-dom';

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...actual,
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
  };
});

vi.mock('../utils/dispatch', () => ({
  callAction: vi.fn(),
}));

const mockedUseSelector = useSelector as unknown as ReturnType<
  typeof vi.fn<(selector: (state: RootState) => unknown) => unknown>
>;

const mockedUseDispatch = useDispatch as unknown as ReturnType<
  typeof vi.fn<() => ReturnType<typeof vi.fn>>
>;

const mockedCallAction = callAction as unknown as ReturnType<
  typeof vi.fn<(dispatch: ReturnType<typeof vi.fn>) => { toggleShouldThrow: () => void }>
>;

describe('Content component', () => {
  const dispatchMock = vi.fn();
  const toggleShouldThrowMock = vi.fn();

  // Общий мок-стейт с нужными редьюсерами
  const baseMockState = {
    shouldThrowReducer: { shouldThrow: false },
    selectReducer: { items: [] },
    dataReducer: [],
    pageReducer: 1,
    valueReducer: { value: '' },
    paginationReducer: { pagination: 1 },
    loaderReducer: { isLoader: false },
  } as unknown as RootState;

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseDispatch.mockReturnValue(dispatchMock);
    mockedCallAction.mockReturnValue({
      toggleShouldThrow: toggleShouldThrowMock,
    });
  });

  it('renders ContentBox and button when shouldThrow is false', () => {
    mockedUseSelector.mockImplementation((selector) => selector(baseMockState));

    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /break the universe/i })).toBeInTheDocument();
  });

  it('throws error when shouldThrow is true', () => {
    mockedUseSelector.mockImplementation((selector) =>
      selector({
        ...baseMockState,
        shouldThrowReducer: { shouldThrow: true },
      })
    );

    expect(() =>
      render(
        <MemoryRouter>
          <Content />
        </MemoryRouter>
      )
    ).toThrowError('Error inside to Content');
  });

  it('calls toggleShouldThrow on button click', () => {
    mockedUseSelector.mockImplementation((selector) => selector(baseMockState));

    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /break the universe/i });
    fireEvent.click(button);

    expect(toggleShouldThrowMock).toHaveBeenCalled();
  });
});
