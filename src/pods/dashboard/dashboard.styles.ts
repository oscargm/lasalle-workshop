import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  section: {
    minWidth: 275,
  },
  sectionWrapper: {
    padding: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  sections: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
}));
