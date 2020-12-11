import * as React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './single-view.styles';
import { RocheAppBar } from 'src/common/components/app-bar/app-bar.component';

export const SingleView: React.FunctionComponent = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <>
      <RocheAppBar />
      {/* <Tabs value={1} indicatorColor="primary" textColor="primary">
        <Tab label={t('layout.reportList')} />
        <Tab label={t('layout.configuration')} />
      </Tabs> */}
      <Container className={classes.container} maxWidth={'lg'}>
        {children}
      </Container>
    </>
  );
};
