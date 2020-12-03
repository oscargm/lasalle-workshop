import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Container, AppBar, Tab } from '@material-ui/core';
import { useStyles } from './single-view.styles';

export const SingleView: React.FunctionComponent = (props) => {
  const { children } = props;
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <>
      <AppBar title={t('layout.mainTitle')} position="relative" />
      <Tabs value={1} indicatorColor="primary" textColor="primary">
        <Tab label={t('layout.reportList')} disabled />
        <Tab label={t('layout.configuration')} />
      </Tabs>
      <Container classes={styles} maxWidth={false}>
        {children}
      </Container>
    </>
  );
};
