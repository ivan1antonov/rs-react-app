import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Main from '../pages/Main';
import * as reactRouter from 'react-router-dom';
import { fetchResultsThunk } from '../store/thunks/thunk';

const mockDispatch = vi.fn();

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<typeof import('react-redux')>('react-redux');
  return {
    ...actual,
    useDispatch: () => mockDispatch,
    useSelector: vi.fn(),
  };
});

vi.mock('../components/Content', () => ({
  default: () => <div>Mocked Content</div>,
}));
vi.mock('../components/Pagination', () => ({
  default: () => <div>Mocked Pagination</div>,
}));
vi.mock('../store/thunks/thunk', () => ({
  fetchResultsThunk: vi.fn(),
}));
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
    Outlet: () => <div>Mocked Outlet</div>,
  };
});

describe('Main component', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('renders Content, Pagination and Outlet', () => {
    vi.mocked(reactRouter.useParams).mockReturnValue({});

    render(<Main />);

    expect(screen.getByText('Mocked Content')).toBeInTheDocument();
    expect(screen.getByText('Mocked Pagination')).toBeInTheDocument();
    expect(screen.getByText('Mocked Outlet')).toBeInTheDocument();

    expect(mockDispatch).toHaveBeenCalledWith(fetchResultsThunk({ query: 'all' }));

    const rightPanel = screen.getByText('Mocked Outlet').parentElement;
    expect(rightPanel?.className).toContain('hidden');
  });

  it('shows Outlet when id is present in params', () => {
    vi.mocked(reactRouter.useParams).mockReturnValue({ id: '123' });

    render(<Main />);

    const rightPanel = screen.getByText('Mocked Outlet').parentElement;
    expect(rightPanel?.className).not.toContain('hidden');
  });
});
