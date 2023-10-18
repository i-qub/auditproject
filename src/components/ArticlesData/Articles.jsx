import * as React from 'react';
import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListItemButton } from '@mui/material';

// Avatars
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar5.png';

import './Articles.css';

const ArticlesData = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start" className='pd-0'>
        <ListItemButton className='pd-0'>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={avatar1} />
            </ListItemAvatar>
            <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
            />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" className='pd-0'>
        <ListItemButton className='pd-0'>
            <ListItemAvatar>
                <Avatar alt="Travis Howard" src={avatar2} />
            </ListItemAvatar>
            <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
            />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" className='pd-0'>
        <ListItemButton className='pd-0'>
            <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={avatar3} />
            </ListItemAvatar>
            <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
            />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default ArticlesData;
