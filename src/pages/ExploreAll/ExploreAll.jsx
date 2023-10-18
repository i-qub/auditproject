// import { useEffect, useState } from "react";
// import SearchBar from "material-ui-search-bar";
// import { useHistory, useParams,Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import Layout from "../../components/Layout/Layout";
// import "./Profile.css";
// import _ from 'lodash';
// // import CategoriesModal from "../../components/Modal/CategoriesModal";
// import EditCategoriesModal from "../../components/Modal/EditCategoriesModal";
// import axios from 'axios'
// import './image'
// import SelectFileButton from "./image";
// import { Button } from "bootstrap";
// const pageSize = 10;
// const ExploreAll = () => {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [categories,setCategories] = useState([]);
//   const [pagination , setPagination] = useState();
//   const [currentPage , setCurrentPage] = useState(1);
//   useEffect(()=>{
//     loadCategories();
//   },[]);
  
//   const loadCategories = async()=>{
//       const result = await axios.get("http://localhost:4000/category/getAllCategory")
//       setCategories(result.data.getallcategory)
//       setPagination(_(result.data.getallcategory).slice(0).take(pageSize).value())
//   }
//   const pageCount = categories ? Math.ceil(categories.length/pageSize): 0;
//   const pages = _.range(1,pageCount+1)
//   const paginationChnage = (pageNo)=>{
//     setCurrentPage(pageNo);
//     const startIndex =  (pageNo - 1) * pageSize;
//     const paginatedPost = _(categories).slice(startIndex).take(pageSize).value();
//     setPagination(paginatedPost)
//   }
//   const deleteCategory = async(id) =>{
//     let result = await axios.get('http://localhost:4000/category/deleteCategory?id='+id);
//     // console.log("37",result.status)
//     // if(result.ok){
//       // history.push("/explore")
//     // }
//     window.location.replace('/explore');
//  }
//    return (
    
//     <Layout>
//       <SearchBar style={{marginRight:"60px", marginLeft:"60px", marginTop:"5px"}}  
//     // value={this.state.value}
//     // onChange={(newValue) => this.setState({ value: newValue })}
//     // onRequestSearch={() => doSomethingWith(this.state.value)}
//   />

      
//       <div className="container">
//             <br />
//            <CategoriesModal/>
//     <div style={{ height: 400, width: '100%' ,marginTop:"20px" }}>{
//       !pagination ?("No Data Found") : (
//             <table className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Categories</th>
//                   <th scope="col">Priority</th>
//                   <th scope="col">Video Count</th>
//                   <th scope="col">Icon</th>
//                   <th scope="col">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//               {
//                   pagination.map((users,index)=>(
//                     <tr>
//                     <th scope="row">{index + 1}</th>
//                     <td>{users.categoryName}</td>
//                     <td>{users.categoryPriority}</td>
//                     <td>{1}</td>
//                     <td> <img src={users.categoryImage} style={{width:"50px",height:"50px"}}/></td>
//                     <td>
//                       <Link className="btn btn-success" style={{marginLeft:"5px"}} to={`/category/edit/${users._id}`}>Edit</Link>
//                       <button className="btn btn-danger" style={{marginLeft:"5px"}} onClick={()=>deleteCategory(users._id)}>Delete</button>
//                     </td>
                    
//                   </tr>
//                   ))
//                 }
//               </tbody>
//             </table>
//       )}
//       <nav className="d-flex justify-content-center">
//         <ul className="pagination">
//         {
//                 pages.map((page)=>(
//                   <li className={
//                     page === currentPage ? "page-item active" : "page-item"
//                   }>
//                     <p className="page-link" onClick={()=>paginationChnage(page)}>{page}</p>
//                     </li>
//                 ))
//               }

//         </ul>
//       </nav>
//     </div>
//       </div>
//     </Layout>
//   );
// };

// export default ExploreAll;
