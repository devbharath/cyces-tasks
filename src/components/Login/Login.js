import React, { useEffect, useState } from 'react'
import logo from "../../img/logo.png"
import {Link,useNavigate} from "react-router-dom"
import "../../Css/Globalcss.css"
import axios from "axios"

const Login = () => {
    const [val, setVal]=useState({
        compID:"",
        usrLogID:"",
        password:""
    })
    console.log(val)
let navigate=useNavigate()

    

    const chechdata=()=>{
        axios.post("https://api.dev.tanqaa.cyces.co/api/v1/auth/login-admin",{
        "company_id": val.compID,
        "email": val.usrLogID,
        "password": val.password
    })
    .then((res)=>{
        if(res.data.success){
            navigate("/Dashboard")
            localStorage.setItem("api_key",res.data.api_key)
        }else{
            alert("invalid details")
        }
    })
    }

  return (
    <div className='loginpage'>
        <div className='form-cont'>
            <div className='form-top-logo'>
                <img src={logo} alt="logo"/>
                <div ><h3>Payroll Management System</h3></div>
            </div>
            <div className='form-bottom-logo'>
            <div><h3>Login to Your Account</h3></div>
            <div className='input'><label className={val.compID!==""? "filled":null}>Company ID *</label><input value={val.compID} onChange={(e)=>setVal({...val, compID:e.target.value})} type="text"></input></div>
            <div className='input'><label className={val.compID!==""? "filled":null}>Username/Login ID *</label><input value={val.usrLogID} onChange={(e)=>setVal({...val, usrLogID:e.target.value})} type="text" ></input></div>
            <div className='input'><label className={val.compID!==""? "filled":null}>Password *</label><input onChange={(e)=>setVal({...val, password:e.target.value})} value={val.password} type="password" ></input></div>
            <div style={{textAlign:"right"}} ><Link to="/">Forgot Password</Link></div>
            <div><input type="button" onClick={()=>{
                chechdata()
            }} value="Next"/></div>
            <div className='poweredBy'><p>Powered by </p> <img src={logo} alt="logo"/></div>
            </div>
        </div>

    </div>
  )
}

export default Login