import React, { useState, useEffect } from "react";
// import { Button } from "@material-ui/core";
import tableIcons from "../Orders/Icons";
// import ConRegiPopup from "../../components/Popup/ConRegiPopup";
// import ConRegistration from "./conregistration/ConRegistration";
// import PageTitle from "../../components/PageTitle/PageTitle";
import MaterialTable from "material-table";
// import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
// import Edit from "@material-ui/icons/Edit";

// import EditEmployeesPopup from "../../components/Popup/EditEmployeesPopup";
// import ContractorEdit from "./conregistration/ContractorEdit";
// import { setUserSession } from "../../components/Utils/Common";

// const theme = createTheme({
//   overrides: {
//     MuiTableCell: {
//       root: {
//         paddingTop: 10,
//         paddingBottom: 10,
//         "&:last-child": {
//           paddingRight: 5,
//         },
//       },
//     },
//   },
// });

function Contractor() {
  const [openRegiPopup, setOpenRegiPopup] = useState(false);
  const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
  const [editData, setEditData] = useState([]);

  const [contractor] = useState("");

  // const handleOpenForEdit = async (obj) => {
  //   setEditData(obj);
  //   setOpenEmployeesPopup(true);
  // };
  // // const handleOpen = () => {
  // //   setOpenEmployeesPopup(true);
  // // };

  // const handleClickClose = () => {
  //   setOpenEmployeesPopup(false);
  // };

  // const handleClickOpen = () => {
  //   setOpenRegiPopup(true);
  // };

  // const handleClose = () => {
  //   setOpenRegiPopup(false);
  // };

  const [orders, setOrders] = useState([]);

  const loadCategories = async()=>{
    const result = await axios.get("http://localhost:4000/Order/getAllOrders")
    setOrders(result.data.getorders)
    
    console.log("32",result.data.getorders)
}
  useEffect(() => {
    loadCategories();
  }, []);

  // const deleteUser = async (id) => {
  //   await axios.get(`http://localhost:3000/con/deleteMeeting?id=${id}`);
  //   window.location.reload(true);
  // };

  return (
    <>
    <h1>Hello</h1>
     
    </>
  );
}

export default Contractor;
