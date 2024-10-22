import * as React from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { history } from 'core/routes/history';
import md5 from 'md5';
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import { registerUser } from './api/register.service';

const useStyles = makeStyles(() => ({
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
    height: '500px',
  },
}));

const RegisterInner: React.FC = () => {
  const classes = useStyles();
  const { addToast } = useToasts();
  const [state, setState] = React.useState({
    name: '',
    date: '',
    username: '',
    password: '',
    repassword: '',
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    stateProp: string
  ) => {
    let formValue = event.target.value;
    if (['password', 'repassword'].includes(stateProp)) {
      formValue = md5(formValue); //    some professional cipher instead
    }
    setState({ ...state, [stateProp]: formValue });
  };

  const onRegisterHandler = () => {
    if (state.password === state.repassword) {
      registerUser(state.username, state.password)
        .then((response) => {
          console.log('response', response);
          addToast('User created', { appearance: 'success' }, () => {
            setTimeout(() => {
              history.push('/');
            }, 3000);
          });
        })
        .catch((error: string) => {
          addToast(error, { appearance: 'error' });
        });
    } else {
      addToast('Passwords are different', { appearance: 'error' });
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes.page}>
        <Typography variant={'h3'}>Register</Typography>
        <div className={classes.form}>
          <TextField
            name={'name'}
            label={'name'}
            variant={'outlined'}
            type={'text'}
            onChange={(event) => handleChange(event, 'name')}
          />
          <TextField
            name={'date of birth'}
            label={'date of birth'}
            variant={'outlined'}
            type={'date'}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => handleChange(event, 'date')}
          />
          <TextField
            name={'username'}
            label={'username'}
            variant={'outlined'}
            type={'text'}
            onChange={(event) => handleChange(event, 'username')}
          />
          <TextField
            name={'password'}
            label={'password'}
            variant={'outlined'}
            type={'password'}
            onChange={(event) => handleChange(event, 'password')}
          />
          <TextField
            name={'repassword'}
            label={'repeat password'}
            variant={'outlined'}
            type={'password'}
            onChange={(event) => handleChange(event, 'repassword')}
          />
          <Button
            variant={'contained'}
            color={'primary'}
            onClick={onRegisterHandler}
          >
            Enter
          </Button>
          <div>
            <Link
              onClick={() => history.goBack()}
              style={{ cursor: 'pointer' }}
            >
              Already registered
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Register = RegisterInner;
