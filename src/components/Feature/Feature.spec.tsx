import React from 'react';
import { render } from '@testing-library/react';

import { Feature } from '@components/Feature';

describe('<Feature />', () => {
  it('should load Feature component', function () {
    const { getByText } = render(<Feature />);
    expect(getByText(/feature/i)).toBeInTheDocument();
  });
});
