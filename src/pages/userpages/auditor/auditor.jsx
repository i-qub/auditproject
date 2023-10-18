
import ALayout from "./Layout/ALayout";
import AuditorTable from "./pages/Auditortable";

// import Login from "./pages/Login/Login";

const Auditor = () => {
  
  const userToken = JSON.parse(localStorage.getItem('user'))?.token;
  console.log('9',userToken);



  return (
   <ALayout>
    {/* <AuditorTable/> */}
   </ALayout>
  );
};

export default Auditor;
