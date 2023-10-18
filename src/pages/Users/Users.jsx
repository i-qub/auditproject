import { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import { useHistory, useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Layout from "../../components/Layout/Layout";
import SearchAppBar from "../../components/searchinput/search";
import "./Profile.css";
import _ from 'lodash';
import CategoriesModal from "../../components/Modal/CategoriesModal";
import EditCategoriesModal from "../../components/Modal/EditCategoriesModal";
// import UserModal from "../../components/Modal/USerModal";
import axios from 'axios'
import './image'
import SelectFileButton from "./image";
import { Button } from "bootstrap";
import { MarginRounded } from "@mui/icons-material";
const pageSize = 11;
const Users = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [users,setUsers] = useState([]);
  const [pagination , setPagination] = useState();
  const [currentPage , setCurrentPage] = useState(1);
  useEffect(()=>{
    loadCategories();
  },[]);
  
  const loadCategories = async()=>{
      const result = await axios.get("http://localhost:9955/mobileUser/getAllMobileUsers")
      setUsers(result.data.data)
      setPagination(_(result.data.data).slice(0).take(pageSize).value())
      console.log("29",result.data.data)
  }

  
  const pageCount = users ? Math.ceil(users.length/pageSize): 0;
  const pages = _.range(1,pageCount+1)
  const paginationChnage = (pageNo)=>{
    setCurrentPage(pageNo);
    const startIndex =  (pageNo - 1) * pageSize;
    const paginatedPost = _(users).slice(startIndex).take(pageSize).value();
    setPagination(paginatedPost)
  }
  const deleteCategory = async(id) =>{
    let result = await axios.post('http://localhost:4000/user/deleteuser?id='+id);
    console.log("44",result.status)
    // if(result.ok){
      // history.push("/explore")
    // }
    window.location.replace('/users');
 }
   return (
    <div><h1>Hello</h1></div>
  );
};

export default Users;
