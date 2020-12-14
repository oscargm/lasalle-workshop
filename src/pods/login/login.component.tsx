import * as React from 'react';
import { history } from 'core/routes/history';
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#ccc',
  },
  page: {
    width: '60%',
    margin: '0 auto',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    // border: '1px solid black',
    backgroundColor: '#eee',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '200px',
  },
}));

export const Login = () => {
  const classes = useStyles();
  const onLoginHandler = () => {
    history.push('/dashboard');
  };

  return (
    <div className={classes.background}>
      <div className={classes.page}>
        <Typography variant={'h3'}>Login</Typography>
        <div className={classes.form}>
          <TextField
            name={'username'}
            label={'username'}
            variant={'outlined'}
            type={'text'}
          />
          <TextField
            name={'password'}
            label={'password'}
            variant={'outlined'}
            type={'password'}
          />
          <Button
            variant={'contained'}
            color={'primary'}
            onClick={onLoginHandler}
          >
            Enter
          </Button>
          <div>
            <Link
              onClick={() => history.push('/register')}
              style={{ cursor: 'pointer' }}
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
