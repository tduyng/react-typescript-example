import { StepFormType } from 'src/@types/stepForm';

export const DefaultForm: StepFormType = {
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: '',
};

export const FormReducer = (formData, { type, payload }) => {
  switch (type) {
    case 'UPDATE_FIRST':
      return {
        ...formData,
        ...payload,
      };
    case 'UPDATE_NEXT':
      return {
        ...formData,
        ...payload,
      };
    default:
      return formData;
  }
};
