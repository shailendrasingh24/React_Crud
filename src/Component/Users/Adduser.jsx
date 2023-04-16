import React, { useState } from "react";


export default function Adduser (){

      const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      const [mobile,setMobile] = useState("");
      const [password,setPassword] = useState("");

        
            const handleData = (e) =>{
                  e.preventDefault();
              const regData = {name,email,mobile,password};
                 // console.log(regData);
             const promise = fetch(' http://localhost:5000/users',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(regData)

             });
             promise.then((res)=>{
                return  res.json();
             }).then((data)=>{
                    console.log(data)
             }).catch((error)=>{
                console.log(error)
             })
            }

    return(
        <>
        <form onSubmit={handleData}>
        <div className="card mx-auto w-50 mt-5">
            <div className="card-header text-center">
        <h1 className="text-primary text-center fw-bold ">Registration Here</h1>               
            </div>
            <div className="card-body text-center">
               Name : <input  className="from-control w-75" type="text"value={name}  onChange={(e)=>{setName(e.target.value)}}/> <br/><br/>
               Email : <input  className="from-control w-75" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/><br/>
               Mobile : <input  className="from-control w-75" type="phone" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br/><br/>
               Password:<input  className="from-control w-75" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br/><br/>
                 <input type="submit" className="btn btn-success"/> 
            </div>
        </div>
        </form>
        </>
    )
}