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
    height: '500px',
  },
}));

class RegisterInner extends React.Component {
  private classes;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      username: '',
      password: '',
      repassword: '',
    };
    this.classes = useStyles();
  }
  public handleNameChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.setState({ name: e.target.value });
  };

  public handleDateChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.setState({ date: e.target.value });
  };
  public handleUsernameChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.setState({ username: e.target.value });
  };
  public handlePasswordChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.setState({ password: e.target.value });
  };
  public handleRepasswordChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    this.setState({ repassword: e.target.value });
  };

  public onRegisterHandler = () => {
    console.log(this.state);
  };

  public render() {
    return (
      <div className={this.classes.background}>
        <div className={this.classes.page}>
          <Typography variant={'h3'}>Register</Typography>
          <div className={this.classes.form}>
            <TextField
              name={'name'}
              label={'name'}
              variant={'outlined'}
              type={'text'}
              onChange={this.handleNameChange}
            />
            <TextField
              name={'date of birth'}
              label={'date of birth'}
              variant={'outlined'}
              type={'date'}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleDateChange}
            />
            <TextField
              name={'username'}
              label={'username'}
              variant={'outlined'}
              type={'text'}
              onChange={this.handleUsernameChange}
            />
            <TextField
              name={'password'}
              label={'password'}
              variant={'outlined'}
              type={'password'}
              onChange={this.handlePasswordChange}
            />
            <TextField
              name={'repassword'}
              label={'repeat password'}
              variant={'outlined'}
              type={'password'}
              onChange={this.handleRepasswordChange}
            />
            <Button
              variant={'contained'}
              color={'primary'}
              onClick={this.onRegisterHandler}
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
  }
}

export const Register = RegisterInner;
