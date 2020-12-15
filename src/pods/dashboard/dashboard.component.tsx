import * as React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './dashboard.styles';
import { DASHBOARD_URL } from 'src/core/constants';
import { useAuth } from 'common/authorization';
import { Widget } from './dashboard-witdget.component';

interface Widget {
  title: string;
  description: string;
  items: { name: string; altText: string; url: string }[];
}

export const Dashboard = () => {
  const classes = useStyles();
  const [widgets, setWidgets] = React.useState<Widget[]>([]);
  const { token } = useAuth();

  React.useEffect(() => {
    fetch(DASHBOARD_URL, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) =>
      res.json().then((serialized) => {
        setWidgets(serialized.widgets);
      })
    );
  }, []);
  return (
    <div className={classes.container}>
      <Typography
        variant={'h3'}
        className={classes.pageTitle}
        data-testid="page-title"
      >
        Dashboard
      </Typography>
      <div className={classes.widgets}>
        {widgets && widgets.length > 0
          ? widgets.map((widget, sectionIndex) => (
              <Widget
                key={`section-${sectionIndex}`}
                title={widget.title}
                items={widget.items}
              />
            ))
          : null}
      </div>
    </div>
  );
};
