import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyCode } from '../../services/AuthService';
import { verifyCodeSchema } from '../../schemas/VerifyCodeSchema'

export default function VerifyCode() {


    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const userEmail = location.state?.email || '';
    useEffect(() => {
        if (!userEmail) {
            navigate('/account/login');
        }
    }, [userEmail, navigate]);

    const formik = useFormik({
        initialValues: {
            code: ''
        },
        onSubmit: async (values, actions) => {
            try {
                setLoading(true);

                const response = await verifyCode(String(values.code));

                setStatus('success');
                setMessage(response.data.message)

                setTimeout(() => {
                    navigate('/account/login');
                }, 2000);

            }
            catch (err) {
                setStatus('failed');
                setMessage(err.response.data.message);
            }
            finally {
                setTimeout(() => {
                    actions.resetForm();
                }, 1500)
                setLoading(false);
            }
        },
        validationSchema: verifyCodeSchema
    })
    const handleCodeChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,6}$/.test(value)) {
            formik.setFieldValue('code', value);
        }
    };

    return (
        <div className='flex flex-col items-center gap-4 p-10 w-96 rounded-lg bg-stone-900 text-white'>
            <h2 className='text-xl font-semibold'>Verify Your Email</h2>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full'>
                <input
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    maxLength={6}
                    name='code'
                    placeholder='Enter the verification code'
                    value={formik.values.code}
                    onChange={handleCodeChange}
                    onBlur={formik.handleBlur}
                    required
                    className={formik.errors.code && formik.touched.code ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'}
                />
                {formik.errors.code && formik.touched.code && <p className='text-red-600 text-xs'>{formik.errors.code}</p>}

                <button type='submit' disabled={loading} className='bg-green-600 hover:bg-green-500 p-2 rounded'>
                    {loading ? 'Verifying...' : 'Verify'}
                </button>
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
