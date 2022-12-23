import React, { useState } from "react";

export default function InputFormEmail() {
  const [checkEmail, setCheckEmail] = useState(true);
  const checkEmailFn = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleValueEmail = (e?: any) => {
    if (checkEmailFn.test(e.target.value) || e.target.value === "") {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  return (
    <div>
      <input
        className={`input-form w-full ${checkEmail ? "" : "border-red-500"}`}
        type="email"
        placeholder="Nhap email..."
        onChange={handleValueEmail}
      />
      <p
        className={`${checkEmail ? "hidden" : "text-red-500 block text-left"}`}
      >
        Khong phai email
      </p>
    </div>
  );
}
