import { Menu, MenuItem } from '@material-ui/core';
import * as React from 'react';

interface AppbarMenuProps {
  anchorEl: Element;
  setAnchorEl: (element: Element) => void;
}

export const AppBarMenu = (props: AppbarMenuProps) => {
  const { anchorEl, setAnchorEl } = props;
  const menuId = 'primary-search-account-menu';

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};
