import * as React from 'react';
import { AppProviders } from 'src/app.providers';
import { render } from '@testing-library/react';
import { Widget } from './dashboard-witdget.component';
const mockedItems = [
  { name: 'name-1', altText: 'alt-text-1', url: 'url' },
  { name: 'name-1', altText: 'alt-text-1', url: 'url' },
  { name: 'name-1', altText: 'alt-text-1', url: 'url' },
  { name: 'name-1', altText: 'alt-text-1', url: 'url' },
];

describe('widget component', () => {
  it('should render', () => {
    const { getByTestId, getAllByTestId } = render(
      <AppProviders>
        <Widget title={'title'} items={mockedItems} />
      </AppProviders>
    );
    // const title = getByText('Dashboard');
    expect(getByTestId('widget-title').textContent).toStrictEqual('title');
    expect(getAllByTestId('widget-item')).toHaveLength(4);
    expect(getAllByTestId('widget-link')).toHaveLength(4);
  });
});
