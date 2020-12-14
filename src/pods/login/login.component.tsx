import * as React from 'react';
import { history } from 'core/routes/history';
import { useToasts } from 'react-toast-notifications';
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import { login } from './api/login.service';
import { useAuth } from 'src/common/authorization/auth.hook';

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
  const [loginData, setLoginData] = React.useState<{
    username: string;
    password: string;
  }>({ username: '', password: '' });
  const classes = useStyles();
  const { addToast } = useToasts();
  const { setToken } = useAuth();
  const onLoginHandler = () => {
    login(loginData.username, loginData.password)
      .then((response) => {
        console.log('response', JSON.stringify(response));
        setToken(response['access_token']);
        history.push('/dashboard');
      })
      .catch((error: string) => {
        addToast(error, { appearance: 'error' });
      });
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
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
            onChange={handleChange}
          />
          <TextField
            name={'password'}
            label={'password'}
            variant={'outlined'}
            type={'password'}
            onChange={handleChange}
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
