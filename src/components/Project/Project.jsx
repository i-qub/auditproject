import { useState, useEffect } from "react";
import MaterialTable from 'material-table-jspdf-fix';
import * as React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem,Select, FormControl } from '@material-ui/core';
import RaiseNC from "../Modal/raiseNC";


import {
  updateUpvoteCount,
  setSavedProjects,
  projectSelector,
} from "../../slices/project.slice";
import { StyledMenu } from "../StyledMenu/StyledMenu";
import CommentSection from "../CommentSection/CommentSection";
// import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { BiCommentDetail } from "react-icons/bi";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import upvotefilled from "../../assets/upvotefilled.svg";
import upvoteoutlined from "../../assets/upvoteoutlined.svg";
import "./Project.css";
import { isAuthenticated, getUser } from "../../utils/auth";
import { getDate } from "../../utils/date";
import { baseUrl } from "../../utils/constants";
import {
  notifySuccess,
  notifyError,
  notifyInfo,
} from "../../utils/notifyToasts";
import { doesPropertyExist } from "../../utils/doesPropertyExist";
///////
import { CircularProgress } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FcSalesPerformance, FcCollect, FcLibrary, FcCollaboration } from "react-icons/fc";
import Divider from '@mui/material/Divider';
import ArticleIcon from '@mui/icons-material/Article';
import Badge from '@mui/material/Badge';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import ImageIcon from '@mui/icons-material/Image';
import TagIcon from '@mui/icons-material/Tag';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReportIcon from '@mui/icons-material/Report';
import FormContainer from "../Modal/FormContainer";
import axios from 'axios';
import moment from 'moment';

import Sidebar from "../../pages/sideBar/sideBar";
// import { MenuItem,Select, FormControl } from '@material-ui/core';


