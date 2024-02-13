// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Nav from './Nav'; 

// test('Menu icon opens and closes menu when clicked', () => {
//   const { getByText, getByTestId } = render(<Nav />);
  
//   // Menu icon should not be visible initially
//   expect(() => getByTestId('close-icon')).toThrow();

//   // Click on menu icon to open menu
//   fireEvent.click(getByTestId('menu-icon'));

//   // Menu icon should now be visible
//   expect(getByTestId('close-icon')).toBeInTheDocument();

//   // Click on close icon to close menu
//   fireEvent.click(getByTestId('close-icon'));

//   // Menu icon should disappear again
//   expect(() => getByTestId('close-icon')).toThrow();
// });

// test('Menu items are rendered correctly', () => {
//   const { getByText } = render(<Nav />);

//   expect(getByText('Home')).toBeInTheDocument();
//   expect(getByText('About')).toBeInTheDocument();
//   expect(getByText('Products')).toBeInTheDocument();
//   expect(getByText('Contact')).toBeInTheDocument();
//   expect(getByText('0')).toBeInTheDocument(); // Cart count
// });
