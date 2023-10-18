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

const EditPostModal =  ()=>{
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
   
const [posts,setPost] = useState ({
  _id:"",
  postQuestion:"",
  optionA:"",
  optionB:"",
  optionCountA:"",
  optionCountB:"",
  captions:"",
  foodAvailable:"",
  likeCount:"",
  viewCount:"",
  nameOfDish:"",
  dishPrice:"",
  quantity:"",
  rewards:""
});
const { _id,postQuestion,optionA,optionB,optionCountA,optionCountB,captions,foodAvailable,likeCount,viewCount,nameOfDish,dishPrice,quantity,rewards} = posts;
const onInputchange = e => {
    setPost({...posts,[e.target.name]: e.target.value})
};

useEffect (() => {
    loadPost();
},[]);

const onSubmit = async e =>{
    e.preventDefault();
    const result = await axios.post('http://localhost:4000/user/update?id='+id,posts)
    history.push("/posts")
    console.log("77",result.data)
}

const loadPost = async() =>{
    const result = await axios.get('http://localhost:4000/Post/userPosts?id='+id);
    setPost(result.data.userposts);
    // console.log(posts.Sidebar)
    console.log("84",result.data.userposts)
    console.log("85",id)
    
   
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
                <label>postQuestion</label>
                <input type="text" className="form-control"  placeholder="postQuestion" value={postQuestion} onChange={e=>onInputchange(e)}/>
                </div>
                <div className="form-group">
                    <label>optionA</label>
                    <input type="text" className="form-control"  placeholder="optionA" value={optionA} onChange={e=>onInputchange(e)}/>
                </div>
                </div>
                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>optionB</label>
                <input type="text" className="form-control"  placeholder="optionB" value={optionB} onChange={e=>onInputchange(e)}/>
                </div>

                {/* <div className="form-group" style={{marginLeft:"90px"}}>
                <label>optionCountA</label>
                <input type="text" className="form-control"  placeholder="optionCountA" value={optionCountA} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>optionCountB</label>
                <input type="text" className="form-control"  placeholder="optionCountB" value={optionCountB} onChange={e=>onInputchange(e)}/>
                </div> */}

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>captions</label>
                <input type="text" className="form-control"  placeholder="captions" value={captions} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>foodAvailable</label>
                <input type="text" className="form-control"  placeholder="foodAvailable" value={foodAvailable} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>likeCount</label>
                <input type="text" className="form-control"  placeholder="likeCount" value={likeCount} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>viewCount</label>
                <input type="text" className="form-control"  placeholder="viewCount" value={viewCount} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>nameOfDish</label>
                <input type="text" className="form-control"  placeholder="nameOfDish" value={nameOfDish} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>dishPrice</label>
                <input type="text" className="form-control"  placeholder="dishPrice" value={dishPrice} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>quantity</label>
                <input type="text" className="form-control"  placeholder="quantity" value={quantity} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>rewards</label>
                <input type="text" className="form-control"  placeholder="rewards" value={rewards} onChange={e=>onInputchange(e)}/>
                </div>
                
                <div className="form-group" style={{marginLeft:"90px"}}>
                <label>PostId</label>
                <input type="text" className="form-control"  placeholder="postId" value={_id} onChange={e=>onInputchange(e)}/>
                </div>

                <div className="col-md-4"></div>
                <div className="col-md-3"></div>
                
                <div className="col-md-4">
                    <button type="submit" className="btn btn-warning" style={{marginLeft:"74px"}}>Update</button>
                    <button className="btn btn-primary" style={{marginLeft:"75px"}} onClick={()=>{
                          history.push("/posts")
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
  
  export default EditPostModal