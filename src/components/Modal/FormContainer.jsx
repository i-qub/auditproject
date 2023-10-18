import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Form from './addauditform';
function FormContainer() {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const handleButtonClick = () => {
      setIsFormOpen(true);
    };
  
    const handleSubmit = (e) => {
      
      // Perform any necessary form validation or data processing here
      // ...
      // After form submission, you can close the form by setting isFormOpen to false
      setIsFormOpen(false);
    };
  
    return (
      <div style={{display:"flex",  margin:"5px", padding:"3px"}}>
        {/* {!isFormOpen ?(
            <button onClick={handleButtonClick} style={{color:'white',border:'solid 3px', borderRadius:'4px', float:'right', marginRight: '50px', height:'50px', width:'100px', backgroundColor:'blue'}}>Add Audit</button>
        ):(
        <Form onSubmit={handleSubmit} />
        )} */}
        {/* <p>Add new Audit</p> */}
        
        <Link style={{marginLeft:'90%', width:'40%', marginRight:'20px'}}to="/addAudit"><button style={{
          
          backgroundColor:" rgb(169, 25, 25)",
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          height: '45px',
          width: "100%",

        }}>Add Plan</button>
        </Link>
        

      </div>
    );
  }
  
  export default FormContainer;
  