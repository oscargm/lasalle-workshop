import { Menu, MenuItem } from '@material-ui/core';
import * as React from 'react';
import { useAuth } from 'common/authorization';

interface AppbarMenuProps {
  anchorEl: Element;
  setAnchorEl: (element: Element) => void;
}

export const AppBarMenu = (props: AppbarMenuProps) => {
  const { anchorEl, setAnchorEl } = props;
  const { removeToken } = useAuth();
  const menuId = 'primary-search-account-menu';

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    removeToken();
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
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );
};
