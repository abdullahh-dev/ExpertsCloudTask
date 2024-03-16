import * as Yup from 'yup';
export const basicSchema = Yup.object().shape({
  task: Yup.string().trim().required('Please Enter a Task'),
});
