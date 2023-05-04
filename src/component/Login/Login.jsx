import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../ContextProvider/ContextProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { handleSignUp, signInWithGoogle, signInWithGithub } = useContext(contextProvider);
    const [error, setError] = useState('');


    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')

        handleSignUp(email, password)

            .then(result => {
                const loggedUeser = result.user;
                console.log(loggedUeser)
                form.reset();
                navigate(from);

            })
            .catch(error => {
                console.log(error)
                setError("please chek Email and Password")
            })
    }
    // login with google
    const handlesignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const logged = result.user;
                console.log(logged)
                navigate(from);
            })
            .catch(error => {
                console.log(error)
            })
    }

    // login with github
    const handlesignInWithGithub = () => {
        signInWithGithub()
            .then(result => {
                const logged = result.user;
                console.log(logged)
                navigate(from);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center mt-5 '>

                <div className='border px-5 mt-5 shadow-lg bg-white rounded'>
                    <label className='my-3 d-block text-center fs-1'>Login</label>
                    <label className='d-block' htmlFor="">Email</label>
                    <input className='w-100 border-bottom p-2 d-block my-3 outline-none' type="email" name='email' placeholder='Email' required />
                    <label htmlFor="">Password</label>
                    <input className='w-100 border-bottom p-2 d-block my-3 outline-none' type="password" name='password' placeholder='Password' required />
                    <button type='submit' className='btn btn-primary'>Login</button>
                    <p>New on this site?<Link to='/regitration'>Registration</Link> </p>
                    <p className='text-danger'>{error}</p>

                </div>
            </form>
            <div className='d-flex justify-content-center align-items-center flex-column-reverse mt-3'>
                <p className='bg-primary p-2 rounded text-white'> <button onClick={handlesignInWithGoogle}><FaGoogle className='inline-block fs-3 '></FaGoogle> Login with Google</button></p>
                <p className='bg-primary p-2 rounded text-white'><button onClick={handlesignInWithGithub}> <FaGithub className='inline-block fs-3 '></FaGithub> Login with Github</button></p>
            </div>

        </div>
    );
};

export default Login;