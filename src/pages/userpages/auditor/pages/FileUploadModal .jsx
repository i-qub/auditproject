
import {  useState} from "react";
import ALayout from '../Layout/ALayout'

import axios from "axios";
import { Box } from "@mui/material";
import { notifyError, notifySuccess } from "../../../../utils/notifyToasts";
import { useHistory, useParams } from 'react-router-dom';
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

const FileUploadModal = () => {
    const {id} = useParams();
    console.log('26', id);
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState("");
    const [auditDetails, setAuditDetails] = useState({
        id: id,
        Audit_Link:""
    })
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
    
      const handleUpload = async(e) => {
        e.preventDefault();
        console.log("39",selectedFile)
        const formData = new FormData();
        formData.append('file', selectedFile);
        //console.log('63', [formData]);
        
        try{
          const response = await axios.post('http://13.127.182.122:5000/fileUpload/uploadChecklistAudit',formData);
          console.log('47', response);
          const userToken = JSON.parse(localStorage.getItem('user'))?.token;
          console.log('49',userToken);
          auditDetails.Audit_Link = response.data;
          console.log('51', auditDetails.Audit_Link)
          notifySuccess('File successfully saved')
        }catch(err){
          notifyError("File couldn't upload");
        }
      };
      const submit = async(e)=>{
        e.preventDefault();
        const result = await axios.post('http://13.127.182.122:5000/audit/editAuditform',auditDetails);
        console.log("55",result);
        const userToken = JSON.parse(localStorage.getItem('user'))?.token;
          console.log('64',userToken);
        if(userToken ==="K039"){history.push("/")}else{history.push("/auditortable")}
        // history.push("/auditortable")
        notifySuccess('File successfully uploaded')
      };
      const handleClose = async (e) =>{
        // history.push("/posts");
      };
      return (
        <ALayout>
          
        <div className="container">
        <Box sx={{ ...style}}> 
             <div className="upload">
                    <form >
                    <h5 id="parent-modal-title" >Add audit file
                    {/* <span style={{ float: "right", cursor: "pointer" }} onClick={handleClose}>×</span> */}
                    </h5>
                    <div>
                        <input type="file" style={{}} onChange={handleFileChange} />
                        <button className="add-checklist"  onClick={handleUpload}>Upload</button>
                    </div>
                    </form>
              </div>
              <div><button className="submit-btn" type="submit" onClick={submit}>Submit</button></div>
              </Box>
    </div>
  </ALayout>
 );
  };
export default FileUploadModal