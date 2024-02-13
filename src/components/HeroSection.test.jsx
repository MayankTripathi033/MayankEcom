import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import HeroSection from './HeroSection';

describe('HeroSection component', () => {
  const testData = {
    name: 'Test Store',
  };

  test('renders with provided data', () => {
    const { getByText, getByAltText } = render(<HeroSection myData={testData} />);
    
    // Check if the component renders the provided name
    expect(getByText('Test Store')).toBeInTheDocument();
    
    // Check if the component renders the provided image
    const heroImage = getByAltText('hero-section');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'images/hero.jpg');
    
    // Check if the component renders the "Shop Now" button
    expect(getByText('Shop Now')).toBeInTheDocument();
  });

  test('capitalizes the provided name', () => {
    const { getByText } = render(<HeroSection myData={testData} />);
    expect(getByText('TEST STORE')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<HeroSection myData={testData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
