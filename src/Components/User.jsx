import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const LoadUsers=useLoaderData()
    const [users,SetUsers]=useState(LoadUsers)
    const handleDelete=id=>{
fetch(`https://coffee-shop-serversite.vercel.app/user/${id}`,{
  method: "DELETE",

})
.then(res=>res.json())
.then(data=>{
  if(data.deletedCount>0){
    alert('user deleted successfully')
    const remainig=users.filter(user=>user._id!==id)
    SetUsers(remainig)
  }
})
    }
    return (
        <div>
            <h3>Users{users.length}</h3>
            <div>
               
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>id</th>
        <th>Email</th>
        <th>Create</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user=> <tr key={user._id} user={user}>
            <th>{user._id}</th>
            <td>{user.email}</td>
            <td>{user.creatAt}</td>
            <td><button onClick={()=>handleDelete(user._id)} className='btn bg-slate-600'>X</button></td>
          </tr>)
     }
    
 
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default User;