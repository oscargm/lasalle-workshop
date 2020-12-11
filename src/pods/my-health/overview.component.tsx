import * as React from 'react';
import {
  Card,
  CardContent,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { useStyles } from './overview.styles';
import List from '@material-ui/core/List/List';

interface OverviewProps {}

export const Overview = () => {
  const [user, setUser] = React.useState({
    name: 'John doe',
    age: 33,
    id: 1,
    sex: 'Male',
  });
  const classes = useStyles();

  React.useEffect(() => {
    console.log('user', user);
    console.log(
      'filteredUser',
      Object.keys(user).filter((k) => k === 'name')
    );
  }, []);
  return (
    <div>
      <Card className={classes.patientCard}>
        <CardContent>
          <Typography className={classes.title} color="secondary" gutterBottom>
            {user.name}
          </Typography>
          <List>
            {Object.keys(user)
              .filter((k) => k !== 'name')
              .map((k, itemIndex) => (
                <ListItem key={`item-${itemIndex}`}>
                  <ListItemText primary={k} secondary={user[k]} />
                </ListItem>
              ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};
