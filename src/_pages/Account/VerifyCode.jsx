import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyCode } from '../../services/AuthService';
import { verifyCodeSchema } from '../../schemas/VerifyCodeSchema'
import { useDispatch } from 'react-redux';
import { setEmailConfirmed, setUser } from '../../redux/userSlice';

export default function VerifyCode() {


    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

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
                console.log(response.data.message)
                setMessage(response.data.message);
                dispatch(setEmailConfirmed(true));

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
                    setMessage('');
                    setStatus('');
                }, 3000)
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
            <p className='text-center'>The 6 digit code was just sent to <span className='font-bold text-sky-500'>kmlva@gmail.com</span></p>
            <p className='text-sm'>Code expires in 15 minutes</p>
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
                <p className='text-xs'>Don't receive an email? <a href='/account/register' className='text-red-500 cursor-pointer hover:text-red-400'>Resend code</a></p>
            </div>
        </div>
    )
}
