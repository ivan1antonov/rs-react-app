import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { MockedFunction } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Details from '../pages/Details';
import { useGetDetailPersonQuery } from '../store/services/starwars';

type HookReturn = ReturnType<typeof useGetDetailPersonQuery>;

const navigateMock = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ id: '1' }),
    useNavigate: () => navigateMock,
  };
});

vi.mock('../store/services/starwars', () => ({
  useGetDetailPersonQuery: vi.fn(),
}));

const createMockReturn = (overrides?: Partial<HookReturn>): HookReturn => ({
  data: undefined,
  isLoading: false,
  isError: false,
  isSuccess: false,
  isUninitialized: false,
  status: 'uninitialized',
  refetch: vi.fn(),
  fulfilledTimeStamp: undefined,
  endpointName: 'useGetDetailPersonQuery',
  originalArgs: undefined,
  requestId: '',
  startedTimeStamp: 0,
  error: undefined,
  ...overrides,
});

describe('Details component', () => {
  const mockData = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hairColor: 'Blond',
    skinColor: 'Fair',
    eyeColor: 'Blue',
    gender: 'Male',
    image: 'https://some-image.jpg',
  };

  let mockHook: MockedFunction<typeof useGetDetailPersonQuery>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockHook = useGetDetailPersonQuery as MockedFunction<typeof useGetDetailPersonQuery>;
  });

  it('renders data and navigates on close', async () => {
    mockHook.mockReturnValue(createMockReturn({ data: mockData, isSuccess: true }));

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(mockData.name)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('shows loader', () => {
    mockHook.mockReturnValue(createMockReturn({ isLoading: true }));

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(screen.getByAltText('loading...')).toBeInTheDocument();
  });

  it('shows error message', () => {
    mockHook.mockReturnValue(createMockReturn({ isError: true }));

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    expect(screen.getByText(/sorry, we could not get data/i)).toBeInTheDocument();
  });
});
