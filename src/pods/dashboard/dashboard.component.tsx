import * as React from 'react';
import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  ListItemText,
  Link,
} from '@material-ui/core';
import { useStyles } from './dashboard.styles';
import { DASHBOARD_URL } from 'src/core/constants';
import { history } from 'core/routes/history';
import { useAuth } from 'src/common/authorization/auth.hook';

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
        console.log('serialized', serialized);
        setWidgets(serialized.widgets);
      })
    );
  }, []);
  return (
    <div className={classes.container}>
      <Typography variant={'h3'} className={classes.pageTitle}>
        Dashboard
      </Typography>
      <div className={classes.widgets}>
        {widgets && widgets.length > 0
          ? widgets.map((widget, sectionIndex) => (
              <div
                className={classes.widgetWrapper}
                key={`section-${sectionIndex}`}
              >
                <Card className={classes.widget}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="secondary"
                      gutterBottom
                    >
                      {widget.title}
                    </Typography>
                    <List>
                      {widget.items.map((item, itemIndex) => (
                        <ListItem key={`item-${itemIndex}`}>
                          <Link onClick={() => history.push(item.url)}>
                            <ListItemText
                              primary={item.name}
                              secondary={item.altText}
                            />
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  {/* <CardActions>
                    {section.buttons.map((button, buttonIndex) => (
                      <Button
                        size="small"
                        key={`action-${buttonIndex}`}
                        color={buttonIndex % 2 === 0 ? 'primary' : 'secondary'}
                      >
                        {button}
                      </Button>
                    ))}
                  </CardActions> */}
                </Card>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
