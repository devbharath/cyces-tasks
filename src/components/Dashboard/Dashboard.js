import axios from 'axios'
import React, { useEffect } from 'react'

const Dashboard = () => {
    useEffect(()=>{
        axios.get("https://api.dev.tanqaa.cyces.co/api/v1/employees/1000000?limit=10&offset=0")
        .then(()=>{
            
        })
    },[])
  return (
    <div>
        <div className="emp-list">
            {
                
            }
        </div>
    </div>
  )
}

export default Dashboard