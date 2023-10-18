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
import "../Modal/raiseNC.css"
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
    height:'50%',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    justifyContent:'center',
    alignItems: 'center'
  };


const RaiseNC =  ()=>{
    const history = useHistory();

    const {id} = useParams();
    console.log('31', id)
    const [NC_LINKS,setNC_LINKS] = useState ([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
    };
    const [NC_Form_Link, setLink] = useState([]);
    const getLink = async (e) => {
        try{
            const result = await axios.get("http://13.127.182.122:5000/audit/getNCForm");
            console.log('47', result);
            window.open(result.data[0].download_Nc_Link, "_blank")

        }catch(err){
            notifyError("Couldn't get link")
        }
    }
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
                setNC_LINKS(response.data);
                console.log('78', NC_LINKS)
                notifySuccess("Successfully Uploaded")
                
            } catch (err) {
                notifyError("Files couldn't be uploaded");
            }
    };
    const PostLinks = async (e) => {
        e.preventDefault();
        const data = {
            id: id,
            NC_Link: NC_LINKS
        }
        console.log('90', data);
        try{
            const result = await axios.post(
                "http://13.127.182.122:5000/audit/uploadNcform",
                data
            );
            console.log('96', result)
            history.push("/");
            notifySuccess('Successfullly Submitted');
        }catch(err){
            notifyError("Couldn't send links");
        }
    };
    const handleClose = async (e) =>{
        history.push("/");
      };


      return (
       
       <>
            <Layout>
   
            <Box sx={{ ...style , marginTop:20 }}> 
          
          <span style={{ float: "right", cursor: "pointer" }} onClick={handleClose}>X</span>
          <div className="table" >
            <div className="row_1" style={{display:"flex", flexDirection:"column"}}>
                <div className="downloadNC">
                        <div style={{marginRight:'63%'}}><label>Download NC form</label></div>
                    
                        <div className="input1"><button 
                            className="btn-nc"
                            onClick={getLink}>Download </button>
                        </div>
                </div>

                       
                <div className="upload-1">
                        <h6 style={{marginRight:'2%'}}>Add NC file</h6>
                        <input type="file" onChange={handleFileChange} multiple/>
                        <button className="btn-1"  onClick={handleUpload}>Upload</button>
                </div>
                       
                
                </div>
            

      
                <div className="row_2">
                   
                    <div className="button">   
                            <button  className="btn-2" onClick={PostLinks
                            }>Submit</button>
                    </div> 
                </div>
           </div>
        
         </Box>
       
        </Layout>
        </>
       
      );
    };
  
  export default RaiseNC