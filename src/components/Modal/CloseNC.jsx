
 import React from 'react'
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../../pages/sideBar/sideBar";
import { notifyError, notifySuccess } from '../../utils/notifyToasts';
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

const CloseNC =  ()=>{
    const history = useHistory();

const {id} = useParams();
const closeNC = (id) =>{
  const data = {
    id: id,
    NC_Closure: true
  }
  try{
    axios.post('http://13.127.182.122:5000/audit/NCclosure?id='+id+'&NC_Closure='+data.NC_Closure).then(
        history.push(`/auditdetails/${id}`),
        notifySuccess('Successfully Closed')
    ).catch((err)=>{
        console.log(err)
    })  

  }catch(err){
    notifyError("Couldn't close NC")
  }
}

const NoSelection = async(id) =>{
  // let result = await axios.post('http://localhost:4000/Order/Orderdelete?id='+id);
  // console.log("96",result)
  console.log("95",id)
  history.push(`/auditdetails/${id}`)
  
}


      return (
        <>
        <Sidebar />
            
        <div>
    <form>
        <Box sx={{ ...style, width: 900 }}> 
          <form >
          <p  style={{marginLeft:"190px"}}>Are You sure that you want to close the NC?</p>
          <button className="btn btn-danger" style={{marginLeft:"350px"}} onClick={()=>closeNC(id)}>YES</button>
          <button className="btn btn-danger" style={{marginLeft:"5px"}} onClick={()=>NoSelection(id)}>NO</button>
        </form>
        </Box>
      </form>
    </div>
        </>
      );
    };
  
  export default CloseNC