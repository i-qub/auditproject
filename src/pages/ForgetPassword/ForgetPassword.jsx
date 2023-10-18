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
import "./ForgetPassword.css";
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



const ForgetPassword = () => {
  const history = useHistory();   
  const [userdetails,setUser] = useState ({
   
    email:"" ,
    OTP:"",
    password: ""  
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
  const {email, OTP, password} = userdetails;
  
  const {isAdmin, isAuditee, isAuditor, QMS, AS9100, MfgProcessFDY, MfgProcessMCshop, ProductFDY, ProductMCshop, SupplierAudit} = skills;
  
  const [showOTPField, setShowOTPField] = useState(false);
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const onInputChange = e => {
      setUser({ ...userdetails, [e.target.name]: e.target.value });
  };

  
  const handleSendOTP = async () => {
    try {
      const response = await axios.post('http://13.127.182.122:5000/user/sendOTP', { email });
      if (response.status === 200) {
        setShowOTPField(true);
      } else {
        console.error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

const handleVerifyOTP = async () => {
  try {
    console.log('testing')
    const response = await axios.post('http://13.127.182.122:5000/user/verifyOTP', { email ,OTP});
    if (response.status === 200) {
      // notifySuccess("OTP Verified Successfully")
      setIsOTPVerified(true)
    } else {
      // notifyError("OTP Verification Failed")
      console.error('Failed to verify OTP');
    }
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};


const handlePasswordEntered = async () => {
  try {
    const response = await axios.post('http://13.127.182.122:5000/user/changePassword', { email, password });
    console.log('91', response)
    if (response.status === 200) {
      // console.log('Password Changed Successfully');
      // notifySuccess("Password Updated Successfully")
      // history.push('/login');
      console.log('password changed successfully')
    } else {
      console.error('Failed to Update Password');
    }
  } catch (error) {
    console.error('Internal server error', error);
  }
  // window.location.replace('/login');
};


  return (
          <>
              <form method="post" style={{ marginLeft: "400px", marginTop: "200px", width: "50%" }}>
                  <div className="sign-up-wrapper">
                      <div className="userinformation">
                          <h2 id="parent-modal-title">Forget Password</h2>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                              <div className="form-group" style={{ width: "80%", paddingLeft: "110px" }}>
                                  <label style={{ marginBottom: '10px' }}>Email ID:</label>
                                  <span className="filldetails">
                                      <input
                                          type="text"
                                          className="form-control"
                                          id="email"
                                          name="email"
                                          value={email}
                                          onChange={onInputChange}
                                          placeholder="ex: myname@menon.in"
                                          style={{ width: '70%', textAlign: 'center' }}
                                      />
                                  </span>
                              </div>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                              {!isOTPVerified ? (
                                  <div>
                                      {showOTPField ? (
                                          <div className="form-group" style={{ width: "80%", paddingLeft: "110px" }}>
                                              <label style={{ marginBottom: '10px' }}>OTP:</label>
                                              <span className="filldetails">
                                                  <input
                                                      type="text"
                                                      className="form-control"
                                                      id="OTP"
                                                      name="OTP"
                                                      value={OTP}
                                                      onChange={onInputChange}
                                                      placeholder="Write the otp you received on mail"
                                                      style={{ width: '70%', textAlign: 'center' }}
                                                  />
                                              </span>
                                          </div>
                                      ) : (
                                          <Link to="#" className="link-to-signup" onClick={handleSendOTP}>
                                              Send OTP
                                          </Link>
                                      )}
                                      {OTP && (
                                          <Link to="#" className="verify-button" onClick={handleVerifyOTP}>
                                              Verify
                                          </Link>
                                      )}
                                  </div>
                              ) : (
                                  <div>
                                      <div className="form-group" style={{ width: "80%", paddingLeft: "110px" }}>
                                          <label style={{ marginBottom: '10px' }}>Password:</label>
                                          <span className="filldetails">
                                              <input
                                                  type="password"
                                                  className="form-control"
                                                  id="password"
                                                  name="password"
                                                  value={password}
                                                  onChange={onInputChange}
                                                  placeholder="Your password"
                                                  style={{ width: '70%', textAlign: 'center' }}
                                              />
                                          </span>
                                      </div>
                                      {password && (
                                          <Link to="/login" className="change-password-button" onClick={handlePasswordEntered}>
                                              Change Password
                                          </Link>
                                      )}
                                  </div>
                              )}
                          </div>
                      </div>
                  </div>
              </form>
          </>
      );
  };
    
export default ForgetPassword;
