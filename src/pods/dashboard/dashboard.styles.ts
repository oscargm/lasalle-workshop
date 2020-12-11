import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
  widget: {
    minWidth: 275,
    border: '0.5px solid #ccc',
  },
  widgetWrapper: {
    padding: theme.spacing(1),
  },
  pageTitle: { marginBottom: '1.5rem' },
  title: {
    fontSize: 18,
    textAlign: 'center',
    borderBottom: '1px solid black',
  },
  pos: {
    marginBottom: 12,
  },
  widgets: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
}));
