import React from 'react';
import { TiEdit   } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const CoffeeCard = ({coffe,setCoffees,coffee}) => {


    const {_id ,name,category,chef,teste,photo,Details,Supplier}=coffe
    const handleDelet=(_id)=>{
        console.log(_id)



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
         
              fetch(`https://coffee-shop-serversite.vercel.app/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
    Swal.fire(
              "Deleted!",
                 "Your Coffee has been deleted.",
                 "success"
              )
              const remaining=coffee.filter(cof=>cof._id!==_id)
               setCoffees(remaining)
            }
            })


            }
          });








        
      
       
     
        
        }
    return (
        <div className=''>
            <div className="card m-5 card-side bg-base-100 shadow-xl">
  <figure><img className='p-2 rounded-lg h-32 w-40' src={photo} alt="Movie"/></figure>
  <div className="card-body flex">
    <h2 className="card-title">{name}</h2>
    <p>{Details}</p>
    
   
  </div>
  <div>
  <div className="join join-vertical p-2 rounded-lg ">
  <button className="btn join-item mb-2 bg-orange-300"> <span className='text-2xl'><FaEye/></span>   </button>
  <Link to={`/UpdateCoffee/${_id}`}><button className="btn join-item mb-2"><TiEdit /></button></Link>
  <button onClick= {()=>handleDelet(_id)} className="btn join-item mt-2 bg-red-800 "> <span className='text-2xl'><MdDeleteOutline /></span> </button>
</div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;