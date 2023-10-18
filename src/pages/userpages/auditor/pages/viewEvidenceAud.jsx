import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import ALayout from "../Layout/ALayout";
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


const ViewEvidenceAud =  ()=>{
    const history = useHistory();

    const {id} = useParams();
    console.log('31', id)
    const [Proof_Link,setProofLinks] = useState ([]);

    useEffect (() => {
        loadUser();
    },[]);

    
      

    

    const loadUser = async() =>{
        const result = await axios.get('http://13.127.182.122:5000/audit/getAuditwithId?id='+id);
        setProofLinks(result.data.data.NC_Proof_Link);
        //console.log('44', result);
        console.log("45", Proof_Link)
        //console.log("92",id)
    }
    const data = Proof_Link.map((link) => ({
        heading: 'Evidence',
        value: <button style={{backgroundColor:"rgb(169, 25, 25)", borderRadius:"4px", color:"white", padding:"5px", fontSize:"small"}}
        onClick={() => window.open(link, "_blank")}
        > 
        
        View</button>,
    }));

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
                  onClick={()=>handleDelete(rowData)} 
              >
                  Delete
              </button>
          )
      }
      ];

      const handleDelete = async (rowData) => {
        try {
        console.log('82', rowData)
          const response = await axios.delete('', {
            data: {
              Audit_Proof_Link: rowData.Audit_Proof_Link,
            },
          });
    
          if (response.status !== 201) {
            console.error('Delete failed:', response.data.message);
          }
        } catch (error) {
          res.status(500).json(error)
        }
      };
      

      return (
        <>
       
            <ALayout>
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
       
        </ALayout>
        </>
      );
    };
  
  export default ViewEvidenceAud