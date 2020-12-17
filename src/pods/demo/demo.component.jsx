import { Button, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as React from 'react';
import {
  StateFullComponentWithProps,
  StatelessComponent,
  StateLessComponentWithProps,
} from './stateless.component';

export const Demo = () => {
  const [state, setState] = React.useState(null);
  const getCat = () => {
    fetch('https://api.thecatapi.com/v1/images/search').then((response) => {
      response.json().then((serialized) => {
        setState(serialized[0]);
      });
    });
  };

  return (
    <div style={{ width: '80%', textAlign: 'center' }}>
      <Button onClick={getCat} variant={'outlined'}>
        Show me a cat
      </Button>
      {state !== null ? (
        <img src={state.url} width={state.width} height={state.height} />
      ) : null}
    </div>
  );
};
