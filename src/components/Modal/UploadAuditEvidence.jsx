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
import "../Modal/uploadEvidence.css"
import { Padding } from "@mui/icons-material";
import { notifyError } from "../../utils/notifyToasts";
import { notifySuccess } from "../../utils/notifyToasts";

const style = {
    position: 'absolute',
    top: '25%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: '900px !important',
    bgcolor: 'background.paper',
    height:'80%',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


const UploadAuditEvidence =  ()=>{
    const history = useHistory();

    const {id} = useParams();
    console.log('31', id)
    const [Evidences ,setEvidences] = useState ([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
    };

    const handleUpload = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            console.log('85', selectedFiles)
            for (let i = 0; i < selectedFiles.length; i++) {
                formData.append("files", selectedFiles[i]);
            }
            console.log('88', formData);
            try {
                const response = await axios.post(
                "http://13.127.182.122:5000/NcUpload/uploadNcAudit",
                formData
                );
                console.log('95', response);
                setEvidences(response.data);
                console.log('78', Evidences)
                notifySuccess("Successfully Uploaded")
                
            } catch (err) {
                notifyError("Files couldn't be uploaded");
            }
    };
    const PostLinks = async (e) => {
        e.preventDefault();
        const data = {
            id: id,
            Audit_Proof_Link: Evidences
        }
        console.log('90', data);
        try{
            const result = await axios.post(
                "http://13.127.182.122:5000/audit/uploadAuditProof",
                data
            );
            console.log('96', result)
            history.push('/posts');
        }catch(err){
            notifyError("Couldn't send links");
        }
    };
    const handleClose = async (e) =>{
        history.push("/posts");
      };


      return (
        <>
       
            <Layout>
   
            <Box sx={{ ...style, width: 900, marginTop:20 }}> 
          <form >
          <span style={{ float: "right", cursor: "pointer" }} onClick={handleClose}>X</span>
          <div className="table" >
            <div className="row_1">
                {/* <div className="downloadNC">
                        <div><label>Download NC form</label></div>
                    
                        <div className="input1"><button 
                            className="btn"
                            onClick={() => {
                                }}>Download </button>
                        </div>
                </div> */}

                       
                <div className="upload1">
                        <h6>Add Evidence</h6>
                        <input type="file" onChange={handleFileChange} multiple/>
                        <button className="btn1"  onClick={handleUpload}>Upload</button>
                </div>
                       
                
                </div>
            

      
                <div className="row_2">
                   
                    <div className="button">   
                            <button className="Btn" onClick={PostLinks
                            }>Submit</button>
                    </div> 
                        
                    {/* <div className="button">   
                            <button className="btn" onClick={()=>{
                                  history.push("/")
                            }}>Close</button>
                    </div>  */}
                </div>
           </div>
        </form>
         </Box>
       
        </Layout>
        </>
      );
    };
  
  export default UploadAuditEvidence;