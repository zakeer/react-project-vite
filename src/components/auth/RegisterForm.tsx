import { FieldProps } from '../Field';
import { Form } from '../Form';

const fields: FieldProps[] = [
  { label: 'Username', placeholder: 'Provide username' },
  { label: 'First name', placeholder: 'Please enter firstname' },
  { label: 'Last name', placeholder: 'Please enter lastname' },
  { label: 'Email', placeholder: 'Please enter firstname', type: 'email' },
  { label: 'Password', placeholder: 'Provide password', type: 'password' },
];

export default function RegisterForm() {
  return <Form title="Register" fields={fields} />;
}
