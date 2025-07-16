import * as yup from 'yup';

export const verifyCodeSchema = yup.object().shape({
    code: yup.string().required('Code is required!').matches(/^\d{6}$/, 'Code must be a 6-digit number')
})