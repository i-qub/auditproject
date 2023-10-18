import { useEffect, useState } from "react";
// import SearchBar from "material-ui-search-bar";
import { useHistory, useParams,Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ALayout from "../Layout/ALayout"; 
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
const pageSize = 10;
const AuditeeTable = () => {
  const history = useHistory();
  // const api_url = process.env.REACT_APP_api_url;
  const [auditDetails,setAuditDetails] = useState([]);
  const userToken = JSON.parse(localStorage.getItem('user'))?.token;
  console.log('9',userToken);
  const tokenArray = [];
  tokenArray.push(parseInt(userToken, 10));
  console.log('26', tokenArray);

  useEffect (() => {
      PostToken();
  },[]);
  const renderStatusDropdown = rowData => {
    return (
      <select
        value={rowData.AuditeeAcceptationStatus}
        onChange={event => handleStatusChange(event, rowData)}
      >
        <option >Select an option</option>
        <option value="ACCEPTED">Accept</option>
        <option value="REJECTED">Not available</option>
      </select>
    );
  };

  const handleStatusChange = async(event, rowData) => {
   
    const {value} = event.target;
    rowData.AuditeeAcceptationStatus  = value;
    // const data = {
    //   id: rowData._id,
    //   status: value
    // };
    const result = await axios.post('http://13.127.182.122:5000/audit/editAuditofAuditee',{
      id: rowData._id,
      AuditeeAcceptationStatus:value,
    });
    console.log('66', result);
    window.location.reload();
  };

  const PostToken = async(e)=>{
    // e.preventDefault();
    console.log('34', tokenArray)
    try{
    const result = await axios.get('http://13.127.182.122:5000/audit/getCombinedDataWithAuditeeToken?auditeeToken='+[tokenArray]);
    setAuditDetails(result.data);
    // console.log("37",result.data.Data);
    console.log("73",result);
    }catch(err){
      notifyError('no audit found');
    }
  }
  // useEffect(()=>{
  //   loadCategories();
  // },[]);
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
   
 
  const columns = [
    // {title:'Order Id', field:'orderId',render:rowData=><Link  to={`/order/display/${rowData._id}`} target='_blank'>{rowData.orderId}</Link>},
    //{ title: 'Serial no', field: 'tableData.id', render:rowData => { return( <p>{rowData.tableData.id+1}</p> ) } },
    // {title:'Order placed Date & Time', field:'createdAt',render: rowData => moment(rowData.createdAt).format("DD-MM-YYYY HH:mm:ss")},
    {title:'Audit Details', field:'audit', render:rowData=><Link to={`/viewauditdetailsaud/${rowData._id}`}>View</Link>},
    
    // {title:'Delivery Address', field:'deliveryAddress[0]'},
    // {title:'Auditor Name', field:'auditorId.username'},
   // {title:'Auditee Name', field:'auditeeId.username'},
    {title:'Date', field:'Date'},
    // {title:'Status', field:'Astatus'},
  //   {title: 'Link to checklist', field:'checklist_Link',
  //   render: rowData => (
  //     <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small" }} onClick={() => window.open(rowData.checklist_Link, '_blank')}>
  //       View Checklist
  //     </button>
  //   )
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
    { title: 'Status', field: 'AuditeeAcceptationStatus', render: renderStatusDropdown },
    { title: 'Admin Status', field: 'AdminAcceptationStatus', render: rowData => renderStatus(rowData, 'AdminAcceptationStatus')},

    // {title:'Upload Audit', field:'Audit file', render:rowData=><Link to={`/uploadAudit/${rowData._id}`}><button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small" }} >Upload audit</button></Link>},
    {title:'Link to audit', field:'Audit_Link', 
    render: rowData => (
      <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small", width:"auto"}} 
      // onClick={() => window.open(rowData.Audit_Link, '_blank')}
      onClick={() => {
        if (rowData.Audit_Link) {
          window.open(rowData.Audit_Link, '_blank');
        } else {
          alert('Auditor has not uploaded audit yet');
        }
      }}
      >
        View Audit
      </button>
    )},
  //   {title: 'Evidences', field:'Audit evidence', render:rowData=>
  // <Link to={`/viewAuditEvidenceAud/${rowData._id}`}>
  // <button
  //   style={{
  //       marginTop:'4%',
  //       backgroundColor: "rgb(169, 25, 25)",
  //       borderRadius: "4px",
  //       color: "white",
  //       padding: "5px",
  //       fontSize: "small",
  //       width:"auto"

  //   }}
  //   onClick={() => {
  //     // Handle the click event for the second button
  //     // You can add your own logic here
  //   }}
  // >
  //   View 
  // </button>
  // </Link>
  // },
    {title:'NC', field:'NC', render:rowData=>
    <div>
    <Link to={`/view/ncaud/${rowData._id}`}>
    <button
      style={{
          marginTop:'4%',
          backgroundColor: "rgb(169, 25, 25)",
          borderRadius: "4px",
          color: "white",
          padding: "5px",
          fontSize: "small",
          width:"auto"

      }}
      onClick={() => {
        // Handle the click event for the second button
        // You can add your own logic here
      }}
    >
      View NCs
    </button>
    </Link>
    <Link to={`/uploadAuditeeNCaud/${rowData._id}`}>
    <button
      style={{
          marginTop:'4%',
          backgroundColor: "rgb(169, 25, 25)",
          borderRadius: "4px",
          color: "white",
          padding: "5px",
          fontSize: "small",
          width:"auto"

      }}
      onClick={() => {
        // Handle the click event for the second button
        // You can add your own logic here
      }}
    >
      Upload NCs
    </button>
    </Link>
    </div>

  },
  {title:'NC Evidences', field:'evidence', render:rowData=>
  <div style={{display:"flex", flexDirection:"column"}}>
    <Link to={`/uploadEvidenceAud/${rowData._id}`}>
    <button
      style={{
          marginTop:'4%',
          backgroundColor: "rgb(169, 25, 25)",
          borderRadius: "4px",
          color: "white",
          padding: "5px",
          fontSize: "small",
          width:"auto"

      }}
      onClick={() => {
        // Handle the click event for the second button
        // You can add your own logic here
      }}
    >
      Upload 
    </button>
    </Link>
  
    <Link to={`/viewEvidenceAud/${rowData._id}`}>
    <button
      style={{
          marginTop:'4%',
          backgroundColor: "rgb(169, 25, 25)",
          borderRadius: "4px",
          color: "white",
          padding: "5px",
          fontSize: "small",
          width:"auto"

      }}
      onClick={() => {
        // Handle the click event for the second button
        // You can add your own logic here
      }}
    >
      View 
    </button>
    </Link>
    </div>

  },
//   {title:'Auditee NC', field:'NC', render:rowData=>
//   <Link to={`/viewAuditeeNCataud/${rowData._id}`}>
//   <button
//     style={{
//         marginTop:'4%',
//         backgroundColor: "rgb(169, 25, 25)",
//         borderRadius: "4px",
//         color: "white",
//         padding: "5px",
//         fontSize: "small",
//         width:"auto"

//     }}
//     onClick={() => {
//       // Handle the click event for the second button
//       // You can add your own logic here
//     }}
//   >
//     View NCs
//   </button>
//   </Link>

// },
// {title:'Admin NC', field:'NC', render:rowData=>
// <Link to={`/viewAdminNCataud/${rowData._id}`}>
// <button
//   style={{
//       marginTop:'4%',
//       backgroundColor: "rgb(169, 25, 25)",
//       borderRadius: "4px",
//       color: "white",
//       padding: "5px",
//       fontSize: "small",
//       width:"auto"

//   }}
//   onClick={() => {
//     // Handle the click event for the second button
//     // You can add your own logic here
//   }}
// >
//   View NCs
// </button>
// </Link>

// },
  
    // {
    //   title: 'Preferred Date',
    //   field: 'preferredDate',
    //   render: rowData => (
    //     <DatePicker
    //       selected={rowData.preferredDate ? new Date(rowData.preferredDate) : null}
    //       onChange={date => handlePreferredDateChange(date, rowData)}
    //       dateFormat="dd/MM/yyyy"
    //       isClearable
    //       placeholderText="Select a date"
    //     />
    //   ),
    // },

    
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
  ]

  
  

    // window.location.replace('/posts');

   return (
    <ALayout>
      
      <div className="container">

      <MaterialTable style={{
            // height: "600PX", 
            margin: "40px 0px 30px -4px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            width: "100%",
            
        }} 
        title="List of Audits as Auditee" 
        data={auditDetails}
        columns={columns}

        options = {{
          exportButton:true,
          exportButtonFieldStyle:{

          },
          sorting: true,
          headerStyle: {
            backgroundColor: ' rgb(169, 25, 25)',
            color: '#FFF',
            padding:"8px"
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
    </ALayout>
    
  );
};

export default AuditeeTable;
