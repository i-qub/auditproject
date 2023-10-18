import { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Layout from "../../components/Layout/Layout";
import MaterialTable from 'material-table-jspdf-fix';
import Box from '@mui/material/Box';
import "./addnewChecklist.css";
//import "./Profile.css";
import _ from 'lodash';
import CategoriesModal from "../../components/Modal/CategoriesModal";
import EditCategoriesModal from "../../components/Modal/EditCategoriesModal";
// import UserModal from "../../components/Modal/USerModal";
import axios from 'axios'
//import './image'
//import SelectFileButton from "./image";
import { Button } from "bootstrap";
import { MarginRounded } from "@mui/icons-material";
import { notifyError } from "../../utils/notifyToasts";

const pageSize = 10;

const style = {
    position: 'absolute',
    top: '10%',
    left: '30%',
    right: '20%',
    height: '42%',
    // transform: 'translate(-50%, -50%)',
    width: '50% !important',
    bgcolor: 'background.paper',

    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const AddnewChecklist = () => {
    const [selectedFile, setSelectedFile] = useState("");
    const history = useHistory();
    const [auditDetails, setAuditDetails] = useState({
        auditType:"",
        Scope:"",
        checklist_Link:"",
    })
    const {auditType, Scope, checklist_Link} = auditDetails;
    const onInputchange = (e) =>{
    setAuditDetails({...auditDetails,[e.target.name]:e.target.value})
    }

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = async(e) => {
      e.preventDefault();
      console.log("60",selectedFile)
      const formData = new FormData();
      formData.append('file', selectedFile);
      //console.log('63', [formData]);
      
      try{
        const response = await axios.post('http://13.127.182.122:5000/fileUpload/uploadChecklistAudit',formData);
        console.log('67', response);
        auditDetails.checklist_Link = response.data;
        // history.push("/");
      }catch(err){
        notifyError("File couldn't upload");
      }
    };
    //console.log('74', auditDetails);
    const submit = async(e)=>{
          e.preventDefault();
          const result = await axios.post('http://13.127.182.122:5000/checklist/addChecklist',auditDetails);
          console.log("78",result);
          history.push("/")
        };
    const handleClose = async (e) =>{
      history.push("/");
    };




   return (
    <Layout>
      
    <div className="container">
    <Box sx={{ ...style}}> 
         <div className="upload">
                <form >
                <h5 id="parent-modal-title" >Add new checklist 
                <span style={{ float: "right", cursor: "pointer" }} onClick={handleClose}>×</span>
                </h5>
                <div>
                    <input type="file" style={{}} onChange={handleFileChange} />
                    <button className="add-checklist"  onClick={handleUpload}>Upload</button>
                </div>
                </form>
          </div>
          <div className="submit">
                <form>
                    <p style={{fontWeight:'300', fontSize:'14px'}}>**please provide checklist type and scope</p>
                <div className="input">
                        <label className="labelclass">Audit Type :</label>
                        <input type="text" className="form-control" id="auditType" name="auditType"  value={auditType} onChange={e=>onInputchange(e)}/>
                    </div>
                    <div className="input">
                        <label className="labelclass"> Scope :</label>
                        <input type="text" className="form-control" id="Scope" name="Scope"  value={Scope} onChange={e=>onInputchange(e)}/>
                    </div>
                    <div><button className="submit-btn" type="submit" onClick={submit}>Submit</button></div> 
                </form>
          </div>
        </Box>
    </div>
  </Layout>
  );
};

export default AddnewChecklist;
