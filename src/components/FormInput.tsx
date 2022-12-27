import React, { useState } from "react";
import "./style.css";

type propsType = {
  value: string;
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  label: string;
  onChangeFn: (e: any) => void;
};

export default function FormInput(props: propsType) {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, onChangeFn, id, ...inputProps } = props;
  console.log(focus);
  return (
    <div className="flex flex-col mt-3 min-w-[450px]">
      <label className=" text-left block opacity-75 block">{label}</label>
      <input
        {...inputProps}
        onChange={(e) => {
          onChangeFn(e);
          if (e.target.value === "") {
            setFocus(false);
          } else {
            setFocus(true);
          }
        }}
        className={`border min-w-[200px] block ${
          focus ? "invalid:border-red-500" : ""
        }`}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
      />
      {focus === true ? (
        <span className="text-left text-red-500 hidden break-words">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}
