import React, { useState } from "react";

type labelProp = {
  label: string;
  type: string;
};

type itemURL = {
  itemUrl: labelProp;
};

const URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export default function InputFormURL(aaa: itemURL) {
  const [checkUrl, setCheckUrl] = useState(true);
  const handleInput = (e: any) => {
    if (!URL_REGEX.test(e.target.value)) {
      setCheckUrl(false);
      console.log("khong phai url");
    } else {
      setCheckUrl(true);
      console.log("co la URL");
    }
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-left border-red-500">
        {aaa.itemUrl.label}
      </label>
      <input
        placeholder="https://yourcompany.com/terms"
        type={aaa.itemUrl.type}
        className={`input-form ${!checkUrl ? `border-red-500` : ""} `}
        onChange={handleInput}
      />
      <p className={`${checkUrl ? "hidden" : "block text-red-500 text-left"}`}>
        Wrong URL format
      </p>
    </div>
  );
}
