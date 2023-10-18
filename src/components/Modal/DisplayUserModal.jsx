import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Sidebar from "../../pages/sideBar/sideBar";
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
   
const [users,setUser] = useState ({
  username:"",
  email:"",
  gender:"",
  accountType:"",
  deepLink_URL:"",
  number:"",
  bio:"",
  status:"",
  DOB:"",
  followers:"",
  password:"",
  createdAt:"",
  
});
const { username,email,gender,accountType,deepLink_URL,number,bio,status,DOB,followers,password,createdAt} = users;
const onInputchange = e => {
    setUser({...users,[e.target.name]: e.target.value})
};

useEffect (() => {
    loadUser();
},[]);

const onSubmit = async e =>{
    e.preventDefault();
    const result = await axios.post('http://localhost:4000/user/update?id='+id,users)
    history.push("/users")
    console.log("77",result.data)
}

const loadUser = async() =>{
    const result = await axios.get('http://localhost:9955/mobileUser/getUserByIds?id='+id);
    setUser(result.data.data[0]);
    // console.log(users.Sidebar)
    console.log("86",result.data.data[0].location)
    console.log("87",id)
   
}
      return (
        <>
        <Sidebar />
            
        <div>
    <form>
        <Box sx={{ ...style, width: 900 }}> 
          <form >
          <h2 id="parent-modal-title" style={{marginLeft:"70px"}}>Edit User</h2>
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-8">
                <div className="form-group" style={{marginTop:"170px"}}>
                <label>User Name</label>
                <input type="text" className="form-control"  placeholder="Enter User Name" value={username} onChange={e=>onInputchange(e)}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"  placeholder="Enter Email Id" value={email} onChange={e=>onInputchange(e)}/>
                </div>
                </div>
                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>Gender</label>
                <input type="text" className="form-control"  placeholder="gender" value={gender} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>followers</label>
                <input type="text" className="form-control"  placeholder="followers" value={followers} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>Account Type</label>
                <input type="text" className="form-control"  placeholder="accountType" value={accountType} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>deepLink_URL</label>
                <input type="text" className="form-control"  placeholder="deepLink_URL" value={deepLink_URL} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>Mobile Number</label>
                <input type="text" className="form-control"  placeholder="Mobile Number" value={number} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>User Bio</label>
                <input type="text" className="form-control"  placeholder="bio" value={bio} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>Status</label>
                <input type="text" className="form-control"  placeholder="Status" value={status} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>Date of Birth</label>
                <input type="text" className="form-control"  placeholder="Date of Birth" value={DOB} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>password</label>
                <input type="text" className="form-control"  placeholder="Hashed Password" value={password} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>createdAt</label>
                <input type="text" className="form-control"  placeholder="Mobile Number" value={createdAt} onChange={e=>onInputchange(e)}/>
                </div>
                
                <div className="col-md-4"></div>
                <div className="col-md-3"></div>
                
                <div className="col-md-4">
                    <button className="btn btn-primary" style={{marginLeft:"75px"}} onClick={()=>{
                          history.push("/users")
                    }}>close</button>
                </div>
            </div>
        </form>
        </Box>
      </form>
    </div>
        </>
      );
    };
  
  export default UserModal