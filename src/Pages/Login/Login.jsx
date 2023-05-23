import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/ScocialLogin/SocialLogin';

const Login = () => {

    let navigate = useNavigate()
    let location = useLocation()
    let from = location.state?.from?.pathname || '/';


    const { singIn } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)


        singIn(email, password)
            .then(result => {
                const loginUser = result.user
                console.log(loginUser)
                // console.log(loginUser)
                // navigate(from, { replace: true })

              /*   const loggedUser = {
                    email: loginUser.email
                }
                console.log(loggedUser) */
                navigate(from, { replace: true })


               /*  fetch('http://localhost:4000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(loggedUser)

                })
                .then(res=>res.json())
                .then(data=>{
                    console.log('jwt response:',data)
                    // waring: Local Storage is not the best (second best place) to store access token
                    localStorage.setItem('car-access-token', data.token)
                    // navigate(from, { replace: true })
                })
 */
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img className='px-6 py-6' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body ">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to car Doctors <Link className='text-orange-600 font-bold' to='/singup'>Sing Up</Link></p>
                       <div className='text-center'>
                       <SocialLogin></SocialLogin>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;