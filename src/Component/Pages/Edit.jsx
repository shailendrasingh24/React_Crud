import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function Edit (){

      const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      const [mobile,setMobile] = useState("");
      const [password,setPassword] = useState("");
      const {id}=useParams()
      const navigate=useNavigate()

      useEffect(()=>{
        fetch(' http://localhost:5000/users/'+id).then((res)=>{
                 return res.json();
        }).then((result)=>{
            console.log(result)
            setName(result.name);
            setEmail(result.email);
            setMobile(result.mobile);
            setPassword(result.password);
        }).catch((error)=>{
           console.log(error)
        })
 },[])

     const updateData=()=>{
        let newData={
            name:name,
            email:email,
            mobile:mobile,
            password:password
        }
 
        const promise = fetch(' http://localhost:5000/users/'+id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newData)

         });
         promise.then((res)=>{
           // return  res.json();
            navigate("/home")
         }).then((data)=>{
                console.log(data)
         }).catch((error)=>{
            console.log(error)
         })
     }
    return(
        <>
        <form>
        <div className="card mx-auto w-50 mt-5">
            <div className="card-header text-center">
        <h1 className="text-primary text-center fw-bold ">Registration Here</h1>               
            </div>
            <div className="card-body text-center">
               Name : <input  className="from-control w-75" type="text"value={name}  onChange={(e)=>{setName(e.target.value)}}/> <br/><br/>
               Email : <input  className="from-control w-75" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/><br/>
               Mobile : <input  className="from-control w-75" type="phone" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br/><br/>
               Password:<input  className="from-control w-75" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br/><br/>
                 <input type="button" value="Update" onClick={()=>{updateData()}} className="btn btn-success"/> 
            </div>
        </div>
        </form>
        </>
    )
}