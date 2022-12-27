import React, { useState } from "react";
import FormInput from "../components/FormInput";

export default function Test1() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Your Name ",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It is should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "password",
      errorMessage:
        "Username should be 8-16 characters and  include at least 1 letter, 1 number and special characters",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Password dont't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ] as const;

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-5 ">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChangeFn={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}
