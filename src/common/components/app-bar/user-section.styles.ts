import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  userSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));
