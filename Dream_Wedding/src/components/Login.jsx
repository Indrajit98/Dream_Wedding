import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import {FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { useTitle } from "../hooks/useTitle";

const Login = () => {
    const {logIn,googleSignIn,loading} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation()
    const navigate = useNavigate()

    const from =location.state?.from.pathname || '/'

    useTitle('login')

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if(loading){
          return <progress className="progress w-56"></progress>
        }

        logIn(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user)

                const currentUser = {
                  email: user?.email
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

                .catch(err => console.error(err))

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

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="card md:w-96 py-20 ">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="lg:text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn btn-outline">Login</button>
              </div>
            </form>
            <p className='text-center'>New to Dream_Wedding <Link className='text-orange-600 font-bold' to='/signup'>Sign UP</Link></p>
            
            <button onClick={handelGoogleSignIn} className="flex items-center m-auto mt-3 btn btn-outline"><FaGoogle className="mr-2"></FaGoogle>Login With Google</button>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
