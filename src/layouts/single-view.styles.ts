import { makeStyles } from '@material-ui/core/styles';

const heightTotal = { height: '100%' };

export const useStyles = makeStyles({
  '@global': {
    html: {
      ...heightTotal,
    },
    body: {
      ...heightTotal,
      background: 'aliceblue',
    },
    '#root': {
      ...heightTotal,
    },
  },
  root: {
    paddingTop: 35,
    paddingLeft: 70,
    paddingRight: 70,
    paddingBottom: 30,
  },
});
