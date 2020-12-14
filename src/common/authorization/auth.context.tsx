import * as React from 'react';

interface AuthProps {
  token: string;
}

const AuthContext = React.createContext(undefined);

const AuthProvider = (props) => {
  const [state, setState] = React.useState<AuthProps>({ token: '' });
  return (
    // <AuthContext.Provider value={[state, setState]}>
    //   {props.children}
    // </AuthContext.Provider>
    <AuthContext.Provider value={[state, setState]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
