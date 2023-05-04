import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../ContextProvider/ContextProvider';

const Registation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState()
    const { createUser, profileUpdate } = useContext(contextProvider)
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password)
        if (password.length < 6) {
            return setError("Password must be in 6 character")
        }
        createUser(email, password)

            .then(result => {
                const user = result.user;
                console.log(user)
                profileUpdate(user, name, photo)
                navigate('/login');
            })
            .catch(erorr => {
                console.log(erorr)
            })

    }
    return (


        <div>
            <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center'>

                <div className='w-50 border p-5 mt-5 shadow-lg'>
                    <label className='my-3 d-block text-center fs-1'>Registration</label>
                    <label className='d-block' htmlFor="">Name</label>
                    <input className='w-100 border-bottom p-2 d-block my-3 outline-none' type="text" name='name' placeholder='Name' required />
                    <label className='d-block' htmlFor="">Email</label>
                    <input className='w-100 border-bottom p-2 d-block my-3 outline-none' type="email" name='email' placeholder='Email' required />
                    <label htmlFor="">Password</label>
                    <input className='w-100 border-bottom p-2 d-block my-3 outline-none' type="password" name='password' placeholder='Password' required />
                    <label htmlFor="">Photo url</label>
                    <input className='w-100 border-bottom p-2 d-block my-3 outline-none' type="text" name='photo' placeholder='Photo url' required />
                    <button type='submit' className='btn btn-primary'>Registration</button>
                    <p>Already have an account?<Link to='/login'>Login</Link> </p>
                    <p className='text-danger'>{error}</p>
                </div>
            </form>
        </div>
    );
};

export default Registation;