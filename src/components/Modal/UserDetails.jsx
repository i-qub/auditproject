import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Sidebar from "../../pages/sideBar/sideBar";
import MaterialTable from 'material-table-jspdf-fix';
import Layout from "../Layout/Layout";
import "../Modal/UserDetails.css"
import { Padding } from "@mui/icons-material";
const style = {
    position: 'absolute',
    top: '40%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: '900px !important',
    bgcolor: 'background.paper',
    heigh:'auto',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


const UserDetails =  ()=>{
    const history = useHistory();

    const {id} = useParams();
    console.log('31', id)
    const [userdetails,setUserDetails] = useState ({
        username:"",
        email:"",
        department:"",
        token:"",
        number:"",    
        isAdmin: false,
        isAuditee:false ,
        isAuditor: false,
        SupplierAudit: false,
        AS9100: false,
        MfgProcessFDY: false,
        MfgProcessMCshop: false,
        ProductFDY: false,
        ProductMCshop: false,
        QMS: false,
        verified: false,
        _id:"",
        password:""
    });
    const {username, email, department, token, number, isAdmin, isAuditee, isAuditor, AS9100, MfgProcessFDY,
        ProductFDY, ProductMCshop, QMS, verified, _id, MfgProcessMCshop, SupplierAudit } = userdetails;

    useEffect (() => {
        loadUser();
    },[]);



    const loadUser = async() =>{
        const result = await axios.get('http://13.127.182.122:5000/user/getUserwithUserId?id='+id);
        setUserDetails(result.data.data);
        console.log('59', result.data.data);
        console.log("91", userdetails)
        console.log("92",id)
    }

      return (
        <>
       
            <Layout>
   
            <Box sx={{ ...style, width: 900, marginTop:20 }}> 
          <form >
          <h2 id="parent-modal-title" style={{marginLeft:"10px"}}>User Details</h2>
          <div className="table-userdetail" >
            <div className="row_1-userdetail">
                <div className="colmn_1-userdetail">
                      <div><label>Username</label></div>
                      <div><label>Email</label></div>
                      <div><label>Department</label></div>
                      <div><label>Token Number</label></div>
                      <div><label>number</label></div>
                      <div className="skills-userdetail">
                        <div><h5>Skills</h5></div>
                          <div className="label-userdetail"><label>isAdmin</label></div>
                          <div className="label-userdetail"><label>isAuditee</label></div>
                          <div className="label-userdetail"><label>isAuditor</label></div>
                          <div className="label-userdetail"><label>SupplierAudit</label></div>
                          <div className="label-userdetail"><label>AS9100</label></div>
                          <div className="label-userdetail"><label>MfgProcessFDY</label></div>
                          <div className="label-userdetail"><label>MfgProcessMCshop</label></div>
                          <div className="label-userdetail"><label>ProductFDY</label></div>
                          <div className="label-userdetail"><label>ProductMCshop</label></div>
                          <div className="label-userdetail"><label>QMS</label></div>
                          <div className="label-userdetail"><label>verified</label></div>
                      </div>

                      
                </div>      
                <div className="colmn_2-userdetail">
                    <div className="input"><input type="text" className="form-control-userdetail" id="username" name="username"  value={username} /></div>
                    <div className="input"><input type="text" className="form-control-userdetail" id="email" name="email"  value={email} /></div>
                    <div className="input"><input type="text" className="form-control-userdetail" id="department" name="department"  value={department} /></div>
                    <div className="input"><input type="text" className="form-control-userdetail" id="token" name="token"  value={token} /></div>
                    <div className="input"><input type="text" className="form-control-userdetail" id="number" name="number"  value={number} /></div>

                    <div className="skills-userdetail">
                      <div><h5 style={{marginLeft:"10px"}}>Status</h5></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="isAdmin" name="isAdmin"  value={isAdmin} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="isAuditee" name="isAuditee"  value={isAuditee} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="isAuditor" name="isAuditor"  value={isAuditor} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="SupplierAudit" name="SupplierAudit"  value={SupplierAudit} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="AS9100" name="AS9100"  value={AS9100} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="MfgProcessFDY" name="MfgProcessFDY"  value={MfgProcessFDY} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="MfgProcessMCshop" name="MfgProcessMCshop"  value={MfgProcessMCshop} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="ProductFDY" name="ProductFDY"  value={ProductFDY} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="ProductMCshop" name="ProductMCshop"  value={ProductMCshop} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="QMS" name="QMS"  value={QMS} /></div>
                        <div className="input"><input type="text" className="form-control-userdetail" id="verified" name="verified"  value={verified} /></div>
                    </div>

                </div>
            </div>

      
                <div className="row_2-userdetail">
                    {/* <div className="btn-1">
                        <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small", width:"14%", height:"5%", marginLeft:"2%" }} 
                          onClick={() => {
                            if (Audit_Link) {
                              window.open(Audit_Link, '_blank');
                            } else {
                              alert('Audit has not been yet uploaded');
                            }
                          }}
                          
                          >
                            View Audit
                          </button>
                    </div> */}
                        
                    <div className="button-userdetail">   
                            <button className="btn-userdetail" onClick={()=>{
                                  history.push("/user/verification")
                            }}>Close</button>
                    </div> 
                </div>
           </div>
        </form>
         </Box>
       
        </Layout>
        </>
      );
    };
  
  export default UserDetails