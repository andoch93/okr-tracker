import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-extended';

import { Header } from '@components/Header';

describe('<Header />', function () {
  it('should load the Header component', function () {
    const component = render(<Header />);
    expect(component).toBeTruthy();
  });
  it('should contain the Navbar', function () {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeTruthy();
  });
  it('should load Image tag', function () {
    render(<Header />);
    expect(screen.getByTestId('image-placeholder')).toBeTruthy();
  });
});
