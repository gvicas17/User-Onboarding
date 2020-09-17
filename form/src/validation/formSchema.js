import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
      .required('Name is required'),
    email: yup.string()
      .email('Must be a valid email')
      .required('Email is required'),
    password: yup.string()
      .required('password is required')
      .min(6, 'Password must be 3 characters or longer'),
    termsAgreement:
     yup.boolean(),
  })