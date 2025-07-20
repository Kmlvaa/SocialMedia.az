import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/AuthService';
import { loginSchema } from '../../schemas/LoginSchema';
import { httpClient } from '../../utils/httpClient';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/userSlice';

export default function Login() {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const fieldError = (name) => formik.touched[name] && formik.errors[name];

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, actions) => {
            try {
                setLoading(true);
                const response = await login(values);

                setSuccess('Successfully logged in!');
                console.log(response.data)

                httpClient.setToken(response.data.accessToken, response.data.refreshToken);

                dispatch(setUser({
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                    profileCompleted: response.data.profileCompleted,
                    userRole: response.data.role,
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                }));

                console.log('Profile completed:', response.data.profileCompleted);
                setTimeout(() => {
                    if (!response.data.profileCompleted) {
                        navigate('/account/complete-profile', { replace: true });
                    } else {
                        navigate('/home');
                        console.log('Profile completed2:', response.data.profileCompleted);
                    }
                }, 2000);
            }
            catch (err) {
                console.log(err);
                setError(err.response.data.message);
            }
            finally {
                setTimeout(() => {
                    actions.resetForm();
                    setError('');
                    setSuccess('');
                }, 3000)
                setLoading(false);
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
                        className={fieldError("email") ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {fieldError("email") && <p className='text-red-600 text-xs'>{formik.errors.email}</p>}
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
                        className={fieldError("password") ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {fieldError("password") && <p className='text-red-600 text-xs'>{formik.errors.password}</p>}
                </div>
                <div className='flex flex-row items-center justify-between text-xs text-gray-600'>
                    <p className='underline cursor-pointer hover:text-gray-400'>Forgot password?</p>
                </div>
                <button type='submit' className='p-2 rounded-md bg-red-600 hover:bg-red-500 mt-5'>
                    {loading ? 'Loading...' : 'Login'}
                </button>
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
