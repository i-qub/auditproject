import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Sidebar from "../../pages/sideBar/sideBar";
import Layout from "../Layout/Layout";
import "../Modal/UserDetails.css"
import { Padding } from "@mui/icons-material";
import MaterialTable from 'material-table-jspdf-fix';

const style = {
    position: 'absolute',
    top: '40%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: '900px !important',
    bgcolor: 'background.paper',
    heigh:'auto',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


const ViewAuditEvidence =  ()=>{
    const history = useHistory();

    const {id} = useParams();
    console.log('9999999', id)
    const [Proof_Link,setProofLinks] = useState ([]);

    useEffect (() => {
        loadUser();
    },[]);



    const loadUser = async() =>{
        const result = await axios.get('http://13.127.182.122:5000/audit/getAuditwithId?id='+id);
        setProofLinks(result.data.data.Audit_Proof_Link);
        //console.log('44', result);
        console.log("45", Proof_Link)
        //console.log("92",id)
    }
    // const data = Proof_Link.map((link) => ({
    //     heading: 'Evidence',
    //     value: <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small"}}
    //     onClick={() => window.open(link, "_blank")}>View </button>,
    // }));

    const data = Proof_Link.map((link) => {
      const sanitizedLink = link.replace(/\+/g, ''); // Remove all '+' characters from the URL
      const fileName = sanitizedLink.substring(sanitizedLink.lastIndexOf('/') + 1); // Extract the file name from the sanitized URL
  
      // Create an object for each link with the desired properties
      return {
          heading: fileName, // Use the extracted file name as the heading
          value: (
              <button
                  style={{
                      backgroundColor: "rgb(169, 25, 25)",
                      borderRadius: "4px",
                      color: "white",
                      padding: "5px",
                      fontSize: "small"
                  }}
                  onClick={() => window.open(sanitizedLink, "_blank")}
              >
                  View
              </button>
          ),
      };
  });
    
      const columns = [
        { title: 'Heading', field: 'heading' },
        { title: 'Value', field: 'value' },
        {
          title: 'Action',
          render: rowData => (
              <button
                  style={{
                      backgroundColor: "red",
                      borderRadius: "4px",
                      color: "white",
                      padding: "5px",
                      fontSize: "small"
                  }}
                  onClick={() => handleDelete(rowData, id)} // Pass both rowData and ParamsID
              >
                  Delete
              </button>
          )
      }
      ];



      async function handleDelete(rowData, id) {
        try {
            const proofUrlToDelete = rowData.value.props.onClick.toString().split("'")[1]; // Extract the URL from the onClick function

            console.log('107', rowData)

            const response = await axios.delete('/api/deleteAuditProof', {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    id: id,
                    proofUrlToDelete: proofUrlToDelete,
                },
            });
    
            if (response.status === 200) {
                // Refresh the data or perform any other necessary updates
                console.log('Audit proof deleted successfully');
            } else {
                console.error('Failed to delete audit proof');
            }
        } catch (error) {
            console.error('Error deleting audit proof:', error);
        }
    }
    
      return (
        <>
       
            <Layout>
                    <MaterialTable
                        style={{
                            margin: '60px 0px 30px 20px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                            borderRadius: '8px',
                            width: '97%',
                        }}
                        title="Evidences"
                        data={data}
                        columns={columns}
                        options={{
                            exportButton: true,
                            exportButtonFieldStyle: {},
                            headerStyle: {
                            backgroundColor: 'rgb(169, 25, 25)',
                            color: '#FFF',
                            },
                            rowStyle: {
                            backgroundColor: 'white',
                            },
                            grouping: false,
                            actionsColumnIndex: -1,
                            pageSizeOptions: [5, 10, 20],
                            search: true,
                            searchFieldStyle: {
                            width: '100%',
                            backgroundColor: '#fff',
                            border: '1px solid #AAA',
                            borderRadius: '4px',
                            paddingLeft: '8px',
                            '::placeholder': {
                                color: 'black',
                                fontStyle: 'italic',
                            },
                            },
                        }}
                />
       
        </Layout>
        </>
      );
    };
  
  export default ViewAuditEvidence