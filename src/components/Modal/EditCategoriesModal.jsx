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

const EditCategoriesModal =  ()=>{
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
  categoryName:"",
  categoryPriority:"",
});
const { categoryName,categoryPriority} = users;
const onInputchange = e => {
    setUser({...users,[e.target.name]: e.target.value})
};

useEffect (() => {
    loadUser();
},[]);


const onSubmit = async e =>{
    e.preventDefault();
    const result = await axios.post('http://localhost:4000/category/editCategory',users)
    history.push("/explore")
    console.log("70",result)

}

const loadUser = async() =>{
    const result = await axios.get('http://localhost:4000/category/getCategory?id='+id);
    setUser(result.data);
    console.log(users.Sidebar)
   
}
      return (
        <>
        <Sidebar />
            
        <div>
    <form>
        <Box sx={{ ...style, width: 900 }}> 
          <form >
          <h2 id="parent-modal-title" style={{marginLeft:"70px"}}>Edit Categories</h2>
            <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-8">
                <div className="form-group">
                <label>Categories</label>
                <input type="text" className="form-control" id="categoryName" name="categoryName" placeholder="Enter Categories Name" value={categoryName} onChange={e=>onInputchange(e)}/>
                </div>
                <div className="form-group">
                    <label>Priority</label>
                    <input type="text" className="form-control" id="categoryPriority" name="categoryPriority" placeholder="Priority" value={categoryPriority} onChange={e=>onInputchange(e)}/>
                </div>
                </div>
                
                <div className="col-md-4"></div>
                <div className="col-md-3"></div>
                
                <div className="col-md-4">
                    <button type="submit" className="btn btn-warning" style={{marginLeft:"-10px"}} onClick= {onSubmit}>Update</button>
                    <button className="btn btn-primary" style={{marginLeft:"2px"}} onClick={()=>{
                          history.push("/explore")
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
  
  export default EditCategoriesModal