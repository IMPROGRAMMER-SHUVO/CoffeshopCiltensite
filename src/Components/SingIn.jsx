import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider';

const SingIn = () => {
const {signinUser}=useContext(AuthContext)

  const handleSingin=event=>{
    event.preventDefault();
    const form=event.target;

    const password=form.password.value;
    const email=form.email.value;
    console.log(email,password)
    signinUser(email,password)
    .then(result=>{
      console.log(result)
      const user={
        email,
        lastLoggedAt:result.user?.metadata?.lastSignInTime
      }
      //updat last loggged at in the database
      fetch('https://coffee-shop-serversite.vercel.app/user',{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
.then(res=>res.json())
.then(data=>{
  console.log(data)
})
    })
    .catch(error=>{
      console.error(error)
    })
  }
    return (
        <div>
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSingin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>Please create and acccount<Link className='btn-link' to='/Signup'>SignUp</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingIn;