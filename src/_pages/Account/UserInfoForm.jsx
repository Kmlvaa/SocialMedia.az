import { useFormik } from 'formik';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { submitProfilephoto, userInfoForm } from '../../services/AuthService';
import { useEffect } from 'react';
import { userInfoFormSchema } from '../../schemas/UserInfoFormSchema';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileCompleted, updateProfileInfo } from '../../redux/userSlice';
import { fetchProfessions } from '../../redux/professionsSlice';

export default function UserInfoForm() {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [preview, setPreview] = useState(null);

    const fieldError = (name) => formik.touched[name] && formik.errors[name];

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const { list: professions, status } = useSelector((state) => state.professions);

    useEffect(() => {
        dispatch(fetchProfessions());
    }, [dispatch]);

    useEffect(() => {
    if (user.profileComplete) {
        navigate('/home', { replace: true });
    }
}, [user.profileComplete, navigate]);

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const formik = useFormik({
        initialValues: {
            image: null,
            bio: '',
            profession: '',
        },
        onSubmit: async (values, actions) => {
            try {
                const formData1 = new FormData();
                formData1.append('profession', values.profession);
                formData1.append('bio', values.bio);
                
                const formData2 = new FormData();
                formData2.append('image', values.image);

                const response = await userInfoForm(formData1);
                const res2 = await submitProfilephoto(formData2);

                dispatch(updateProfileInfo({
                    bio: formik.values.bio,
                    profession: formik.values.profession,
                    imageUrl: preview,
                }))
                dispatch(setProfileCompleted(true))
                console.log(user.profileCompleted);

                setSuccess(response.data.message);

                setTimeout(() => {
                    navigate('/home', { replace: true });
                }, 2000);
            }
            catch (err) {
                console.log(err.data.message);
                setError(err?.response.data.message);
                setPreview(null)
            }
            finally {
                setTimeout(() => {
                    actions.resetForm();
                    setError('');
                    setSuccess('');
                }, 3000)
            }
        },
        validationSchema: userInfoFormSchema
    })

    return (
        <div className='flex flex-col items-center gap-3 p-10 text-white m-auto w-96 h-auto rounded-lg bg-stone-900 shadow-[0px_4px_26px_0px_rgba(0,_0,_0,_0.7)]'>
            <h1 className='text-2xl font-semibold mb-5'>Complete your profile</h1>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 w-full' autoComplete='off'>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Profile photo</label>
                    <input
                        type="file"
                        id='image'
                        name="image"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            formik.setFieldValue('image', file);
                            setPreview(file ? URL.createObjectURL(file) : null);
                        }}
                        className='hidden'
                    />
                    <div className='flex flex-row items-center justify-between'>
                        <label
                            htmlFor="image"
                            className="cursor-pointer bg-stone-800 text-gray-400 py-2 px-4 rounded hover:bg-stone-700 text-sm text-center w-fit"
                        >
                            {formik.values.image ? 'Change Image' : 'Upload Image'}
                        </label>
                        {preview && (
                            <div className='w-16 h-16 rounded-md'>
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-16 h-16 rounded-md object-cover border border-custom-gray-light"
                                />
                            </div>
                        )}
                    </div>
                    {fieldError("image") && <p className='text-red-600 text-xs'>{formik.errors.image}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Bio</label>
                    <input
                        id='bio'
                        placeholder='Write about yourself...'
                        type='text'
                        name='bio'
                        value={formik.values.bio}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        autoComplete='bio'
                        className={fieldError("bio") ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {fieldError("bio") && <p className='text-red-600 text-xs'>{formik.errors.bio}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Profession</label>
                    {status === 'loading' && <p>Loading professions...</p>}
                    {status === 'failed' && <p className="text-red-500">{error}</p>}
                    {status === 'succeeded' && (
                        <select
                            name="profession"
                            value={formik.values.profession}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-select rounded-md text-sm p-2 text-gray-400 bg-stone-800 cursor-pointer">
                            <option value="">Select a profession</option>
                            {professions.map((prof, index) => (
                                <option key={index} value={prof}
                                    className='text-gray-400 bg-stone-800'>{prof}</option>
                            ))}
                        </select>
                    )}
                    {fieldError("profession") && <p className='text-red-600 text-xs'>{formik.errors.profession}</p>}
                </div>
                <button type='submit' className='p-2 rounded-md bg-red-600 hover:bg-red-500 mt-5'>Submit</button>
                {error ? <p className='text-red-600 text-xs'>{error}</p> : <></>}
                {success ? <p className='text-green-500 text-xs'>{success}</p> : <></>}
            </form>
        </div>
    )
}
