import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required!'),
    password: yup.string().required('Password is required!').min(4, 'Password must be at least 4 characters!')
})