import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';

vi.mock('../components/Header', () => ({
  default: () => <header data-testid="mock-header">Mock Header</header>,
}));

describe('Layout', () => {
  it('renders logo, header and outlet', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const logo = screen.getByAltText('logo') as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('star-wars.svg');

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
