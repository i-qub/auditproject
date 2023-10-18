import * as React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Layout from "../../components/Layout/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';

// Table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

// client img 
import clientImg from "../../assets/clients.jpeg";

import './Clients.css';
import { event } from 'jquery';


const columns = [
  { id: 'id', label: 'Client Id', minWidth: 170, fontWeight:'bold', background:'#eeeeee'},
  { id: 'name', label: 'Client Name', minWidth: 170, fontWeight:'bold', background:'#eeeeee' },
  { id: 'email', label: 'Email Id', minWidth: 100, fontWeight:'bold', background:'#eeeeee' },
  {
    id: 'contact',
    label: 'Contact',
    minWidth: 170,
    align: 'left',
    fontWeight:'bold',
    background:'#eeeeee',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'left',
    fontWeight:'bold',
    background:'#eeeeee',
    format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(id, name, email, contact, address) {
  return { id, name, email, contact, address };
}

const rows = [
  createData(1, 'Shivraj Mohite', 'shivrajmohite21@gmail.com', '+918411818242', 'Kolhapur'),
  createData(2, 'Sudhir', 'sudhir@gmail.com', +918965783900, 'Mumbai'),
  createData(3, 'Surabhi', 'surabhi@gmail.com', +917890546789, 'Lucknow'),
  createData(4, 'United States', 'US', 327167434, 9833520),
  createData(5, 'Canada', 'CA', 37602103, 9984670),
  createData(6, 'Australia', 'AU', 25475400, 7692024),
  createData(7, 'Germany', 'DE', 83019200, 357578),
  createData(8, 'Ireland', 'IE', 4857000, 70273),
  createData(9, 'Mexico', 'MX', 126577691, 1972550),
  createData(10, 'Japan', 'JP', 126317000, 377973),
  createData(11, 'France', 'FR', 67022000, 640679),
  createData(12, 'United Kingdom', 'GB', 67545757, 242495),
  createData(13, 'Russia', 'RU', 146793744, 17098246),
  createData(14, 'Nigeria', 'NG', 200962417, 923768),
  createData(15, 'Brazil', 'BR', 210147125, 8515767),
];

const Clients = () => {
    const [spacing, setSpacing] = React.useState(2);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [clientName, setClientName] = React.useState();
    const [clientEmail, setClientEmail] = React.useState();
    const [clientContact, setClientContact] = React.useState();

    useEffect(() => {
      console.log("start", rows[0]);  
      let firstRow = rows[0]
      setClientName(firstRow.name);
      setClientEmail(firstRow.email);
      setClientContact(firstRow.contact);
    },[]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleCellClick = (d) => {
        setClientName(d.name);
        setClientEmail(d.email);
        setClientContact(d.contact);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return(
        <Layout>
            <PageHeader text="Clients" />
            <div>
                <Grid container spacing={2} className="clients-cards">
                    <Grid item xs={4} md={4} className="re-grid">
                        <Card className='client-details he'>
                            {/* <CardMedia
                                component="img"
                                height="140"
                                image={clientImg}
                                alt="client"
                            /> */}
                            <p>
                                {/* <Avatar justifyContent="center" alt="Remy Sharp" src={clientImg} /> */}
                                <img src={clientImg} className="client-img" alt="client image" />
                            </p>
                            
                            <CardContent>
                                <Typography className='fw' gutterBottom variant="h5" component="div">
                                    {clientName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>{clientEmail}</p>
                                    <p>{clientContact}</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={4} className="re-grid">
                        <Card className='he'>
                            <CardContent>
                                <Typography className='fw' gutterBottom variant="h5" component="div">
                                    Geographics
                                </Typography>
                                <Divider />
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className='contact-icon'>
                                            <ContactPhoneIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Contact" secondary="+918411818242" />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className='address-icon'>
                                            <AddHomeWorkIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Address" secondary="Kolhapur, India" />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar className='email-icon'>
                                            <EmailIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Email" secondary="shivrajmohite21@gmail.com" />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={4} className="re-grid">
                        <Grid item xs={12} className="order-card">
                            <Card className='h-160'>
                                <CardContent>
                                    <Typography className='fw' gutterBottom variant="h5" component="div">
                                        Orders
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2" color="text.secondary">
                                        <p className='amount-text'>50 <span className='sub-text'>(Total)</span></p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card className='h-160'>
                                <CardContent>
                                    <Typography className='fw' gutterBottom variant="h5" component="div">
                                        Order Cost
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2" color="text.secondary">
                                        <p className='amount-text'>2500 <span className='sub-text'>USD</span></p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <br />
                <Divider />
                <br />
                <div className='client-table'>
                    <p className='cp'>Client List</p>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: column.fontWeight,
                                        background: column.background }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                        <TableRow onClick={() => handleCellClick(row)} hover role="checkbox" tabIndex={-1} key={row.email}>
                                            {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                                </TableCell>
                                            );
                                            })}
                                        </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5,10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>
        </Layout>
    )
}

export default Clients;
