import { useFormik } from 'formik';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userInfoForm } from '../../services/AuthService';
import { useEffect } from 'react';
import axios from 'axios';
import { userInfoFormSchema } from '../../schemas/UserInfoFormSchema';


export default function UserInfoForm() {

    const [professions, setProfessions] = useState([]);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [preview, setPreview] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/professions')
            .then(res => setProfessions(res.data))
            .catch(err => console.error('Error loading professions', err));
    }, []);
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
            isProfileCompleted: true
        },
        onSubmit: async (values, actions) => {
            try {
                const formData = new FormData();
                formData.append('image', values.image);
                formData.append('bio', values.bio);
                formData.append('profession', values.profession);

                const response = await userInfoForm(formData);

                setSuccess(response.data.message)

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
                    {formik.errors.image && formik.touched.image && <p className='text-red-600 text-xs'>{formik.errors.image}</p>}
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
                        className={formik.errors.bio && formik.touched.bio ? 'bg-stone-800 text-white p-2 rounded-md text-sm border border-red-600' : 'bg-stone-800 text-white p-2 rounded-md text-sm'} />
                    {formik.errors.bio && formik.touched.bio && <p className='text-red-600 text-xs'>{formik.errors.bio}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm'>Profession</label>
                    <select
                        name="profession"
                        value={formik.values.profession}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-select rounded-md text-sm p-2 text-gray-400 bg-stone-800 cursor-pointer"
                    >
                        <option className='bg-stone-800 text-gray-400' value="">Select profession</option>
                        {professions.map((item) => (
                            <option key={item} value={item}
                            className='text-gray-400 bg-stone-800'>{item}</option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='p-2 rounded-md bg-red-600 hover:bg-red-500 mt-5'>Submit</button>
                {error ? <p className='text-red-600 text-xs'>{error}</p> : <></>}
                {success ? <p className='text-green-500 text-xs'>{success}</p> : <></>}
            </form>
        </div>
    )
}
