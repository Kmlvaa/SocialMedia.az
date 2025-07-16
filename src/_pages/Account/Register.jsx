import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../../schemas/RegisterSchema';
import { useFormik } from 'formik';
import { register } from '../../services/AuthService';

export default function Register() {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //     setSuccess('');

    //     try {
    //         const response = await fetch('http://localhost:5000/api/register', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, firstName, lastName, password }),
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             setSuccess('Register successful!');

    //             setTimeout(() => {
    //                 navigate('/account/verifyCode');
    //             }, 1500);

    //         } else {
    //             setError(data.message || 'Register failed');
    //         }
    //     } catch (err) {
    //         setError('Network error');
    //     }
    // }
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit: async (values, actions) => {
            try {
                const response = await register(values);
                setSuccess(response.data)

                setTimeout(() => {
                    navigate('/account/verifyCode');
                }, 1500);

                actions.resetForm();
            }
            catch (err) {
                console.log(err);
                setError(err.response.data);
            }
        },
        validationSchema: registerSchema
    })


    return (
        <div className='flex flex-col items-center gap-3 p-10 text-white m-auto w-96 h-auto rounded-lg bg-stone-900 shadow-[0px_4px_26px_0px_rgba(0,_0,_0,_0.7)]'>
            <h1 className='text-2xl font-semibold mb-5'>Register to Coders.az</h1>
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
                    <label className='text-sm'>Firstname</label>
                    <input
                        id='firstname'
                        placeholder='Enter your firstname'
                        type='text'
                        name='firstName'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        className={formik.errors.firstName && formik.touched.firstName ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {formik.errors.firstName && formik.touched.firstName && <p className='text-red-600 text-xs'>{formik.errors.firstName}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>lastName</label>
                    <input
                        id='lastname'
                        placeholder='Enter your lastname'
                        type='text'
                        name='lastName'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        className={formik.errors.lastName && formik.touched.lastName ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {formik.errors.lastName && formik.touched.lastName && <p className='text-red-600 text-xs'>{formik.errors.lastName}</p>}
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
                <button type='submit' className='p-2 rounded-md bg-red-600 hover:bg-red-500 mt-5'>Register</button>
                {error ? <p className='text-red-600 text-xs'>{error}</p> : <></>}
                {success ? <p className='text-green-500 text-xs'>{success}</p> : <></>}
            </form>
            <div>
                <p
                    className='text-xs'>Already have an account?
                    <a href='/account/login' className='text-red-500 cursor-pointer hover:text-red-400'>Login</a>
                </p>
            </div>
        </div>
    )
}
