import * as yup from 'yup';

export const userInfoFormSchema = yup.object().shape({
    image: yup.mixed().required("Image is required"),
    bio: yup.string().min(10).required("Bio is required"),
    profession: yup.string().required("Select your profession"),
})