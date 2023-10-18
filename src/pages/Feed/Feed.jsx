import * as React from 'react';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { projectSelector, fetchProjects } from "../../slices/project.slice";
import Layout from "../../components/Layout/Layout";
import Project from "../../components/Project/Project";
import MaterialMenu from "../../components/MaterialMenu/MaterialMenu";
import SearchModal from "../../components/SearchModal/SearchModal";
import HomeIcon from "@mui/icons-material/Home";
import { FiEdit } from "react-icons/fi";
import { CircularProgress } from "@mui/material";
import "./Feed.css";

//Header
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

// Avatar
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

// tooltip
import Tooltip from '@mui/material/Tooltip';

const Feed = () => {
  const dispatch = useDispatch();
  const { currentProjects, projectsLoading } = useSelector(projectSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };




  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Layout>
      <>
        {/* <div className="feed-header">
          <div className="feed-header-content">
            <HomeIcon />
            &nbsp;&nbsp;
            <span>Dashboard</span>
          </div>
          <div className="header-search-icon">
            <SearchModal />
          </div>
          <MaterialMenu />
        </div> */}
      <AppBar className='feed-header-mi'>
      <Toolbar>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
          {/* <HomeIcon /> */}
          {/* <MaterialMenu className="menu_icon" />
            &nbsp;&nbsp;
            <span>Dashboard</span>
          </Typography> */}
          {/* <MaterialMenu /> */}
            <div>
              <Tooltip title="Admin">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  {/* <AccountCircle /> */}
                  <Avatar sx={{ marginLeft:"1100px", bgcolor: deepOrange[500] }}>A</Avatar>
                </IconButton>
              </Tooltip>
              
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
        {/* <Link to="/create" className="new-project-btn">
          <span>
            <FiEdit style={{ height: "1.2rem", width: "1.2rem" }} />
          </span>
          <span>&nbsp;&nbsp;New Project</span>
        </Link> */}
        {/* {projectsLoading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <CircularProgress color="primary" />
          </div>
        ) : (
          <div className="feed-content">
            <>
              {currentProjects.map((item) => (
                <Project project={item} key={item._id} />
              ))}
            </>
          </div>
        )} */}
        <Project />
      </>
    </Layout>
  );
};

export default Feed;
