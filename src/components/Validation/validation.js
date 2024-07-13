import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  Day: Yup.number().min(1).max(31).required(),
  Month: Yup.number().min(1).max(12).required(),
  Year: Yup.number().min(1900).max(new Date().getFullYear()).required(),
});

const daySchema = Yup.object().shape({
  Day: Yup.number().min(1).max(31).required('This field is required'),
});
const monthSchema = Yup.object().shape({
  Month: Yup.number().min(1).max(12).required('This field is required'),
});
const yearSchema = Yup.object().shape({
  Year: Yup.number().min(1900).max(new Date().getFullYear()).required('This field is required'),
});

export { validationSchema, daySchema, monthSchema, yearSchema };
