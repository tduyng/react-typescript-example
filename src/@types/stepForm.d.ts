import { SetStateAction } from 'react';

interface StepFormType {
  firstName: string;
  lastName: string;
  email: string;
  occupation?: string;
  city?: string;
  bio?: string;
}

interface StepFormProps {
  step?: number;
  setStep?: React.Dispatch<SetStateAction<number>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData?: StepForm;
}
