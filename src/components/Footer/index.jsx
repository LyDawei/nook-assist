import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import {
  TextField,
  InputAdornment,
  IconButton,
  Toolbar,
  AppBar,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BottomDrawer from './bottom-drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#f5f5f5',
  },
  buttons: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar>
        <div className={classes.buttons}>
          <IconButton
            edge="start"
            color="default"
            aria-label="open drawer"
            onClick={() => handleDrawerToggle(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="default">
            <BookmarksIcon />
          </IconButton>
        </div>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          color="primary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
      <BottomDrawer
        drawerStatus={drawerOpen}
        onToggleDrawer={handleDrawerToggle}
      />
    </AppBar>
  );
};

export default Footer;
