import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { checkEmailApi, registerApi } from '../services/allApis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register() {
    const[user,setUser]=useState({
        username:"",email:"",password:""
    })

    const nav=useNavigate()

    const handleRegister=async()=>{
        console.log(user);
        const {username,email,password}=user
        if(!username|| !email || !password){
            toast.warning("Enter valid inputs!!!")
        }else{
            const result=await checkEmailApi(email)
            if(result.data.length>0){
                toast.warning("Email Already in Use")
            }else{
                const res=await registerApi(user)
                if(res.status==201){
                    toast.success("Registration Success")
                    setUser({
                        username:"",email:"",password:""
                    })
                    nav('/login')
                }
                else{
                    toast.error("Registration failed!!")
                    console.log(res);
                    
                }
            }
        }
    }

  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
            <div className='w-75 border shadow bg-light p-5'>
                <h1>Register</h1>
                <input type="text" className='form-control mb-3' onChange={(e)=>{setUser({...user,username:e.target.value})}} placeholder='Enter Username'/>
                <input type="email" className='form-control mb-3' onChange={(e)=>{setUser({...user,email:e.target.value})}} placeholder='Enter Email ID'/>
                <input type="password" className='form-control mb-3' onChange={(e)=>{setUser({...user,password:e.target.value})}} placeholder='Enter Password'/>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success' onClick={handleRegister}>Register</button>
                    <Link to={'/login'}>Already a User?</Link>
                </div>    
            </div>
        </div>
    </>
  )
}

export default Register