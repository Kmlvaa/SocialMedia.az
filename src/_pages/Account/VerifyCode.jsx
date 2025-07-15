import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function VerifyCode() {

    const [code, setCode] = useState(null);

    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        setMessage('');
        setStatus('');

        try {
            const response = await fetch(`http://localhost:5000/api/verify?code=${code}`);
            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message || 'Verification successful!');
                navigate('/account/login');

            } else {
                setStatus('error');
                setMessage(data.message || 'Verification failed.');
                // navigate('account/verifyCode');
            }
        } catch (err) {
            setStatus('error');
            setMessage('Failed to fetch.');
        }
    }

    return (
        <div className='flex flex-col items-center gap-4 p-10 w-96 rounded-lg bg-stone-900 text-white'>
            <h2 className='text-xl font-semibold'>Verify Your Email</h2>
            <form onSubmit={handleVerify} className='flex flex-col gap-4 w-full'>
                <input
                    type='text'
                    placeholder='Enter the verification code'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    className='bg-stone-800 p-2 rounded text-sm text-white'
                />
                <button type='submit' className='bg-green-600 hover:bg-green-500 p-2 rounded'>Verify</button>
            </form>
            {message && (
                <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                </p>
            )}
            <div>
                <p className='text-xs'>Don't receive a mail? Try again. <a href='/account/register' className='text-red-500 cursor-pointer hover:text-red-400'>Register</a></p>
            </div>
        </div>
    )
}
