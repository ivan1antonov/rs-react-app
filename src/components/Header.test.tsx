import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import * as reactRouterDom from 'react-router-dom';
import { callAction } from '../utils/dispatch';
import type { CallActionReturn } from '../utils/dispatch';

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof reactRedux>('react-redux');
  return {
    ...actual,
    useDispatch: vi.fn(),
    useSelector: vi.fn(),
  };
});

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof reactRouterDom>('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

vi.mock('../utils/dispatch', () => ({
  callAction: vi.fn(),
}));

describe('Header', () => {
  const mockDispatch = vi.fn();
  const mockNavigate = vi.fn();

  let mockActions: CallActionReturn;

  beforeEach(() => {
    vi.mocked(reactRedux.useDispatch).mockReturnValue(mockDispatch);
    vi.mocked(reactRedux.useSelector).mockImplementation((selector) =>
      selector({ valueReducer: { value: 'test' } })
    );
    vi.mocked(reactRouterDom.useNavigate).mockReturnValue(mockNavigate);

    mockActions = {
      showLoader: vi.fn(),
      toggleLoader: vi.fn(),
      setPagination: vi.fn(),
      clearPagination: vi.fn(),
      createShouldThrow: vi.fn(),
      toggleShouldThrow: vi.fn(),
      setValue: vi.fn(),
      clearValue: vi.fn(),
      setPage: vi.fn(),
      addSelect: vi.fn(),
      removeSelect: vi.fn(),
      clearSelect: vi.fn(),
    };

    vi.mocked(callAction).mockReturnValue(mockActions);
  });

  it('renders and handles search button click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/do you want find anyone/i)).toBeInTheDocument();

    const searchBtn = screen.getByRole('button', { name: /Search/i });
    expect(searchBtn).toBeInTheDocument();

    fireEvent.click(searchBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/');
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockActions.clearValue).toHaveBeenCalled();
  });

  it('navigates to About page on button click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const aboutBtn = screen.getByRole('button', { name: /About author/i });
    fireEvent.click(aboutBtn);
    expect(mockNavigate).toHaveBeenCalledWith('about');
  });
});
