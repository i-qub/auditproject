import { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import { useHistory, useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Layout from "../../components/Layout/Layout";
import "./Profile.css";
import _ from 'lodash';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CategoriesModal from "../../components/Modal/CategoriesModal";
import EditCategoriesModal from "../../components/Modal/EditCategoriesModal";
// import UserModal from "../../components/Modal/USerModal";
import axios from 'axios'
import './image'
import SelectFileButton from "./image";
import { Button } from "bootstrap";
import { post } from "jquery";
import MaterialTable from 'material-table-jspdf-fix';
import { notifyError } from "../../utils/notifyToasts";
import moment from "moment";
const pageSize = 10;
const Posts = () => {
  const history = useHistory();
  const [auditDetails,setAuditDetails] = useState([]);
  const userToken = JSON.parse(localStorage.getItem('user'))?.token;
  console.log('9',userToken);
  const tokenArray = [];
  tokenArray.push(parseInt(userToken, 10));
  console.log('27', tokenArray);
  // useEffect(()=>{
  //   loadCategories();
  // },[]);
  useEffect (() => {
    PostToken();
},[]);

const PostToken = async(e)=>{
  // e.preventDefault();
 // console.log('37', tokenArray)
  try{
    const result = await axios.get("http://13.127.182.122:5000/audit/getCombinedData");
  setAuditDetails(result.data)
  console.log("34",result);
  }catch(err){
    notifyError("no audit found");
  }
}
const renderStatusDropdown = rowData => {
  return (
    <select
      value={rowData.AuditorAcceptationStatus}
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
  rowData.AuditorAcceptationStatus  = value;
  // const data = {
  //   id: rowData._id,
  //   status: value
  // };
  const result = await axios.post('http://13.127.182.122:5000/audit/editAuditofAuditor',{
    id: rowData._id,
    AuditorAcceptationStatus:value,
  });
  window.location.reload();
  console.log('66', result);
};
const [selectedDates, setSelectedDates] = useState("");
const handlePreferredDateChange = async(date, rowData) =>{
  setSelectedDates(prevSelectedDates => ({
    ...prevSelectedDates,
    [rowData.tableData.id]: date,
  }));
  
  console.log('89',date);
  //console.log('90',rowData);
  if(rowData.AuditorAcceptationStatus==="REJECTED"){
  const dresult = await axios.post('http://13.127.182.122:5000/audit/editAuditofAuditor1',{
    id: rowData._id,
    AuditorpreferredDate:date
  });
  console.log('100', dresult)
  console.log('101', selectedDates);
}
else{
  alert('you have already accepted the date')
}
}
const renderStatus = (rowData, field) => {
  let statusText = '';
  let statusColor = '';

  if (rowData[field] === true) {
    statusText = "Done";
    statusColor = 'green';
  } else if (rowData[field] === false) {
    statusText = "Pending";
    statusColor = 'orange';
  }
  
  return (
    <span style={{ color: statusColor }}>
      {statusText}
    </span>
  );
};

const renderStatus1 = (rowData, field) => {
  let statusText = '';
  let statusColor = '';

  if (rowData[field] === 'true') {
    statusText = "Done";
    statusColor = 'green';
  } else if (rowData[field] === 'false') {
    statusText = "Pending";
    statusColor = 'orange';
  }else if (rowData[field] === "failed") {
    statusText = "Overdue";
    statusColor = 'red';
  }
  
  return (
    <span style={{ color: statusColor }}>
      {statusText}
    </span>
  );
};

const renderStatus2 = (rowData, field) => {
  let statusText = '';
  let statusColor = '';

  if (!rowData.timeToClose) {
    statusText = "Pending";
    statusColor = 'yellow';
  } else if (rowData === 'false') {
    statusText = "Pending";
    statusColor = 'orange';
  }
  
  return (
    <span style={{ color: statusColor }}>
      {statusText}
    </span>
  );
};



const getStatusText = (flag) => {
  return flag ? "Done" : "Not Yet Completed";
};
//  console.log('127', rowData.AdminDateApprovalFlag)
  const columns = [
    // {title:'Order Id', field:'orderId',render:rowData=><Link  to={`/order/display/${rowData._id}`} target='_blank'>{rowData.orderId}</Link>},
    //{ title: 'Serial no', field: 'tableData.id', render:rowData => { return( <p>{rowData.tableData.id+1}</p> ) } },
    // {title:'Order placed Date & Time', field:'createdAt',render: rowData => moment(rowData.createdAt).format("DD-MM-YYYY HH:mm:ss")},
    // {title:'Audit Type', field:'auditType'},
    // {title:'Audit No', field:'auditNo'},

    
    {title:'Auditor', field:'auditTeam'},
  //   {title:'Final Approved date', 
  //   render: rowData => (
  //     <div>
  //     {rowData.AuditorpreferredDate
  //       ? <p>{moment(rowData.AuditorpreferredDate).format("DD-MM-YYYY")}</p>
  //       : <p>Pending</p>}
  //   </div>
  //   )
  // },

  {
    title: 'Final Approved date',
    render: rowData => (
      <div>
        {rowData.AuditorpreferredDate ? (
          <p style={{ color: 'green' }}>{moment(rowData.AuditorpreferredDate).format("DD-MM-YYYY")}</p>       
        ) : (
          <p style={{ color: 'orange' ,marginTop:"13px"}}>Pending</p>
        )}
      </div>
    )
  },
    // {title:'AdminDateApprovalFlagDate', field:'AdminDateApprovalFlagDate'},
    // { 
    //   title: 'Audit Upload status', 
    //   field: 'Audit_Uploaded_Flag', 
    //   render: (rowData) => renderStatus1(rowData, 'Audit_Uploaded_Flag') 
    // },
    {
      title: 'Audit Date Approval status',
      render: rowData => (
        <div>
      {renderStatus(rowData, 'AdminDateApprovalFlag')}
      {rowData.AdminDateApprovalFlag !== false && (
        <p>{moment(rowData.AdminDateApprovalFlagDate).format("DD-MM-YYYY")}</p>
      )}
    </div>
      ),
    },
    
    {
      title: 'Audit Upload status',
      render: rowData => (
        <div>
      {renderStatus1(rowData, 'Audit_Uploaded_Flag')}
      {rowData.Audit_Uploaded_Flag !== 'false' && (
        <p>{moment(rowData.AdminDateApprovalFlagDate).format("DD-MM-YYYY")}</p>
      )}
    </div>
      ),
    },
    // {
    //   title: 'Audit Upload status',
    //   field: 'Audit_Uploaded_Flag',
    //   render: rowData => renderStatus1(rowData, 'Audit_Uploaded_Flag'),
    // },
    // { 
    //   title: 'NC Raise status', 
    //   field: 'NC_Raise_Flag', 
    //   render: (rowData) => renderStatus(rowData, 'NC_Raise_Flag') 
    // },
    {
      title: 'NC Raise status',
      render: rowData => (
        <div>
        {renderStatus(rowData, 'NC_Raise_Flag')}
        {rowData.NC_Raise_Flag !== false && (
          <p>{moment(rowData.NC_Raise_Flag_Date).format("DD-MM-YYYY")}</p>
        )}
      </div>
      ),
    },
    // { 
    //   title: 'Auditee NC Submission status', 
    //   field: 'Auditee_NC_Flag', 
    //   render: (rowData) => renderStatus(rowData, 'Auditee_NC_Flag') 
    // },
    {
      title: 'Auditee NC Submission status',
      render: rowData => (
        <div>
      {renderStatus(rowData, 'Auditee_NC_Flag')}
      {rowData.Auditee_NC_Flag !== false && (
        <p>{moment(rowData.Auditee_NC_Flag_Date).format("DD-MM-YYYY")}</p>
      )}
    </div>
      ),
    },
    // { 
    //   title: 'NC Evidence Submission status', 
    //   field: 'Evidence_Submission_Flag', 
    //   render: (rowData) => renderStatus(rowData, 'Evidence_Submission_Flag') 
    // },
    {
      title: 'NC Evidence Submission status',
      render: rowData => (
        <div>
      {renderStatus(rowData, 'Evidence_Submission_Flag')}
      {rowData.Evidence_Submission_Flag !== false && (
        <p>{moment(rowData.Evidence_Submission_Flag_Date).format("DD-MM-YYYY")}</p>
      )}
    </div>
      ),
    },
    // { 
    //   title: 'NC Closure status', 
    //   field: 'NC_Closure_Flag', 
    //   render: (rowData) => renderStatus(rowData, 'NC_Closure_Flag') 
    // },
    {
      title: 'NC Closure status',
      render: rowData => (
        <div>
        {renderStatus(rowData, 'NC_Closure_Flag')}
        {rowData.NC_Closure_Flag !== false && (
          <p>{moment(rowData.NC_Closure_Flag_Date).format("DD-MM-YYYY")}</p>
        )}
      </div>
      ),
    },
    {
      title: 'Time to Close Audit',
      render: rowData => (
        <div>
          {rowData.timeToClose ? (
            <p style={{ color: 'green' }}>{rowData.timeToClose}</p>
          ) : (
            <p style={{ color: 'orange' ,marginTop:"13px"}}>Pending</p>
          )}
        </div>
      )
    },
    // {title:'Delivery Address', field:'deliveryAddress[0]'},
    // {title:'Auditor Name', field:'auditorId.username'},
    {title:'Audit Details', field:'audit', render:rowData=><Link to={`/viewauditdetails/${rowData._id}`}>View</Link>},
    // {title:'Date', field:'Date'},
    // {title:'Status', field:'Astatus'},
  //   {title: 'Link to checklist', field:'checklist_Link',
  //   render: rowData => (
  //     <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small" }} onClick={() => window.open(rowData.checklist_Link, '_blank')}>
  //       View Checklist
  //     </button>
  //   )
  //  },
    // { title: 'Auditor Status', field: 'AuditorAcceptationStatus', render: renderStatusDropdown },
    // {
    //   title: 'Preferred Date',
    //   field: 'AuditorpreferredDate',
    //   render: rowData => {
    //     const dateValue = rowData.AuditorpreferredDate ? new Date(rowData.AuditorpreferredDate) : null;
    //     //const formattedDate = dateValue ? `${('0' + dateValue.getDate()).slice(-2)}-${('0' + (dateValue.getMonth() + 1)).slice(-2)}-${dateValue.getFullYear()}` : '';
    //     return(
    //     <DatePicker
          
    //       onChange={date => handlePreferredDateChange(date, rowData)}
    //       selected={ selectedDates[rowData.tableData.id] || dateValue }
    //       dateFormat="dd/MM/yyyy"
    //       placeholderText="dd-mm-yyyy"
    //       />
    //     )
    //   }
    // }, 
    // { title: 'Auditee Status', field: 'AuditeeAcceptationStatus', render: rowData => renderStatus(rowData, 'AuditeeAcceptationStatus')},
    // { title: 'Admin Status', field: 'AdminAcceptationStatus', render: rowData => renderStatus(rowData, 'AdminAcceptationStatus')},

  //   {title:'Upload Audit', field:'Audit file', render:rowData=>
  //   <div>
  //   <Link to={`/uploadAudit/${rowData._id}`}><button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small", width:"auto" }} >Upload audit</button></Link>
  //   <Link to={`/uploadauditEvidence/${rowData._id}`}><button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small", marginTop:"2px", width:"auto"}} >Upload Evidences</button></Link>


  //   </div>
  
  // },
  // {title:'Link to audit', field:'Audit_Link', 
  // render: rowData => (
  //   <div>
  //   <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small", width:"auto" }} 
  //   // onClick={() => window.open(rowData.Audit_Link, '_blank')}
  //   onClick={() => {
  //     if (rowData.Audit_Link) {
  //       window.open(rowData.Audit_Link, '_blank');
  //     } else {
  //       alert('Auditor has not uploaded audit yet');
  //     }
  //   }}
  //   >
  //     View Audit
  //   </button>
  //   <Link to={`/viewAuditEvidence/${rowData._id}`}>
  //       <button
  //         style={{
  //             marginTop:'4%',
  //             backgroundColor: "rgb(169, 25, 25)",
  //             borderRadius: "4px",
  //             color: "white",
  //             padding: "5px",
  //             fontSize: "small",
  //             width:"auto"
    
  //         }}
  //         onClick={() => {
  //           // Handle the click event for the second button
  //           // You can add your own logic here
  //         }}
  //       >
  //         View Evidences
  //       </button>
  //       </Link>
  //   </div>
  // )},
  // {title:'Admin NC', field:'NC', render:rowData=>
  // <Link to={`/viewAdminNC/${rowData._id}`}>
  // <button
  //   style={{
  //       marginTop:'4%',
  //       backgroundColor: "rgb(169, 25, 25)",
  //       borderRadius: "4px",
  //       color: "white",
  //       padding: "5px",
  //       fontSize: "small",
  //       width:"80%"
  
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
  // {title:'NC Evidences', field:'evidence', render:rowData=>
  // <div className="nc-btns">
  //   <Link to={`/uploadEvidence/${rowData._id}`}>
  //   <button
  //     style={{
  //         marginTop:'4%',
  //         backgroundColor: "rgb(169, 25, 25)",
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
  //     Upload 
  //   </button>
  //   </Link>

  //   <Link to={`/viewEvidence/${rowData._id}`}>
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
  //     View 
  //   </button>
  //   </Link>
  //   </div>

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
    <Layout>
      
      <div className="container" style={{height: "800px", marginLeft:"10px", marginTop:"10px"}}>

        <MaterialTable style={{ height: "600px", width:"1200px", marginLeft:"-20px", marginRight: "30px", marginTop:"30px"}} 
        title="Audit Tracking" 
        data={auditDetails}
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
          cellStyle: {
            fontSize: '14px', // Set the font size to 14px
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
    </Layout>
    
  );
};

export default Posts;
