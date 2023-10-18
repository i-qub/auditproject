import { useEffect, useState } from "react";
// import SearchBar from "material-ui-search-bar";
import { useHistory, useParams,Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Layout from "../../../../components/Layout/Layout";
import { MenuItem,Select, FormControl } from '@material-ui/core';
// import "./Profile.css";
// import _ from 'lodash';
// import CategoriesModal from "../../components/Modal/CategoriesModal";
// import EditCategoriesModal from "../../components/Modal/EditCategoriesModal";
// import UserModal from "../../components/Modal/USerModal";
import axios from 'axios'
import moment from 'moment';

// import './image'
// import SelectFileButton from "./image";
// import { Button } from "bootstrap";
// import { post } from "jquery";
import { notifyError } from "../../../../utils/notifyToasts";
import MaterialTable from 'material-table-jspdf-fix';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Table } from "@mui/material";
const pageSize = 10;
const Verifyusers = () => {
  const history = useHistory();
  // const api_url = process.env.REACT_APP_api_url;
  const [nonVerifiedUsers,setNonverifiedusers] = useState([]);
  const [count, setCount] = useState({
    unverified: 0,
    verified: 0
  })
  const [verificationStatuses, setVerificationStatuses] = useState([
    { value: 'false', label: 'Not Verified' },
    { value: 'true', label: 'Verified' },
  ]);
  console.log('33', verificationStatuses)
  
  //const userToken = JSON.parse(localStorage.getItem('user'))?.token;
 // console.log('9',userToken);
//   const tokenArray = [];
//   tokenArray.push(parseInt(userToken, 10));
//   console.log('26', tokenArray);
  const styles = {
    false: { color: 'red' },
    true : { color: 'green' },
   
  };

  useEffect (() => {
      PostToken();
  },[]);
  
  const handleVerificationStatusChange = (event, rowData) => {
    const data = {
      id: rowData._id,
      verified: event.target.value
    };
    console.log('54', data);
    
    axios
      .post(`http://13.127.182.122:5000/user/editVerificationStatus?id=${data.id}&verified=${data.verified}`)
      .then(result => {
        console.log('59', result)
        //setNonverifiedusers(result.data.data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderVerificationStatus = (rowData) => {
    //console.log('66', rowData)

    const currentStyle = styles[rowData.verified] || styles.default;
  
    return (
      <Select
        value={rowData.verified}
        onChange={(event) => handleVerificationStatusChange(event, rowData)}
        style={currentStyle}
      >
        {verificationStatuses.map((status) => (
          <MenuItem key={status.value} value={status.value} style={styles[status.value] || styles.default}>
            {status.label}
          </MenuItem>
        ))}
      </Select>
    );
  };

  const PostToken = async(e)=>{
    // e.preventDefault();
   // console.log('34', tokenArray)
    try{
    const result = await axios.get('http://13.127.182.122:5000/user/nonVerifiedAccounts');
    setNonverifiedusers(result.data.nonverifiedAccounts);
    setCount({
        unverified: result.data.countnonverified,
        verified: result.data.countverified
      });
    console.log("99",result);
    //console.log("73",result);
    }catch(err){
      notifyError('no users found');
    }
  }
  // useEffect(()=>{
  //   loadCategories();
  // },[]);
  
 
  const columns = [
    // {title:'Order Id', field:'orderId',render:rowData=><Link  to={`/order/display/${rowData._id}`} target='_blank'>{rowData.orderId}</Link>},
    { title: 'Serial no', field: 'tableData.id', render:rowData => { return( <p>{rowData.tableData.id+1}</p> ) } },
    {title:'View user', field:'user', render:rowData=><Link to={`/userdetails/${rowData._id}`}>View</Link>},

    // {title:'Order placed Date & Time', field:'createdAt',render: rowData => moment(rowData.createdAt).format("DD-MM-YYYY HH:mm:ss")},
    {title:'Token Number', field:'token'},
    
    // {title:'Delivery Address', field:'deliveryAddress[0]'},
    // {title:'Auditor Name', field:'auditorId.username'},
   // {title:'Auditee Name', field:'auditeeId.username'},
    {title:'Name', field:'username'},
    // {title:'Status', field:'Astatus'},
  //   {title: 'Link to checklist', field:'checklist_Link',
  //   render: rowData => (
  //     <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small" }} onClick={() => window.open(rowData.checklist_Link, '_blank')}>
  //       View Checklist
  //     </button>
  //   )
  //  },
    {title:'Number', field:'number'},
    { title: 'Department', field: 'department'},
    {title:'Verification', field:'verified', 
    render: renderVerificationStatus
    },
  
  ]

  
  

    // window.location.replace('/posts');

   return (
    <Layout>
      
      <div className="container">

        <MaterialTable style={{
            margin: "60px 0px 30px 20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            width: "97%",
        }} 
        title="List of users" 
        data={nonVerifiedUsers}
        columns={columns}

        options = {{
          exportButton:true,
          exportButtonFieldStyle:{

          },
          sorting: true,
          headerStyle: {
            backgroundColor: ' rgb(169, 25, 25)',
            color: '#FFF'
          },
          rowStyle: {
            backgroundColor: 'white',
          },
          // selection: true,
          // filtering: true,  
          grouping: false,
          actionsColumnIndex: -1,
          pageSizeOptions: [5,10, 20,50,100, 200, 500, 1000],
          search: true,
          searchFieldStyle: {
            width: '100%',
            backgroundColor: '#fff',
            border: '1px solid #AAA',
            borderRadius: '4px',
            paddingLeft: '8px',
            '::placeholder': {
              color: 'black',
              fontStyle: 'italic'
            }
          },
        }}
        />
        <div className="count">
            <h5>Total unverified accounts: {count.unverified} </h5>       
        </div>

      </div>
    </Layout>
    
  );
};

export default Verifyusers;
