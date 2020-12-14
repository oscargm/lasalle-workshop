import * as React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './single-view.styles';
import { RocheAppBar } from 'common/components';

export const SingleView: React.FunctionComponent = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <RocheAppBar />
      <Container className={classes.container} maxWidth={'lg'}>
        {children}
      </Container>
    </>
  );
};
