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
import { history } from 'core/routes/history';

interface Item {
  name: string;
  altText: string;
  url: string;
}

interface WidgetProps {
  title: string;
  items: Item[];
}

export const Widget = (props: WidgetProps) => {
  const classes = useStyles();
  const { title, items } = props;
  return (
    <div className={classes.widgetWrapper}>
      <Card className={classes.widget}>
        <CardContent>
          <Typography
            className={classes.title}
            color="secondary"
            gutterBottom
            data-testid={'widget-title'}
          >
            {title}
          </Typography>
          <List>
            {items.map((item, itemIndex) => (
              <ListItem key={`item-${itemIndex}`} data-testid={'widget-item'}>
                <Link onClick={() => history.push(item.url)}>
                  <ListItemText
                    primary={item.name}
                    secondary={item.altText}
                    data-testid={'widget-link'}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};
