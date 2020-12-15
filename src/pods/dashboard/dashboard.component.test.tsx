import * as React from 'react';
import { AppProviders } from 'src/app.providers';
import { render, getByText } from '@testing-library/react';
import { DashboardScene } from 'src/scenes/dashboard.scene';

describe('dashboard component', () => {
  it('should render', () => {
    render(
      <AppProviders>
        <DashboardScene />
      </AppProviders>
    );
    const title = getByText('Dashboard');
    expect(title).toBeDefined();
  });
});
