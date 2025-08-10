import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Main from '../pages/Main';
import * as reactRedux from 'react-redux';
import * as reactRouter from 'react-router-dom';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: () => vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
  Outlet: () => <div>Mocked Outlet</div>,
}));

vi.mock('../components/Content', () => {
  const MockContent = () => <div>Mocked Content</div>;
  MockContent.displayName = 'MockContent';
  return { default: MockContent };
});

vi.mock('../components/Pagination', () => {
  const MockPagination = () => <div>Mocked Pagination</div>;
  MockPagination.displayName = 'MockPagination';
  return { default: MockPagination };
});

describe('Main', () => {
  beforeEach(() => {
    vi.mocked(reactRedux.useSelector).mockReset();
    vi.mocked(reactRouter.useParams).mockReset();
  });

  it('renders components and applies light theme and hides outlet panel', () => {
    vi.mocked(reactRedux.useSelector).mockImplementation((selector) =>
      selector({
        switcherReducer: { isDark: false },
      })
    );
    vi.mocked(reactRouter.useParams).mockReturnValue({});

    render(<Main />);

    expect(screen.getByText('Mocked Content')).toBeInTheDocument();
    expect(screen.getByText('Mocked Pagination')).toBeInTheDocument();
    expect(screen.getByText('Mocked Outlet')).toBeInTheDocument();

    const wrapper = screen.getByText('Mocked Content').closest('.main-wrapper');
    expect(wrapper).toHaveClass('main-wrapper');
    expect(wrapper).not.toHaveClass('dark');

    const rightPanel = screen.getByText('Mocked Outlet').parentElement;
    expect(rightPanel).toHaveClass('main-right');
    expect(rightPanel).toHaveClass('hidden');
  });

  it('renders with dark theme and shows outlet panel when id present', () => {
    vi.mocked(reactRedux.useSelector).mockImplementation((selector) =>
      selector({
        switcherReducer: { isDark: true },
      })
    );
    vi.mocked(reactRouter.useParams).mockReturnValue({ id: '42' });

    render(<Main />);

    const wrapper = screen.getByText('Mocked Content').closest('.main-wrapper');
    expect(wrapper).toHaveClass('dark');

    const rightPanel = screen.getByText('Mocked Outlet').parentElement;
    expect(rightPanel).toHaveClass('main-right');
    expect(rightPanel).not.toHaveClass('hidden');
  });
});
