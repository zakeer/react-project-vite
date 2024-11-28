import { FieldProps } from '../Field';
import { Form } from '../Form';

const fields: FieldProps[] = [
  { label: 'Username', placeholder: 'Provide username' },
  { label: 'Password', placeholder: 'Provide password', type: 'password' },
];

export default function LoginForm() {
  return <Form title="Login" fields={fields} />;
}
