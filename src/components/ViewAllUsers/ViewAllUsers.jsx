import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';
import { red, orange } from '@mui/material/colors';

import Layout from '../Layout/Layout';
import PageHeader from '../PageHeader/PageHeader';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const ViewAllUsers = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout>
      <PageHeader text="Active Users" />
      <Grid container spacing={2} className="mr-l">
        {activeUserList.map((d) => {
          return(
            <Grid item xs={3} key={d.email}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: orange[500] }} aria-label={d.fisrtname + " " +  d.lastname }>
                      {d.fisrtname.charAt(0)}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={d.fisrtname + " " +  d.lastname }
                  subheader={d.email}
                />
              </Card>
            </Grid>
          )
          
        })}
        
      </Grid>
    </Layout>
    
  );
}

export default ViewAllUsers;


const activeUserList = [
  {
      fisrtname: 'Wade',
      lastname: 'Williams',
      email: 'skaufman@me.com'
  },
  {
      fisrtname: 'Dave',
      lastname: 'Harris',
      email: 'koudas@outlook.com'
  },
  {
      fisrtname: 'Seth',
      lastname: 'Thomas',
      email: 'kmself@yahoo.ca',
  },
  {
      fisrtname: 'Ivan',
      lastname: 'Robinson',
      email: 'bflong@comcast.net'
  },
  {
      fisrtname: 'Riley',
      lastname: 'Walker',
      email: 'wmszeliga@icloud.com'
  },
  {
      fisrtname: 'Gilbert',
      lastname: 'Scott',
      email: 'thomasj@live.com'
  },
  {
      fisrtname: 'WaJorgede',
      lastname: 'Nelson',
      email: 'dmouse@verizon.net'
  },
  {
      fisrtname: 'Dan',
      lastname: 'Mitchell',
      email: 'gknauss@verizon.net'
  },
  {
      fisrtname: 'Brian',
      lastname: 'Morgan',
      email: 'joelw@hotmail.com'
  },
  {
      fisrtname: 'Roberto',
      lastname: 'Cooper',
      email: 'heckerman@comcast.net'
  },
  {
      fisrtname: 'Ramon',
      lastname: 'Howard',
      email: 'empathy@live.com'
  },
  {
      fisrtname: 'Miles',
      lastname: 'Davis',
      email: 'philb@me.com'
  },
  {
      fisrtname: 'Daisy',
      lastname: 'Miller',
      email: 'jrifkin@outlook.com'
  },
  {
      fisrtname: 'Deborah',
      lastname: 'Martin',
      email: 'rupak@yahoo.com'
  },
  {
      fisrtname: 'Isabel',
      lastname: 'Smith',
      email: 'hahsler@live.com'
  },
  {
      fisrtname: 'Stella',
      lastname: 'Anderson',
      email: 'bartak@msn.com'
  },
  {
      fisrtname: 'Debra',
      lastname: 'White',
      email: 'ahmad@me.com'
  },
  {
      fisrtname: 'Beverly',
      lastname: 'Perry',
      email: 'sjmuir@me.com'
  },
  {
      fisrtname: 'Vera',
      lastname: 'Clark',
      email: 'dbanarse@gmail.com'
  },
  {
      fisrtname: 'Angela',
      lastname: 'Richards',
      email: 'offthelip@outlook.com'
  },
];