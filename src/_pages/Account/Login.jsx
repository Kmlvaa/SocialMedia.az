import React, { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, rememberMe }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Login successful!');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Network error');
        }
    }

    return (
        <div className='flex flex-col items-center gap-3 p-10 text-white m-auto w-96 h-auto rounded-lg bg-stone-900 shadow-[0px_4px_26px_0px_rgba(0,_0,_0,_0.7)]'>
            <h1 className='text-2xl font-semibold mb-5'>Login to Coders.az</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full' autoComplete='off'>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Username</label>
                    <input placeholder='Enter your username' type='text' value={username} required autoComplete='username'
                        onChange={(e) => setUsername(e.target.value)}
                        className='bg-stone-800 text-white p-2 rounded-md text-sm' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Password</label>
                    <input placeholder='Enter your password' type='password' value={password} required autoComplete='new-password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-stone-800 text-white p-2 rounded-md text-sm' />
                </div>
                <div className='flex flex-row items-center justify-between text-xs text-gray-600'>
                    <div className='flex flex-row items-center justify-center gap-1'>
                        <input type='checkbox' className='cursor-pointer' value={rememberMe}
                        onChange={(e) => setRememberMe(e.target.value)}/>
                        <p className=''>Remember me</p>
                    </div>
                    <p className='underline cursor-pointer hover:text-gray-400'>Forgot password?</p>
                </div>
                <button type='submit' className='p-2 rounded-md bg-red-600 hover:bg-red-500 mt-5'>Login</button>
                {error ? <p className='text-red-600 text-xs'>{error}</p> : <></>}
                {success ? <p className='text-green-500 text-xs'>{success}</p> : <></>}
            </form>
            <div>
                <p className='text-xs'>Don't have any account? <a href='/account/register' className='text-red-500 cursor-pointer hover:text-red-400'>Register</a></p>
            </div>
        </div>
    )
}
