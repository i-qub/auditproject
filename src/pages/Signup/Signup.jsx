import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  handleServerError,
  handleSignupError,
} from "../../utils/handleSignupError";
import {} from "react-toastify";
import axios from 'axios';
import Box from '@mui/material/Box';

import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import amico from "../../assets/amico.svg";
import amico from "../../assets/register.svg";
import "./Signup.css";
import { notifyError } from "../../utils/notifyToasts";
import { doesPropertyExist } from "../../utils/doesPropertyExist";
// import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: "#82869A",
    },
  },
});

const useStyles = makeStyles({
  root: {
    fontFamily: "DM Sans",
  },
  textField: {
    width: "510",
    marginBottom: "1.5rem",
    color: "textPrimary",
  },
  loaderWrapper: {
    position: "absolute",
    top: "40px",
    left: "50%",
    display: "flex",
    justifyContent: "center",
  },
  loader: {
    zIndex: "5",
  },
  wrapper: {
    position: "fixed",
    top: "0px",
    left: "0px",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: "5",
  },
});

const Signup = () => {
  const history = useHistory();
  // const api_url = process.env.REACT_APP_api_url;

  // const {id} = useParams();
    
  const [userdetails,setUser] = useState ({
    username:"",
    email:"",
    department:"",
    token:"",
    password:"",
    contactnumber:"",    
  });
  const [skills, setStatus] = useState({
    isAdmin:false,
    isAuditor:false,
    isAuditee:false,
    QMS:false,
    AS9100:false,
    MfgProcessFDY:false,
    MfgProcessMCshop:false,
    ProductFDY:false,
    ProductMCshop:false,
    SupplierAudit:false,
  })
  const { username,email,department, token, password, contactnumber} = userdetails;
  
  const {isAdmin, isAuditee, isAuditor, QMS, AS9100, MfgProcessFDY, MfgProcessMCshop, ProductFDY, ProductMCshop, SupplierAudit} = skills;
  
  const onInputchange = e => {
      setUser({...userdetails,[e.target.name]: e.target.value})
  };

  // const [isChecked, setIsChecked] = useState({
  //   isAdminC:false,
  //   isAuditorC:false,
  //   isAuditeeC:false,
  //   QMSC:false,
  //   AS9100C:false,
  //   MfgProcessFDYC:false,
  //   MfgProcessMCshopC:false,
  //   ProductFDYC:false,
  //   ProductMCshopC:false,
  //   SupplierAuditC:false,
  // })
  //const {isAdminC, isAuditeeC, isAuditorC, QMSC, AS9100C, MfgProcessFDYC, MfgProcessMCshopC, ProductFDYC, ProductMCshopC, SupplierAuditC} = isChecked;
  
  const changeStatus = (e) =>{
    setStatus({...skills, [e.target.name]: true})
    // setIsChecked({...isChecked, [e.target.name]:true});

  };
  // console.log('110', isChecked);

  // useEffect (() => {
  //     loadUser();
  // },[]);
// console.log('107', userdetails);
// console.log('108', skills);
  // const onSubmit = async e =>{
  //     e.preventDefault();
  //     const result = await axios.post('http://localhost:4000/user/update?id='+id,users)
  //     history.push("/users")
  //     console.log("77",result.data)
  // }

  // const loadUser = async() =>{
  //     const result = await axios.get('http://localhost:4000/user/getUser?id='+id);
  //     setUser(result.data.user);
  //     console.log(users.Sidebar)
  //     console.log("84",result)
  //     console.log("85",id)
    
  // }
  const formData = {
    username: userdetails.username,
    email: userdetails.email,
    password: userdetails.password,
    token: userdetails.token,
    department: userdetails.department,
    number: userdetails.contactnumber,
    isAdmin: skills.isAdmin,
    isAuditor: skills.isAuditor,
    isAuditee: skills.isAuditee,
    QMS: skills.QMS,
    AS9100: skills.AS9100,
    MfgProcessFDY: skills.MfgProcessFDY,
    MfgProcessMCshop: skills.MfgProcessMCshop,
    ProductFDY: skills.ProductFDY,
    ProductMCshop: skills.ProductMCshop,
    SupplierAudit: skills.SupplierAudit,

  }
  console.log('151', formData);
  const adduser = async(e)=>{
    e.preventDefault();
    const result = await axios.post('http://13.127.182.122:5000/user/register',formData);
    history.push("/login")
    // console.log("138",result);
  }

  // const CheckboxDiv = () =>{
  //   const [isChecked, setIsChecked] = useState(false);
  
  //   const handleDivClick = () => {
  //     setIsChecked(!isChecked);
  //   };



  return (
    <>
<form method="post">
        <div className="sign-up-wrapper">
          
          
            <div className="userinformation">

              <h2 id="parent-modal-title" >Sign Up</h2>
                  <div className="form-group" >
                  <label>User Name :</label>
                  <span className="filldetails">
                  <input type="text" className="form-control" id="username" name="username"  value={username} onChange={e=>onInputchange(e) }/>
                  </span>
                  </div>
                  <div className="form-group">
                      <label>Email :</label>
                      <span className="filldetails">
                      <input type="text" className="form-control" id="email" name="email" placeholder="ex: myname@example.com" value={email} onChange={e=>onInputchange(e)}/>
                  </span>
                  </div>
                  <div className="form-group">
                      <label>Password :</label>
                      <span className="filldetails">
                      <input type="password" className="form-control" id="password" name="password"  value={password} onChange={e=>onInputchange(e)}/>
                  </span>
                  </div>
                  <div className="form-group" >
                      <label>Department :</label>
                      <span className="filldetails">
                      <input type="text" className="form-control" id="department" name="department"  value={department} onChange={e=>onInputchange(e)}/>
                  </span>
                  </div>
                  <div className="form-group" >
                      <label>Token number :</label>
                      <span className="filldetails">
                      <input type="text" className="form-control" id="token" name="token"  value={token} onChange={e=>onInputchange(e)}/>
                       </span>
                  </div>
                  <div className="form-group" >
                      <label>Contact number :</label>
                      <span className="filldetails">
                      <input type="number" className="form-control" id="contactnumber" name="contactnumber"  value={contactnumber} onChange={e=>onInputchange(e)}/>
                  </span>
                  </div>

            </div>

            <div className="Position">

                <h3 id="position">Your Role/Position</h3>

                <div className="form-group">
                
                <input type="checkbox" className="form-controlP" id = "isAdmin" name="isAdmin" value={isAdmin} onClick={e=>changeStatus(e)}/>
                
                {/* <span className="fill"> */}
                <label className="labelclass" >Admin</label>
                {/* </span> */}
                </div>

                <div className="form-group">
                
                <input type="checkbox" className="form-controlP" id="isAuditor" name="isAuditor"  value={isAuditor} onClick={e=>changeStatus(e)}/>
                <span className="fill">
                <label className="labelclass" for="isAuditor">Auditor</label>
                </span>
                </div>

                <div className="form-group">
                 <input type="checkbox" className="form-controlP" id="isAuditee" name="isAuditee"  value={isAuditee}  onClick={e=>changeStatus(e)}/>
                 <span className="fill">
                <label className="labelclass" for="isAuditee">Auditee</label>
                </span>
                </div>
                <h3 id="qualification">Your qualification</h3>
                <div className="form-group" >
                
                <input type="checkbox" className="form-controlP" id="QMS" name="QMS"  value={QMS}  onClick={e=>changeStatus(e)}/>
                
                <span className="fill">
                <label className="labelclass" for="QMS">QMS</label>
                </span>
                </div>

                <div className="form-group" >
                
                <input type="checkbox" className="form-controlP" id="AS9100" name="AS9100"  value={AS9100} onClick={e=>changeStatus(e)}/>
               
                <span className="fill">
                <label className="labelclass" for="AS9100">AS9100</label>
                </span>
                </div>

                <div className="form-group"  >
                
                <input type="checkbox" className="form-controlP" id="MfgProcessFDY" name="MfgProcessFDY"  value={MfgProcessFDY} onClick={e=>changeStatus(e)}/>
                <span className="fill">
                <label className="labelclass" for="MfgProcessFDY">MfgProcessFDY</label>
                </span>
                </div>

                <div className="form-group" >
                
                <input type="checkbox" className="form-controlP" id="MfgProcessMCshop" name="MfgProcessMCshop"  value={MfgProcessMCshop}  onClick={e=>changeStatus(e)}/>
                <span className="fill">
                <label className="labelclass" for="MfgProcessMCshop">MfgProcessMCshop</label>
                </span>
                </div>

                <div className="form-group" >
                
                <input type="checkbox" className="form-controlP" id="ProductFDY" name="ProductFDY"  value={ProductFDY} onClick={e=>changeStatus(e)}/>
                <span className="fill">
                <label className="labelclass" for="ProductFDY">ProductFDY</label>
                </span>
                </div>

                <div className="form-group" >
                
                <input type="checkbox" className="form-controlP" id="ProductMCshop" name="ProductMCshop"  value={ProductMCshop} onClick={e=>changeStatus(e)}/>
                <span className="fill">
                <label className="labelclass" for="ProductMCshop">ProductMCshop</label>
                </span>
                </div>

                <div className="form-group" >
                <input type="checkbox" className="form-controlP" id="SupplierAudit" name="SupplierAudit"  value={SupplierAudit} onClick={e=>changeStatus(e)}/>
                
                 <span className="fill"><label className="labelclass" for="SupplierAudit">SupplierAudit</label></span>
                
                </div>

                
            </div>
            <button className="sign-up-btn" type="submit" onClick={adduser}>Submit</button>
          
    </div>
    </form>
        </>
  );
};

export default Signup;
