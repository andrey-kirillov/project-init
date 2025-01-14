import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from './testComponent';

describe('TestComponent', () => {
  it('should render', () => {
    const { getByText} = render(<TestComponent />);

    expect(getByText('Test Component')).toBeTruthy();
  });
});
