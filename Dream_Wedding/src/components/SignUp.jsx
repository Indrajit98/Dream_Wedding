import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import {FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useTitle } from "../hooks/useTitle";

const SignUp = () => {

    const {createUser,googleSignIn,updateUserProfile,loading} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation()
    const navigate = useNavigate()
    
    const from =location.state?.from.pathname || '/'
    useTitle('signUp')

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(loading){
          return <progress className="progress w-56"></progress>
        }
        createUser(email,password)
        .then(res => {
            const user = res.user;
            userName(name)
            navigate(from,{replace:true})
        })
        .catch(err => console.error(err))
        form.reset()
    }

    const handelGoogleSignIn = () => {
      googleSignIn(googleProvider)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        const currentUser =  {
          email:user.email
        }
        // get jwt token
        fetch(`https://dream-wedding-server.vercel.app/jwt`,{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data =>{
          localStorage.setItem('token', data.token)
          navigate(from,{replace:true})
        })
        
      
      })
      .catch((err) => {
        console.error(err);  
      });
    };

    const userName = (name) =>{
      const profile={
        displayName:name
      }
      updateUserProfile(profile)
      .then(() =>{ })
      .catch(err => console.error(err))
    }
    
  return (
    <div>
      <div className="hero w-full my-20">
        <div className="hero-content">
          <div className="card md:w-96 shadow-2xl bg-base-100  py-20 ">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="lg:text-5xl font-bold text-center">Sign UP</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?
              <Link className="text-orange-600 font-bold" to="/login">
                {" "}
                Login
              </Link>
            </p>
            <button onClick={handelGoogleSignIn} className="flex items-center m-auto mt-3 btn btn-outline"><FaGoogle className="mr-2"></FaGoogle>Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
