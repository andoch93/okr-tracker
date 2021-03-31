import React from 'react';
import { render } from '@testing-library/react';

import { InfoCard } from '@components/Layout/InfoCard';

const props = {
  title: 'Card1',
  text: 'Text1',
  subtitle: 'Subtitle1',
  link: 'Link1',
};

describe('<InfoCard />', () => {
  it('should display required properties: Title and Content', function () {
    const { getByText } = render(<InfoCard title={props.title} text={props.text} />);
    expect(getByText(/Card1/i)).toBeInTheDocument();
    expect(getByText(/Text1/i)).toBeInTheDocument();
    expect.assertions(2);
  });

  it('should display optional properties: Subtitle and Link', function () {
    const { getByText } = render(<InfoCard {...props} />);
    expect(getByText(/Subtitle1/i)).toBeInTheDocument();
    expect(getByText(/Link1/i)).toBeInTheDocument();
    expect.assertions(2);
  });
});
