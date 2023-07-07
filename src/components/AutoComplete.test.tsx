import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AutoComplete from './Autocomplete';

describe('AutoComplete Component', () => {
  test('renders autocomplete component', () => {
    const data = ['Test', 'Auto', 'Complete'];
    render(<AutoComplete data={data} />);
    const inputElement = screen.getByPlaceholderText(/start typing.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test('filters suggestions on input', async () => {
    const data = ['Test', 'Auto', 'Complete'];
    render(<AutoComplete data={data} />);
    const inputElement = screen.getByPlaceholderText(/start typing.../i);

    fireEvent.change(inputElement, { target: { value: 'Aut' } });

    // Use findAllByText with a regex matcher
    const suggestions = await screen.findAllByText(/Aut/i);
    expect(suggestions[0]).toBeInTheDocument();
  });
});
