import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LoginApi } from '../services/allApis'



function Login() {
    const [user,setUser]=useState({
        email:"",password:""
    })

    const navigate=useNavigate()

    const handleLogin=async()=>{
        console.log(user)
        const {email,password}=user
        if(!email || !password){
            toast.warning("Enter valid Inputs")
        }else{
            const result=await LoginApi(email,password)
            if(result.status==200){
                if(result.data.length>0){
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData',JSON.stringify(result.data[0]))
                    toast.success("Successfully Logged In")
                    setUser({
                        email:"",password:""
                    })
                    navigate('/home')
                }else{
                    toast.warning("Invalid Email or Password")
                }
            }else{
                toast.error("Something went wrong")
            }
        }
    }

  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
            <div className='w-75 border shadow bg-light p-5'>
                <h1>Login</h1>
                <input type="email" className='form-control mb-3' onChange={(e)=>{setUser({...user,email:e.target.value})}} placeholder='Enter Email ID'/>
                <input type="password" className='form-control mb-3' onChange={(e)=>{setUser({...user,password:e.target.value})}} placeholder='Enter Password'/>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success' onClick={handleLogin}>Login</button>
                    <Link to={'/Register'}>New User</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login