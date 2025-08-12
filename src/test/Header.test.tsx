import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from '../components/Header';
import { MemoryRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import * as reactRouterDom from 'react-router-dom';
import { callAction } from '../store/services/dispatch';
import type { CallActionReturn } from '../store/services/dispatch';

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

vi.mock('../store/services/dispatch', () => ({
  callAction: vi.fn(),
}));

describe('Header component', () => {
  const mockDispatch = vi.fn();
  const mockNavigate = vi.fn();

  let mockActions: CallActionReturn;

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(reactRedux.useDispatch).mockReturnValue(mockDispatch);
    vi.mocked(reactRedux.useSelector).mockImplementation((selector) =>
      selector({
        valueReducer: 'test',
        switcherReducer: { isDark: false },
      })
    );
    vi.mocked(reactRouterDom.useNavigate).mockReturnValue(mockNavigate);

    mockActions = {
      setValue: vi.fn(),
      clearValue: vi.fn(),
      searchData: vi.fn(),
      showLoader: vi.fn(),
      toggleLoader: vi.fn(),
      setPagination: vi.fn(),
      clearPagination: vi.fn(),
      createShouldThrow: vi.fn(),
      toggleShouldThrow: vi.fn(),
      setPage: vi.fn(),
      addSelect: vi.fn(),
      removeSelect: vi.fn(),
      clearSelect: vi.fn(),
      toggleTheme: vi.fn(),
      clearData: vi.fn(),
    };

    vi.mocked(callAction).mockReturnValue(mockActions);
  });

  it('renders input and buttons and handles search button click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/do you want find anyone/i);
    expect(input).toBeInTheDocument();

    const searchBtn = screen.getByRole('button', { name: /search/i });
    expect(searchBtn).toBeInTheDocument();

    fireEvent.click(searchBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/');
    expect(mockActions.searchData).toHaveBeenCalledWith('test');
    expect(mockActions.clearValue).toHaveBeenCalled();
  });

  it('navigates to About page on about button click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const aboutBtn = screen.getByRole('button', { name: /about author/i });
    expect(aboutBtn).toBeInTheDocument();

    fireEvent.click(aboutBtn);
    expect(mockNavigate).toHaveBeenCalledWith('about');
  });
});
