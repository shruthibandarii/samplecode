import React, { useState } from 'react';
// import {Form,Button,Container} from 'react-bootstrap';
import {useForm} from 'react-hook-form'



function Contactus()  {
    
       

    
    
   
    const {register,handleSubmit,formState:{errors}}= useForm()
    let [usersList, setUserList] =useState([])
    const onFormSubmit =(userObj) => {
        setUserList([...usersList,userObj])
    }
   
    
  return (
    

            <div className="">
                

                <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)} >
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input className='form-control' {... register("name",{required:true})} type="text" id="name"  />
                        {errors.name?.type==="required"&& <p className='text-danger'>*name is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <input className='form-control'  {... register("username",{required:true})}type="text" id="username"  />
                       {errors.username?.type==="required"&& <p className='text-danger'>*username is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mail">e-mail</label>
                        <input className='form-control'  {... register("mail",{required:true})}type="email" id="mail"  />
                        {errors.mail?.type==="required"&& <p className='text-danger'>*mail is required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input className='form-control' {... register("password")} type="password" id="password"  />
                       
                    
                    </div>
                    
                    <div className="mb-3">
                        <button className="btn btn-success d-block mx-auto">Submit</button>

                    </div>

                    
                </form>         
               <div className='text-center '>
                <a href="./Signin">
                    Already a user? 
                    <span className="auth__help-span m-5" >   Sign in</span>
                </a>
                </div>
                <p className='display-5 text-center text-danger'>List of users</p>
                <div className='container'>
                    {usersList.length==0 && <h1 className='text-center text-warning'>List is empty</h1>}
                
                    {usersList.length!==0 &&   
                <table className='table text-center'>
                <thead className='mb-3'>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Password</th>
                        

                        
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        usersList.map((userObj,index) => <tr key={index}>
                            
                            <td>{userObj.name}</td>
                            <td>{userObj.username}</td>
                            <td>{userObj.mail}</td>
                            <td>{userObj.password}</td>
                        </tr>)
                    }
                </tbody>
                
                </table>
                       }
                </div>
            </div>

        
  );
}

export default Contactus;