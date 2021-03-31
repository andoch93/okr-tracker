import React from 'react';
import { render } from '@testing-library/react';

import { InfoSection } from '@components/InfoSection';

describe('<InfoSection />', () => {
  it('should render InfoSection component', () => {
    const { getByText } = render(<InfoSection />);
    expect(getByText(/Info Section/i)).toBeInTheDocument();
  });
});
