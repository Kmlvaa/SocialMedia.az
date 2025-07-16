import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/AuthService';
import { loginSchema } from '../../schemas/LoginSchema';

export default function Login() {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //     setSuccess('');

    //     try {
    //         const response = await fetch('http://localhost:5000/api/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             setSuccess('Login successful!');

    //             if (data.token) {
    //                 localStorage.setItem('token', data.token);
    //             }

    //             setTimeout(() => {
    //                 navigate('/home');
    //             }, 1500);

    //         } else {
    //             setError(data.message || 'Login failed');
    //             setTimeout(() => {
    //                 navigate('/account/login');
    //             }, 1500);
    //         }
    //     } catch (err) {
    //         setError('Network error');
    //     }
    // }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, actions) => {
            try {
                const response = await login(values);
                localStorage.setItem('token', response.data.token);

                setSuccess(response.data.message);

                // if (!user.isProfileCompleted) {
                //     navigate('/complete-profile'); 
                // } else {
                //     navigate('/home'); 
                // }

                setTimeout(() => {
                    navigate('/home');
                }, 1500);

                actions.resetForm();
            }
            catch (err) {
                console.log(err);
                setError(err.response.data.message);
            }
        },
        validationSchema: loginSchema
    })

    return (
        <div className='flex flex-col items-center gap-3 p-10 text-white m-auto w-96 h-auto rounded-lg bg-stone-900 shadow-[0px_4px_26px_0px_rgba(0,_0,_0,_0.7)]'>
            <h1 className='text-2xl font-semibold mb-5'>Login to Coders.az</h1>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full' autoComplete='off'>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Email</label>
                    <input
                        id='email'
                        placeholder='Enter your email'
                        type='text'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        autoComplete='email'
                        className={formik.errors.email && formik.touched.email ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {formik.errors.email && formik.touched.email && <p className='text-red-600 text-xs'>{formik.errors.email}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Password</label>
                    <input
                        placeholder='Enter your password'
                        type='password'
                        name='password'
                        value={formik.values.password}
                        required
                        autoComplete='new-password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.errors.password && formik.touched.password ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {formik.errors.password && formik.touched.password && <p className='text-red-600 text-xs'>{formik.errors.password}</p>}
                </div>
                <div className='flex flex-row items-center justify-between text-xs text-gray-600'>
                    <p className='underline cursor-pointer hover:text-gray-400'>Forgot password?</p>
                </div>
                <button type='submit' className='p-2 rounded-md bg-red-600 hover:bg-red-500 mt-5'>Login</button>
                {error ? <p className='text-red-600 text-xs'>{error}</p> : <></>}
                {success ? <p className='text-green-500 text-xs'>{success}</p> : <></>}
            </form>
            <div>
                <p
                    className='text-xs'>Don't have any account?
                    <a href='/account/register' className='text-red-500 cursor-pointer hover:text-red-400'>Register</a>
                </p>
            </div>
        </div>
    )
}
