import * as React from 'react';
import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemButton from '@mui/material/ListItemButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EventIcon from '@mui/icons-material/Event';
import { green, pink, deepOrange } from '@mui/material/colors';

import './EventsData.css';

const EventsData = () => {
    const [dense, setDense] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const EvenetsList = [
        {id:1, title:"Marketing Ideas Community"}
    ];
    return (
        <>
            <List className='mar-b' dense={dense} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Marketing Ideas Community" secondary="James" />
                        <ListItemText className='ds-f' secondary="Chicago, Illinois">
                            <LocationOnOutlinedIcon/>&ensp;
                        </ListItemText>
                        <ListItemText className='ds-f' secondary="20-10-2022 | 09.00 am - 04.00 pm">
                            <AccessTimeIcon />&ensp;
                        </ListItemText>
                        <IconButton edge="end" aria-label="settings"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Accept</MenuItem>
                            <MenuItem onClick={handleClose}>Decline</MenuItem>
                        </Menu>
                    </ListItem>
                </ListItemButton>
            </List>         
            <List className='mar-b' dense={dense} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Design Meetup 2022" secondary="Olivia" />
                        <ListItemText className='ds-f' secondary="Los Angeles, California">
                            <LocationOnOutlinedIcon/>&ensp;
                        </ListItemText>
                        <ListItemText className='ds-f' secondary="22-10-2022 | 09.00 am - 04.00 pm">
                            <AccessTimeIcon />&ensp;
                        </ListItemText>
                        <IconButton edge="end" aria-label="settings"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Accept</MenuItem>
                            <MenuItem onClick={handleClose}>Decline</MenuItem>
                        </Menu>
                    </ListItem>
                </ListItemButton>
            </List> 
            <List className='mar-b' dense={dense} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Business Training" secondary="Emma" />
                        <ListItemText className='ds-f' secondary="Houston, Texas">
                            <LocationOnOutlinedIcon/>&ensp;
                        </ListItemText>
                        <ListItemText className='ds-f' secondary="28-11-2022 | 09.00 am - 04.00 pm">
                            <AccessTimeIcon />&ensp;
                        </ListItemText>
                        <IconButton edge="end" aria-label="settings"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Accept</MenuItem>
                            <MenuItem onClick={handleClose}>Decline</MenuItem>
                        </Menu>
                    </ListItem>
                </ListItemButton>
            </List>
            <List className='mar-b' dense={dense} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Business Training" secondary="Emma" />
                        <ListItemText className='ds-f' secondary="Houston, Texas">
                            <LocationOnOutlinedIcon/>&ensp;
                        </ListItemText>
                        <ListItemText className='ds-f' secondary="28-11-2022 | 09.00 am - 04.00 pm">
                            <AccessTimeIcon />&ensp;
                        </ListItemText>
                        <IconButton edge="end" aria-label="settings"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Accept</MenuItem>
                            <MenuItem onClick={handleClose}>Decline</MenuItem>
                        </Menu>
                    </ListItem>
                </ListItemButton>
            </List> 
            <List className='mar-b' dense={dense} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Business Training" secondary="Emma" />
                        <ListItemText className='ds-f' secondary="Houston, Texas">
                            <LocationOnOutlinedIcon/>&ensp;
                        </ListItemText>
                        <ListItemText className='ds-f' secondary="28-11-2022 | 09.00 am - 04.00 pm">
                            <AccessTimeIcon />&ensp;
                        </ListItemText>
                        <IconButton edge="end" aria-label="settings"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Accept</MenuItem>
                            <MenuItem onClick={handleClose}>Decline</MenuItem>
                        </Menu>
                    </ListItem>
                </ListItemButton>
            </List> 
            <List className='mar-b' dense={dense} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EventIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Business Training" secondary="Emma" />
                        <ListItemText className='ds-f' secondary="Houston, Texas">
                            <LocationOnOutlinedIcon/>&ensp;
                        </ListItemText>
                        <ListItemText className='ds-f' secondary="28-11-2022 | 09.00 am - 04.00 pm">
                            <AccessTimeIcon />&ensp;
                        </ListItemText>
                        <IconButton edge="end" aria-label="settings"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Accept</MenuItem>
                            <MenuItem onClick={handleClose}>Decline</MenuItem>
                        </Menu>
                    </ListItem>
                </ListItemButton>
            </List> 
        </>
        
    );
}

export default EventsData;
