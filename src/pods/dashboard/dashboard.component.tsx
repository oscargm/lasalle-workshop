import * as React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useStyles } from './dashboard.styles';

export const Dashboard = () => {
  const classes = useStyles();
  const [user, setUser] = React.useState(null);
  const [sections, setSections] = React.useState<{ title: string; items: string[]; buttons: string[] }[]>();

  React.useEffect(() => {
    setSections(
      ['My health', 'Notifications', 'My doctor', 'Appointments', 'Agenda'].map((sectionTitle) => ({
        title: sectionTitle,
        items: ['item-1', 'item-2', 'item-3'],
        buttons: ['details', 'close'],
      }))
    );
  }, []);
  return (
    <div>
      <Typography variant={'h3'}>Dashboard</Typography>
      <div className={classes.sections}>
        {sections && sections.length > 0
          ? sections.map((section, sectionIndex) => (
              <div className={classes.sectionWrapper} key={`section-${sectionIndex}`}>
                <Card className={classes.section}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      {section.title}
                    </Typography>
                    {section.items.map((item, itemIndex) => (
                      <Typography variant="body2" component="p" key={`item-${itemIndex}`}>
                        {item}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    {section.buttons.map((button, buttonIndex) => (
                      <Button
                        size="small"
                        key={`action-${buttonIndex}`}
                        color={buttonIndex % 2 === 0 ? 'primary' : 'secondary'}
                      >
                        {button}
                      </Button>
                    ))}
                  </CardActions>
                </Card>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
