import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import UseMutation from "../../hooks/useMutation";
// const URL = "http://localhost:4000/images/uploadContentImages"
// import S3FileUpload from 'react-s3';
// import uploadFile  from 'react-s3';
// import { Upload } from "@aws-sdk/lib-storage";
// import { S3Client, S3 } from "@aws-sdk/client-s3";
import { useCallback } from "react";

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


const CategoriesModal =  ()=>{
  var re={};
    const history = useHistory();
    const [error,setError] = useState('')
    const [categoryimages,setCategoryImage] = useState("");
    
   const upload = async(e)=>{
    console.log("35",e.target.files[0])
    setCategoryImage(e.target.files[0])
    }

    const uploadImage = async (e)=>{
      e.preventDefault();
      let formData = new FormData();
      formData.append("images",categoryimages)
      const config = {
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
      console.log("50",categoryimages)
      re =await axios.post("http://localhost:4000/images/uploadContentImages",formData,config)
      console.log("55",re)
      setCategoryImage(re.data)
    }
    const [users , setUser] = useState({
      categoryName:"",
      categoryPriority:"",
      id:""
  })
  const {categoryName,categoryPriority,id} = users;

  console.log("62",categoryimages)

  const onInputChnage = async(e) =>{
    console.log("64",categoryimages)
      setUser({...users,[e.target.name]:e.target.value,categoryimages})
  }

  const handleClick = ()=>{
    const form_Data = new FormData()
    form_Data.append("images",categoryimages)
  }


  const onSubmit = async(e)=>{
      e.preventDefault();
      await axios.post('http://localhost:4000/category/addCategory',users)
      history.push("/")
  }

  
    const [modal, setModal] = useState(false);
    const ToggleModal = ()=>{
        setModal(true)
    }
    const closeModal = ()=>{
        setModal(false)
    }
    
      return (
        <>
            <Button variant="contained" component="label" onClick={ToggleModal}>
                Add Categories
            </Button>
        <div>
      <Modal
        open={modal}
        onClose={ToggleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 900 }}> 
          <form onSubmit={e=>onSubmit(e)}>
          <h2 id="parent-modal-title" style={{marginLeft:"70px"}}>Add Categories</h2>
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-8">
                
                <div className="form-group">
                <label>Upload Image</label>
                <input type="file" className="form-control"name="categoryimages" onChange={upload} />
                <button className="btn btn-danger" style={{marginTop:"7px",marginLeft:"470px"}} type="submit" onClick={uploadImage}>Upload</button>
              </div>
                <div className="form-group">
                <label>Categories</label>
                <input type="text" className="form-control" id="categoryName" name="categoryName" placeholder="Enter Categories Name" value={categoryName} onChange={e=>onInputChnage(e)}/>
                </div>
                <div className="form-group">
                    <label>Priority</label>
                    <input type="text" className="form-control" id="categoryPriority" name="categoryPriority" placeholder="Priority" value={categoryPriority} onChange={e=>onInputChnage(e)}/>
                </div>
             
                </div>
                
                <div className="col-md-4"></div>
                <div className="col-md-3"></div>
                <div className="col-md-4">
               
                    <button type="submit" className="btn btn-primary" style={{marginLeft:"2px"}} onClick={handleClick}>Submit</button>
                    <button className="btn btn-warning" style={{marginLeft:"2px"}} onClick={closeModal}>close</button>
                   
                </div>
            </div>
        </form>
          <ToggleModal />
        </Box>
      </Modal>
    </div>
        </>
      );
    };
  
  export default CategoriesModal