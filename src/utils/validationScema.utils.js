import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  first_name: Yup.string().min(3, 'Too Short').required('Required'),
  last_name: Yup.string().min(3, 'Too Short').required('Required'),
  email: Yup.string().email('invalid').required('Required'),
  phone: Yup.string().min(10, 'Too Short').max(12, 'Too Long').required('Required'),
  company_name: Yup.string().min(3, 'Too Short').required('Required'),
  address: Yup.string().min(3, 'Too Short').required('Required'),
  city: Yup.string().min(3, 'Too Short').required('Required'),
  state: Yup.string().min(3, 'Too Short').required('Required'),
  county: Yup.string().min(3, 'Too Short').required('Required'),
  zip: Yup.string().min(7, 'Too Short').max(7, 'Too Long').required('Required'),
});
