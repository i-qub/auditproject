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

const Sidebar = () => {
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
      
    </Layout>
  );
};

export default Sidebar;
