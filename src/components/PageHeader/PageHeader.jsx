import * as React from 'react';
import { useHistory } from "react-router-dom";
import SearchModal from "../SearchModal/SearchModal";
import MaterialMenu from "../MaterialMenu/MaterialMenu";
import { BiArrowBack } from "react-icons/bi";
import "./PageHeader.css";

//Header
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

const PageHeader = ({ text }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div className="profile-page-header">
    //   <div className="page-header-content">
    //     <BiArrowBack onClick={() => history.goBack()} />
    //     &nbsp;&nbsp;&nbsp;
    //     <span>{text}</span>
    //   </div>
    //   <div className="header-search-icon">
    //     <SearchModal />
    //   </div>
    //   <MaterialMenu />
    // </div>

    <AppBar className='feed-header-mi'>
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <BiArrowBack onClick={() => history.goBack()} />
          &nbsp;&nbsp;&nbsp;
            <span>{text}</span>
          </Typography>
          <MaterialMenu />
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
  );
};

export default PageHeader;
