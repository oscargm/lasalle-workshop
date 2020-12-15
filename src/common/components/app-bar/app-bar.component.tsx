import * as React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './app-bar.styles';
import { AppBarMenu } from './menu.component';
import { UserSection } from './user-section.component';

export const RocheAppBar = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {t('appBar.appName')}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={t('appBar.searchPlaceholder')}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <UserSection setAnchorEl={setAnchorEl} />
        </Toolbar>
      </AppBar>
      <AppBarMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  );
};
