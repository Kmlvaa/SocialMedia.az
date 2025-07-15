import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, firstname, lastname, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Register successful!');

                setTimeout(() => {
                    navigate('/account/verifyCode');
                }, 1500);

            } else {
                setError(data.message || 'Register failed');
            }
        } catch (err) {
            setError('Network error');
        }
    }

    return (
        <div className='flex flex-col items-center gap-3 p-10 text-white m-auto w-96 h-auto rounded-lg bg-stone-900 shadow-[0px_4px_26px_0px_rgba(0,_0,_0,_0.7)]'>
            <h1 className='text-2xl font-semibold mb-5'>Register to Coders.az</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full' autoComplete='off'>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Email</label>
                    <input placeholder='Enter your email' type='text' value={email} required autoComplete='email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-stone-800 text-white p-2 rounded-md text-sm' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Firstname</label>
                    <input placeholder='Enter your firstname' type='text' value={firstname} required
                        onChange={(e) => setFirstname(e.target.value)}
                        className='bg-stone-800 text-white p-2 rounded-md text-sm' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Lastname</label>
                    <input placeholder='Enter your lastname' type='text' value={lastname} required
                        onChange={(e) => setLastname(e.target.value)}
                        className='bg-stone-800 text-white p-2 rounded-md text-sm' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Password</label>
                    <input placeholder='Enter your password' type='password' value={password} required autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-stone-800 text-white p-2 rounded-md text-sm' />
                </div>
                <button type='submit' className='p-2 rounded-md bg-red-600 hover:bg-red-500 mt-5'>Register</button>
                {error ? <p className='text-red-600 text-xs'>{error}</p> : <></>}
                {success ? <p className='text-green-500 text-xs'>{success}</p> : <></>}
            </form>
            <div>
                <p className='text-xs'>Already have an account? <a href='/account/login' className='text-red-500 cursor-pointer hover:text-red-400'>Login</a></p>
            </div>
        </div>
    )
}
