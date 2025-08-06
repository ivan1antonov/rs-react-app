import { vi } from 'vitest';

const navigateMock = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ id: '1' }),
    useNavigate: () => navigateMock,
  };
});

vi.mock('../services/services', () => ({
  getResults: vi.fn(),
}));

import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Details from './Details';
import { getResults } from '../services/services';

const mockPerson = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hairColor: 'Blond',
  skinColor: 'Fair',
  eyeColor: 'Blue',
  gender: 'Male',
  image: 'https://some-image.jpg',
  url: 'https://swapi.dev/api/people/1/',
};

describe('Details', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls navigate on close button click', async () => {
    (getResults as ReturnType<typeof vi.fn>).mockResolvedValue(mockPerson);

    render(
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
