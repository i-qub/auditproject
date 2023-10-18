import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import './ActiveUser.css';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const ActiveUsers = () => {
  return (
    <Card>
        <CardContent>
            <Typography spacing={2}>
                {/* <Stack direction="row" spacing={2}> */}
                    {userList.map((item) => (
                        <Tooltip title={item.fisrtname + " " + item.lastname} key={item.fisrtname} placement="top">
                            <StyledBadge className='mr'
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt={item.fisrtname} src="/static/images/avatar/1.jpg" />
                            </StyledBadge>
                        </Tooltip>
                    ))}
                {/* </Stack> */}
            </Typography>
            <Typography component="div" color="text.secondary">
                <Link className='view-btn' to="/active-users" >View Details</Link>
            </Typography> 
        </CardContent>
    </Card>
    
  );
}

export default ActiveUsers;

const userList = [
    {
        fisrtname: 'Wade',
        lastname: 'Williams'
    },
    {
        fisrtname: 'Dave',
        lastname: 'Harris'
    },
    {
        fisrtname: 'Seth',
        lastname: 'Thomas'
    },
    {
        fisrtname: 'Ivan',
        lastname: 'Robinson'
    },
    {
        fisrtname: 'Riley',
        lastname: 'Walker'
    },
    {
        fisrtname: 'Gilbert',
        lastname: 'Scott'
    },
    {
        fisrtname: 'WaJorgede',
        lastname: 'Nelson'
    },
    {
        fisrtname: 'Dan',
        lastname: 'Mitchell'
    },
    {
        fisrtname: 'Brian',
        lastname: 'Morgan'
    },
    {
        fisrtname: 'Roberto',
        lastname: 'Cooper'
    },
    {
        fisrtname: 'Ramon',
        lastname: 'Howard'
    },
    {
        fisrtname: 'Miles',
        lastname: 'Davis'
    },
    {
        fisrtname: 'Daisy',
        lastname: 'Miller'
    },
    {
        fisrtname: 'Deborah',
        lastname: 'Martin'
    },
    {
        fisrtname: 'Isabel',
        lastname: 'Smith'
    },
    {
        fisrtname: 'Stella',
        lastname: 'Anderson'
    },
    {
        fisrtname: 'Debra',
        lastname: 'White'
    },
    {
        fisrtname: 'Beverly',
        lastname: 'Perry'
    },
    {
        fisrtname: 'Vera',
        lastname: 'Clark'
    },
    {
        fisrtname: 'Angela',
        lastname: 'Richards'
    },
];