import Layout from "../../components/Layout/Layout";
const Project = ({ project }) => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const [auditDetails,setAuditDetails] = useState([]);
  const [verificationStatuses, setVerificationStatuses] = useState([
    { value: 'REJECTED', label: 'Rejected' },
    { value: 'ACCEPTED', label: 'Approved' },
    { value: 'Pending', label: 'Pending' },
  ]);

  const [isComponentOpen, setComponentOpen] = useState(false);

  const handleOpenComponent = () => {
    setComponentOpen(true);
  };
  
  useEffect(()=>{
    loadCategories();
  },[]);
  
  const loadCategories = async()=>{
     try{
      const result = await axios.get("http://13.127.182.122:5000/audit/getCombinedData");
      setAuditDetails(result.data);
      console.log('90', result);
     }catch(err){
      notifyError('No audits to show');
     }

      // setPagination(_(result.data.getorders).slice(0).take(pageSize).value())
      
  }
  const styles = {
    REJECTED: { color: 'red' },
    ACCEPTED : { color: 'green' },
    Pending : {color: '#FFA41B'}
  };
  const handleVerificationStatusChange = (event, rowData) => {
    const data = {
      id: rowData._id,
      AdminAcceptationStatus: event.target.value
    };
    console.log('54', data);
    
    axios
      .post(`http://13.127.182.122:5000/audit/editDateAdmin1?id=${data.id}&AdminAcceptationStatus=${data.AdminAcceptationStatus}`)
      .then(result => {
        console.log('59', result)
        //setNonverifiedusers(result.data.data);
        window.location.reload();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderStatus = (rowData, field) => {
    let statusColor = '';
    if (rowData[field] === 'ACCEPTED') {
      statusColor = 'green';
    } else if (rowData[field] === 'REJECTED') {
      statusColor = 'red';
    }
    else if (rowData[field] === 'Pending') {
      statusColor = '#FFA41B';
    }
  
    return (
      <span style={{ color: statusColor }}>
        {rowData[field]}
      </span>
    );
  };

  const renderVerificationStatus = (rowData) => {
    //console.log('66', rowData)

    const currentStyle = styles[rowData.AdminAcceptationStatus] || styles.default;
  
    return (
      <Select
        value={rowData.AdminAcceptationStatus}
        onChange={(event) => handleVerificationStatusChange(event, rowData)}
        style={{currentStyle , width:'100%'} }
      >
        {verificationStatuses.map((status) => (
          <MenuItem key={status.value} value={status.value} style={styles[status.value] || styles.default}>
            {status.label}
          </MenuItem>
        ))}
      </Select>
    );
  };
  


  const columns = [
    // {title:'Order Id', field:'orderId',render:rowData=><Link  to={`/order/display/${rowData._id}`} target='_blank'>{rowData.orderId}</Link>},
    //{ title: 'Serial no', field: 'tableData.id', render:rowData => { return( <p>{rowData.tableData.id+1}</p> ) } },
    // {title:'Order placed Date & Time', field:'createdAt',render: rowData => moment(rowData.createdAt).format("DD-MM-YYYY HH:mm:ss")},
   
    {title:'Date', field:'Date'},
    {title:'Scope', field:'Scope'},
    // {title:'Audit Type', field:'auditType'},
    
    // {title:'Delivery Address', field:'deliveryAddress[0]'},
    {title:'Auditor Name', field:'auditTeam'},
    {title:'Auditee Name', field:'auditee',
     render: rowData => (
      <p>{rowData.auditee.join(', ')}</p>
    )
    },
   
//     {   title:'Auditor Status', 
//         field:'AuditorAcceptationStatus',
//  },
//  {   title:'Auditee Status', 
//         field:'AuditeeAcceptationStatus',
//  },
{ 
  title: 'Auditor Preferred Date',
  field: 'AuditorpreferredDate',
  render: rowData => {
    if (rowData.AuditorpreferredDate) {
      return moment(rowData.AuditorpreferredDate).format("DD-MM-YYYY");
    } else {
      return "Not yet set by auditor";
    }
  }
},
{ title: 'Approve Date', field: 'AdminAcceptationStatus',
  render: renderVerificationStatus
},

{ title: 'Auditor Status', field: 'AuditorAcceptationStatus', render: rowData => renderStatus(rowData, 'AuditorAcceptationStatus')},

// { title: 'Auditee Status', field: 'AuditeeAcceptationStatus',render: rowData => renderStatus(rowData, 'AuditeeAcceptationStatus') },
        

{title:'Link to audit', field:'Audit_Link', 
    render: rowData => (
      <div style={{display:"flex", flexDirection:"column"}}>
      <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small", width:'80%' }} 
      // onClick={() => window.open(rowData.Audit_Link, '_blank')}
      onClick={() => {
        if (rowData.Audit_Link) {
          window.open(rowData.Audit_Link, '_blank');
        } else {
          alert('Auditor has not uploaded audit yet');
        }
      }}
      >
        View 
      </button>
      <Link to={`/viewAuditEvidence/${rowData._id}`}>
          <button
            style={{
                marginTop:'5%',
                backgroundColor: "#007BFF",
                borderRadius: "4px",
                color: "white",
                padding: "5px",
                fontSize: "small",
                width:"80%"
      
            }}
            onClick={() => {
              // Handle the click event for the second button
              // You can add your own logic here
            }}
          >
            Proofs
          </button>
          </Link>
      </div>
    )},
    
    {title:'NC', field:'NC', render:rowData=>
    <Link to={`/raise/nc/${rowData._id}`}>
      {/* <button0
        style={{
          backgroundColor: "rgb(169, 25, 25)",
          borderRadius: "4px",
          color: "white",
          padding: "5px",
          fontSize: "small",
          width:"auto"
        }}
      > */}
        Raise NCs
      {/* </button> */}
    </Link >
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
//   <button onClick={handleOpenComponent}>Raise NCs</button>

//   {isComponentOpen && <RaiseNC />}
// </Box>
  },
  {title:'Auditee NC Link', field:'NC', render:rowData=>
  <div style={{display:'flex', flexDirection:"column"}}>
    <Link to={`/viewAuditeeNC/${rowData._id}`}>
    {/* <button
      style={{
          marginTop:'4%',
          backgroundColor: "#007BFF",
          borderRadius: "4px",
          color: "white",
          padding: "5px",
          fontSize: "small",
          width:"80%"

      }}
      onClick={() => {
        // Handle the click event for the second button
        // You can add your own logic here
      }}
    > */}
      View NCs
    {/* </button> */}
    </Link>
    <Link to={`/uploadAdminNC/${rowData._id}`}>
    {/* <button
      style={{
          marginTop:'4%',
          backgroundColor: "rgb(169, 25, 25)",
          borderRadius: "4px",
          color: "white",
          padding: "5px",
          fontSize: "small",
          width:"80%"

      }}
      onClick={() => {
        // Handle the click event for the second button
        // You can add your own logic here
      }}
    > */}
      Upload NCs
    {/* </button> */}
    </Link>
    </div>
   },
  //  {title:'Admin NC Link', field:'NC', render:rowData=>
  //   <Link to={`/viewAdminNC/${rowData._id}`}>
  //   <button
  //     style={{
  //         marginTop:'4%',
  //         backgroundColor: "#007BFF",
  //         borderRadius: "4px",
  //         color: "white",
  //         padding: "5px",
  //         fontSize: "small",
  //         width:"80%"

  //     }}
  //     onClick={() => {
  //       // Handle the click event for the second button
  //       // You can add your own logic here
  //     }}
  //   >
  //     View NCs
  //   </button>
  //   </Link>
  //  },
  // {title: 'NC Evidence', field:'Evidence', render:rowData=>
  // <Link to={`/viewEvidence/${rowData._id}`}>
  //     <button
  //       style={{
  //           marginTop:'4%',
  //           backgroundColor: "#00CC00",
  //           borderRadius: "4px",
  //           color: "white",
  //           padding: "5px",
  //           fontSize: "small",
  //           width:"80%"
  
  //       }}
  //       onClick={() => {
  //         // Handle the click event for the second button
  //         // You can add your own logic here
  //       }}
  //     >
  //       View 
  //     </button>
  //     </Link>
  // }
    
    // {title:'End Date', field:'auditEndDate'},   
    // {title:'Scope', field:'scope'},

    // {title:'Buyer Number', field:'number'},
    // {title:'Seller Name', field:'seller_name'},
    // {title:'Product Name', field:'product_name'},
    //{title:'Status', field:'deliveryStatus',render:rowData=><Link to={`/order/update/${rowData._id}`}>{rowData.deliveryStatus}</Link>},
    // {
    //   title: 'Status',
    //   field: 'deliveryStatus',
    //   render: renderDeliveryStatus,
    // },
    {title:'Audit Details', field:'audit', render:rowData=><Link to={`/auditdetails/${rowData._id}`}>View</Link>},
  ]

 
  // console.log("253",users)
  return (
     
     
         
      <div>
        
        <FormContainer/>
        
       
        <div style={{ height: "600px", width:"1200px", marginLeft:"-20px", marginRight: "30px", marginTop:"-40px"}}>
        <MaterialTable style={{
            margin: "60px 20px 30px 20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            width: "100%",
        }} 
        title="Audits" 
        data={auditDetails}
        columns={columns}

        options = {{
          exportButton:true,
          exportButtonFieldStyle:{

          },
          cellStyle: {
            fontWeight: 'bold', // Change the font weight here
            fontSize: '13px',
            padding: '8px',
          },
          sorting: true,
          headerStyle: {
            backgroundColor: ' rgb(169, 25, 25)',
            color: '#FFF',
            fontSize: '15px'
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
        </div>
      </div>
  );
  
  

};

export default Project;
