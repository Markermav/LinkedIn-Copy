import { Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from "axios";


export default function AdminPage() {

  const [student, setStudent] = useState([]);
  const [recruiter, setRecruiter] = useState([]);



  useEffect(async () => {

    let data1 = await axios.get('http://localhost:4444/admin/student')


    setStudent(data1.data.data)

    let data2 = await axios.get('http://localhost:4444/admin/recruiter')


    setRecruiter(data2.data.data)
  }, [])
  
  console.log(student)
  console.log(recruiter)


  return (
    <Paper
        style={{
          padding: "50px",
          outline: "none",
          minWidth: "50%",
        }}
      >
        <div>student</div>

        <ul>
        {student.map(d => {
            console.log(d.email)
            return(<li key={d.email}>{d.email}</li>)
            })} 
                
        </ul>


        
        <div>Recruiter</div>

        <ul>
        {recruiter.map(d => {
            console.log(d.name)
            return(<li key={d.name}>{d.name}</li>)
            })} 
                
        </ul>

      </Paper>
    
  )
}
