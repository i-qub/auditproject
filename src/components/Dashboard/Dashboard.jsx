import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import EditProfileModal from "../EditProfileModal/EditProfileModal";

import MaterialTable from 'material-table-jspdf-fix';


import "../Dashboard/Dboard.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {BsFileBarGraphFill} from "react-icons/bs"
import { FcSalesPerformance, FcCollect, FcLibrary, FcCollaboration, FcInspection , FcDocument, FcDataConfiguration} from "react-icons/fc";

//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Padding } from "@mui/icons-material";
import { notifyError, notifySuccess } from "../../utils/notifyToasts";
import Sidebar from "../../pages/sideBar/sideBar";
import { Grid } from "@material-ui/core";
import {
    PieChart,
    Pie,
    LineChart,
    Line,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    Cell
  } from "recharts"
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


const Dashboard =  ()=>{
  
    const [dashboardData, setData] = useState({
        NCClosureCount: 0,
        NCClosureremaining:0,
        totalAuditEvidenceCount: 0,
        totalAudits: 0,
        totalNCCount: 0,
        totalNCEvidenceCount: 0,
    
    })
    const {NCClosureCount, NCClosureremaining, totalAuditEvidenceCount, totalAudits, totalNCCount, totalNCEvidenceCount } = dashboardData;
    useEffect(()=>{
        DashBoardData();
      },[]);
      const DashBoardData = async()=>{
        try{
          const result = await axios.get("http://13.127.182.122:5000/audit/getDashboardData");
          setData(result.data)
          console.log('89', dashboardData);
    
        }catch(err){
          notifyError("Couldn't get Dashboard Details")
        }
      }
      
     
      

      return (
       
       <>
            {/* <Sidebar/> */}
            <div>
            <Box sx={{ ...style,width: '100%', maxWidth: 1024,margin: '15px auto',height: 'auto',paddingBlockEnd:"32px",paddingRight:"-20px",

  // Media query for smaller screens
    '@media (max-width: 768px)': {
    maxWidth: '90%',   // Reduce the max-width for smaller screens
    margin: '10px auto' // Adjust margin for smaller screens
  }
}}>
                {/* <Card variant="outlined">{card}</Card> */}
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div>
                        <Grid item xs={3} className="re-grid">
                            <Card className="cards" variant="outlined">
                                <Grid container>
                                <Grid className="card-icon-div" item xs={3}>
                                    <FcDocument className="card-icon"></FcDocument>
                                </Grid>
                                <Grid className="card-text-div" item xs={9}>
                                    <div>Total Audit Count</div>
                                    <div className="card-value">{`${totalAudits}`}</div>
                                </Grid>
                                </Grid>
                            </Card>
                            </Grid>
                    </div>
                    <div style={{display:"flex", margin:"2% 2% 2% 0%"}}>
                            <Grid item xs={3} className="re-grid">
                            <Card className="cards" variant="outlined">
                                <Grid container>
                                <Grid className="card-icon-div" item xs={3}>
                                    <FcDataConfiguration className="card-icon"></FcDataConfiguration>
                                </Grid>
                                <Grid className="card-text-div" item xs={9}>
                                    <div>Total NC Count</div>
                                    <div className="card-value">{`${totalNCCount}`}</div>
                                </Grid>
                                </Grid>
                            </Card>
                            </Grid>
                            <Grid item xs={3} className="re-grid">
                            <Card className="cards" variant="outlined">
                                <Grid container>
                                <Grid className="card-icon-div" item xs={3}>
                                    <FcInspection className="card-icon"></FcInspection>
                                </Grid>
                                <Grid className="card-text-div" item xs={9}>
                                    <div> NC closed</div>
                                    <div className="card-value">{`${NCClosureCount}`}</div>
                                </Grid>
                                </Grid>
                            </Card>
                            </Grid>
                            <Grid item xs={3} className="re-grid">
                            <Card className="cards" variant="outlined">
                                <Grid container>
                                <Grid className="card-icon-div" item xs={3}>
                                    <BsFileBarGraphFill className="card-icon"></BsFileBarGraphFill>
                                </Grid>
                                <Grid className="card-text-div" item xs={9}>
                                    <div>NC Remaining</div>
                                    <div className="card-value">{`${NCClosureremaining}`}</div>
                                </Grid>
                                </Grid>
                            </Card>
                            </Grid>
                        </div>
                    </div>
                {/* <PieChart width={400} height={400}>
                <Pie
                data={[
                    { name: 'NCClosureCount', value: dashboardData.NCClosureCount },
                    { name: 'NCClosureremaining', value: dashboardData.NCClosureremaining }
                ]}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                >
                {/* Customize the colors for each section */}
                {/* <Cell key="NCClosureCount" fill="#82ca9d" />
                <Cell key="NCClosureremaining" fill="#ffc658" />
                </Pie>
            </PieChart>  */}
      </Box>
      </div>

       </>
      );
    };
  
  export default Dashboard