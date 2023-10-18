import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import moment from "moment";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Sidebar from "../../pages/sideBar/sideBar";
import "../Modal/userModal.css"
import { notifyError } from "../../utils/notifyToasts";
import { notifySuccess } from "../../utils/notifyToasts";
import { Link } from "react-router-dom";


const style = {
    position: 'absolute',
    top: '30%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: '900px !important',
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


const UserModal =  ()=>{
    const history = useHistory();
//     const {id} = useParams();
//     const [users , setUser] = useState({
//       categoryName:"",
//       categoryPriority:"",
//       id:""
//   })
//   useEffect(()=>{
//     loadCategory();
//   },[])
//   const {categoryName,categoryPriority} = users;
//   const onInputChnage = (e) =>{
//       setUser({...users,[e.target.name]:e.target.value})
//   }

//   const onSubmit = async(e)=>{
//     console.log("41")
//       // e.preventDefault();
//       // await axios.post('http://localhost:4000/category/editCategory',users)
//       // history.push("/")
//   }

//   const loadCategory = async()=>{
//   let result = await axios.get('http://localhost:4000/category/getCategory?id='+id);
//   setUser(result.data)
// }
const {id} = useParams();
//const [newAuditorTokens, setAuditorTokens] = useState([]);
const [auditDetails,setAuditDetails] = useState ({
  Audit_Link:"",
  AuditeeAcceptationStatus:"",
  AuditorAcceptationStatus:"",
  AuditorpreferredDate:"",
  Date:"",
  NC_Flag:"",
  Scope:"",
  Shift:"",
  auditMethod:"",
  auditTeam:"",
  auditType:"",
  checklist_Link:"",
  _id:"",
  auditee:[],
  auditeeTokens:[],
  auditorTokens:[],
  Audit_Proof_Link:[],
  NC_Closure_date:"yet not closed",
  timeToClose:"###",
});
const {Audit_Link, AuditeeAcceptationStatus, AuditorAcceptationStatus, AuditorpreferredDate, Date, NC_Flag, Scope, Shift, auditMethod, auditTeam,
  auditType, checklist_Link, _id, auditee, auditeeTokens, auditorTokens, Audit_Proof_Link, timeToClose, NC_Closure_date } = auditDetails;
// const onInputchange = e => {
//     setUser({...users,[e.target.name]: e.target.value})
// };

useEffect (() => {
    loadUser();
},[]);

// const onSubmit = async e =>{
//     e.preventDefault();
//     const result = await axios.post('http://localhost:4000/user/update?id='+id,users)
//     history.push("/users")
//     console.log("77",result.data)
// }

const loadUser = async() =>{
    console.log('99', id)
    const result = await axios.get('http://13.127.182.122:5000/audit/getAuditwithId?id='+id);
    setAuditDetails(result.data.data);
    console.log('101', auditDetails )
    //setAuditorTokens(auditorTokens);
    //console.log("95",newAuditorTokens)
    
}
//console.log('96',auditorTokens);
//console.log('78', newAuditorTokens);
const onInputchange = e => {
  //setUser({...userdetails,[e.target.name]: e.target.value})
  setAuditDetails({...auditDetails,[e.target.name]: e.target.value})
};
console.log('102', auditorTokens)

const handleUpdate = async(e)=>{
  e.preventDefault();
  //setAuditorTokens(auditorTokens);
  console.log('109', auditorTokens);
  const data ={
    id: auditDetails._id,
    newAuditorToken: auditorTokens
  }
  console.log('113', data);
  try{const result = await axios.post('http://13.127.182.122:5000/audit/editAudit',data);
  console.log('110', result);
  notifySuccess('Successfully Updated')
  }catch(err){
    notifyError("Couldn't update");
  }

  //history.push("/login")
  // console.log("138",result);
}
function formatDate(dateString) {
  // console.log('133', dateString)
  if(dateString){
    const formattedDate = moment(dateString).format('DD-MM-YYYY');
    return formattedDate;
  }
  else return "Not yet closed";
}
function formatTime(timeTaken) {
  // console.log('133', dateString)
  if(timeTaken) return timeTaken;
  else return "Not yet closed";
}
const handleClose = async (e) =>{
  history.push("/");
};
// const [isModalOpen, setIsModalOpen] = useState(false);
// const handleClick = () => {
//   setIsModalOpen(true);
// };
// const handleConfirmCloseNC = () => {
//   // Perform the actions to close NC here
//   // e.g., make an API call, update the state, etc.
  
//   // After closing the NC, close the modal
//   setIsModalOpen(false);
// };
// const handleCancelCloseNC = () => {
//   setIsModalOpen(false);
// };

      return (
        <>
        <Sidebar />
            
        <div>
   
        <Box sx={{ ...style, width: 900, marginTop:20 }}> 
          <form >
          
          <span style={{ float: "right", cursor: "pointer" }} onClick={handleClose}>X</span>

            <div className="row-aduit-detail-admin">
            <h3 id="parent-modal-title" style={{marginLeft:"19px"}}>Audit Details</h3>
               
              <div className="detail-1">
                <div className="date">
                      <div className="form-group" >
                        <label style={{ marginBottom:"0rem"}}>Date:</label>
                        <input type="text" className="form-control-admin-details" id="Date" name="Date"  value={Date} />
                      </div>
                      <div className="form-group" >
                        <label style={{ marginBottom:"0rem"}}>Final Date:</label>
                        <input type="text" className="form-control-admin-details" id="AuditorpreferredDate" name="AuditorpreferredDate"  value={formatDate(AuditorpreferredDate)} />
                      </div>
                  </div>
                  <div className="form-group">
                      <label style={{ marginBottom:"0rem"}}>Audit Type:</label>
                      <input type="text" className="form-control-admin-details" id="auditType" name="auditType"  value={auditType} />
                  </div>
                  <div className="Scope-Shift">
                    <div className="form-group">
                        <label style={{ marginBottom:"0rem"}}>Scope:</label>
                        <input type="text" className="form-control-admin-details" id="Scope" name="Scope"  value={Scope} />
                    </div>

                    <div className="form-group">
                        <label style={{ marginBottom:"0rem"}}>Shift:</label>
                        <input type="text" className="form-control-admin-details" id="Shift" name="Shift"  value={Shift} />
                    </div>
                  </div>
              </div>
              <div className="detail-1">
                  <div>
                    <h5> Team</h5>
                  </div>
                  <div className="Audit-Team">
                      <div className="form-group">
                          <label style={{ marginBottom:"0rem"}}>Auditor:</label>
                          <input type="text" className="form-control-admin-details" id="auditTeam" name="auditTeam"  value={auditTeam} />
                      </div>
                      <div className="form-group">
                        <label style={{ marginBottom:"0rem"}}>Token:</label>
                        <input type="text" className="form-control-admin-details" id="auditorTokens" name="auditorTokens"  value={auditorTokens} onChange={e=>onInputchange(e)} />
                        <button className="auditor-update-button"  onClick={handleUpdate}>Update</button>
                      </div>
                      
                  </div>

                  <div className="Audit-Team">
                      <div className="form-group">
                            <label style={{ marginBottom:"0rem"}}>Auditee</label>
                            <input type="text" className="form-control-admin-details" id="auditee" name="auditee"  value={auditee} />
                      </div>
                      <div className="form-group">
                          <label style={{ marginBottom:"0rem"}}>Token Number:</label>
                          <input type="text" className="form-control-admin-details" id="auditeeTokens" name="auditeeTokens"  value={auditeeTokens} />
                      </div>
                  </div>

              </div>

              <div className="detail-1">
                  
                  <div className="Audit">
                      <div className="form-group">
                          <label style={{marginRight:"4%", marginBottom:"0rem"}}>Audit Link:</label>
                          <button className="auditor-update-button"
                          onClick={() => {
                            if (Audit_Link) {
                              window.open(Audit_Link, '_blank');
                            } else {
                              alert('Audit has not been yet uploaded');
                            }
                          }}
                          
                          >
                            View 
                          </button>
                      </div>
                      <div className="form-group">
                          <label style={{marginRight:"4%",marginBottom:"0rem"}}>Audit Evidence:</label>
                          <Link to={`/viewAuditEvidence/${_id}`}>
                          <button
                            style={{
                                marginTop:'5%',
                                backgroundColor: "#007BFF",
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
                            Proofs
                          </button>
                          </Link>
                      </div>
                  </div>
                  
              </div>
              <div className="detail-1">
                <div>
                    <h5>NC</h5>
                </div>
                <div className="NC">
                      <div className="form-group">
                          <label style={{marginRight:"4%", marginBottom:"0rem"}}>Auditee NC Link:</label>
                          <Link to={`/viewAuditeeNC/${_id}`}>
                          View
                          </Link>
                      </div>
                      <div className="form-group">
                          <label style={{marginRight:"4%", marginBottom:"0rem"}}>Admin NC Link:</label>
                          <Link to={`/viewAdminNC/${_id}`}>
                          View
                          </Link>
                      </div>
                     
                  </div>
                  <div className="form-group">
                          <label style={{marginRight:"4%", marginBottom:"0rem"}}>NC Evidences:</label>
                          <Link to={`/viewEvidence/${_id}`}>
                          <button
                            style={{
                                marginTop:'5%',
                                backgroundColor: "#007BFF",
                                borderRadius: "4px",
                                color: "white",
                                padding: "5px",
                                fontSize: "small",
                                width:"100%"
                      
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
                      <div className="nc-timeline" style={{display:"flex"}}>
                        <div className="form-group">
                              <label style={{ marginBottom:"0rem"}}>Closure Date:</label>
                              <input type="text" className="form-control-admin-details" id="NC_Closure_date" name="NC_Closure_date"  value={formatDate(NC_Closure_date)} />
                        </div>
                        <div className="form-group">
                              <label style={{ marginBottom:"0rem"}}>Time Taken:</label>
                              <input type="text" className="form-control-admin-details" id="timeToClose" name="timeToClose"  value={formatTime(timeToClose)} />
                        </div>
                      </div>
                      <div className="form-group">
                        <Link to={`/closeNC/${_id}`}> 
                          <button className="Close-nc-btn" >Close NC</button>
                        </Link>
                      </div>
              </div> 
            </div>
        </form>
        </Box>
    </div>
        </>
      );
    };
  
  export default UserModal