import Field, { FieldProps } from './Field';

// { title: "Login", fields: [ {label, placeholder, type} ] }

interface FormProps {
  title: string;
  fields: FieldProps[];
}

export function Form(props: FormProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div className="form-container">
        {props.fields.map(function (field) {
          return (
            <Field
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
            />
          );
        })}
      </div>
      <button>Submit</button>
    </div>
  );
}
