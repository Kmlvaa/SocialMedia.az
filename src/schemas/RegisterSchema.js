import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required!'),
    password: yup.string().required('Password is required!').min(4, 'Password must be at least 8 characters!').max(20, 'Too long!'),
    firstName: yup.string().required('Firstname is required!'),
    lastName: yup.string().required('Lastname is required!'),
})