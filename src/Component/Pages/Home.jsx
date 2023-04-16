import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home(){
const [data,setData] = useState([]);
const navigate=useNavigate();

  useEffect(()=>{
         fetch(' http://localhost:5000/users').then((res)=>{
                  return res.json();
         }).then((result)=>{
                setData(result);
         }).catch((error)=>{
            console.log(error)
         })
  },[])

  const editData=(id)=>{
        navigate("/edit/"+id)
  }

 const deleteData = (id) =>{
        //console.log(id);
        fetch('http://localhost:5000/users/'+id,{
            method:"DELETE",
        }).then((res)=>{
            //return res.json();
            window.location.reload();
        }).then((data)=>{
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
 }
    return(
        <>
        <h1 className="text-darks text-center bg-primary mt-1">Show Data from Json </h1>
        <table className="table-responsive table table-striped">
            <thead>
                <tr className="bg-dark text-light">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
                <th>Action</th>
                </tr>
            </thead>
            {
                data.map((item,index)=>{
                       return(
                        <>
                        <tbody>
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.password}</td>
                            <td><button className="btn btn-danger ms-2" onClick={()=>{deleteData(item.id)}}>Delete</button> 
                            <button className="btn btn-warning ms-2" onClick={()=>{editData(item.id)}}>Update</button></td>
                            </tr>
                        </tbody>
                    </>
                   )
                })
            }
        </table>
        </>
    );
}