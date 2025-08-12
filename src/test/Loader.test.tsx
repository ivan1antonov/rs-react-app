import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loader from '../components/Loader';

describe('Loader', () => {
  it('render loader div and img with correct src and alt', () => {
    render(<Loader />);

    const loaderDiv = document.querySelector('.loader');
    expect(loaderDiv).toBeInTheDocument();

    const img = screen.getByAltText('loading...');
    expect(img).toBeInTheDocument();
  });
});
