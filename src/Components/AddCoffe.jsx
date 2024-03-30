import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddCoffe = () => {

const handleAddcoffee=(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const Supplier=form.Supplier.value;
  const category=form.category.value;
  const chef=form.chef.value;
  const teste=form.teste.value;
  const Details=form.Details.value;
  const photo=form.photo.value;
  const addcoffe={name,category,chef,teste,photo,Details,Supplier}
console.log(addcoffe)
  fetch('https://coffee-shop-serversite.vercel.app/coffee',{
  method: 'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(addcoffe)
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.insertedId){
    Swal.fire({
      title: 'success!',
      text: 'AddCofee successFully',
      icon: 'success',
      customClass: 'swal-wide',
      confirmButtonText: 'Cool',
      
      width: 400,
      height:200
    })
 
  }
})



}

  return (
    <div className='bg-red-50 font-serif p-24'>
      <h2 className='text-4xl uppercase text-cyan-500 text-center font-serif'>Add coffee here</h2>
   <div className='pb-2'> <button className='flex '><Link className='mt-1 pe-2' to='/'><FaLongArrowAltLeft/></Link>Back home</button></div>
   
      <div className='border-2  border-orange-100 p-5  '>
        <form onSubmit={handleAddcoffee} className=''>
          <div className='md:flex mb-2'>
            <div className='form-control mx-2 md:w-1/2'>
              <label className="  ">
                <div className="label">
                  <span className="label-text">Name</span>

                </div>
                <input name='name'   type="text" placeholder="Type here" className="input input-bordered w-full " />

              </label>
              </div>
            <div className='form-control mx-2 md:w-1/2'>
              <label className=" ">
                <div className="label">
                  <span className="label-text">Supplier</span>

                </div>
                <input name='Supplier' type="text" placeholder="Type here" className="input input-bordered w-full " />

              </label></div>
              
          </div>
          <div className='md:flex mb-2'>
            <div className='form-control mx-2 md:w-1/2'>
              <label className="  ">
                <div className="label">
                  <span className="label-text">Category</span>

                </div>
                <input type="text" name='category' placeholder="Type here" className="input input-bordered w-full " />

              </label>
              </div>
            <div className='form-control mx-2  md:w-1/2'>
              <label className=" ">
                <div className="label">
                  <span className="label-text">chef</span>

                </div>
                <input type="text" name='chef'placeholder="Type here" className="input input-bordered w-full " />

              </label></div>
              
          </div>
          <div className='md:flex mb-2'>
            <div className='form-control mx-2 md:w-1/2'>
              <label className="  ">
                <div className="label">
                  <span className="label-text">Taste</span>

                </div>
                <input type="text"   name='teste' placeholder="Type here" className="input input-bordered w-full " />

              </label>
              </div>
            <div className='form-control mx-2 md:w-1/2'>
              <label className=" ">
                <div className="label">
                  <span className="label-text">Details</span>

                </div>
                <input type="text" name='Details'  placeholder="Type here" className="input input-bordered w-full " />

              </label></div>
              
              
          </div>
          <div className='md:flex mt-2'>
            <div className='form-control mx-2 md:w-full'>
              <label className="  ">
                <div className="label">
                  <span className="label-text">Photo</span>

                </div>
                <input type="text"   name='photo' placeholder="Type here" className="input input-bordered w-full " />

              </label>
              </div>
            
              
              
          </div>

          <input type='submit' className='btn mt-2  bg-red-100 btn-block' value='addCoffe'/>

        </form>
        
      </div>

    </div>
  );
};

export default AddCoffe;