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

const OrderModal =  ()=>{
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
   
const [orders,setOrder] = useState ({
  _id:"",
  userName:"",
  orderdetails:"",
  sellerId:"",
  status:"",
  amount:"",
  
  
});
const { _id,userName,orderdetails,sellerId,amount} = orders;
const onInputchange = e => {
    setOrder({...orders,[e.target.name]: e.target.value})
};

useEffect (() => {
    loadUser();
},[]);

const onSubmit = async e =>{
    e.preventDefault();
    const result = await axios.post('http://localhost:4000/user/update?id='+id,orders)
    history.push("/users")
    console.log("77",result.data)
}

const loadUser = async() =>{
    const result = await axios.get('http://localhost:4000/Order/getOrderById?id='+id);
    setOrder(result.data.listorders);
    // console.log(users.Sidebar)
    console.log("86",result.data.listorders)
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
                <div className="form-group" style={{marginTop:"30px"}}>
                <label>Order Id</label>
                <input type="text" className="form-control"  placeholder="Order Id" value={_id} onChange={e=>onInputchange(e)}/>
                </div>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control"  placeholder="userName" value={userName} onChange={e=>onInputchange(e)}/>
                </div>
                </div>
                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>Order Details</label>
                <input type="text" className="form-control"  placeholder="orderdetails" value={orderdetails} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>sellerId</label>
                <input type="text" className="form-control"  placeholder="sellerId" value={sellerId} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>Amount</label>
                <input type="text" className="form-control"  placeholder="Amount" value={amount} onChange={e=>onInputchange(e)}/>
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
  
  export default OrderModal