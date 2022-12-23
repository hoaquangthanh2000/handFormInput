import React, { useState } from "react";
import InputFormEmail from "../../components/InputFormEmail";
import InputForm from "../../components/InputFormURL";
import SelectForm from "../../components/SelectForm";
import { useAppDispatch } from "./../../app/hooks";
import { addInformation } from "../step1/step1Slice";

export default function Step1() {
  const dispatch = useAppDispatch();
  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file.preview);
  };
  const valueInput = [
    {
      label: "category",
      optionSelect: [
        "Analytics",
        "Broadcasting & Streaming",
        "Business System Integrator",
        "CRM",
        "Carrier Provider Exchange",
        "Collaboration",
        "Customer Service",
      ],
    },
    {
      label: "Industry Vertical",
      optionSelect: [
        "Education",
        "Financial Services",
        "Government",
        "Healthcare",
        "Kids",
        "Other",
      ],
    },
    {
      label: "Market Segment",
      optionSelect: ["Consumer", "Enterprise", "Other", "Small Business"],
    },
    {
      label: "Line of Business",
      optionSelect: [
        "Engineering",
        "Finance",
        "Human Resources",
        "Marketing",
        "Other",
        "Product",
        "Professor",
      ],
    },
  ];
  const linksInput = [
    {
      type: "url",
      label: "Privacy policy URL",
    },
    {
      type: "url",
      label: "Terms of use URL",
    },
    {
      type: "url",
      label: "Support URL",
    },
    {
      type: "url",
      label: "Documentation URL",
    },
  ];
  const addInformationClick = () => {
    dispatch(
      addInformation({
        appName: appName,
        shortDesc: shortDesc,
        longDesc: longDesc,
        image: image,
        companyName: companyName,
        category: category,
        industry: industry,
        market: market,
        lineOfBusiness: lineOfBusiness,
        developerName: developerName,
        developerEmail: developerEmail,
        privacyUrl: privacyUrl,
        termsUrl: "",
        supportUrl: supportUrl,
        DocumentationUrl: DocumentationUrl,
      })
    );
  };
  const [appName, setAppName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [image, setImage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [market, setMarket] = useState([]);
  const [lineOfBusiness, setLineOfBusiness] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");
  const [privacyUrl, setPrivacyUrl] = useState("");
  const [termsUrl, setTermsUrl] = useState("");
  const [supportUrl, setSupportUrl] = useState("");
  const [DocumentationUrl, setDocumentationUrl] = useState("");

  return (
    <form className="w-2/5 mt-[250px]">
      <div className="flex flex-row">
        <input
          placeholder="Name..."
          className="w-1/3 input-form mr-5"
          onChange={(e) => setAppName(e.target.value)}
        />
        <input
          placeholder="Short description..."
          className="w-2/3 input-form"
          onChange={(e) => setShortDesc(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-left">
          Long description
        </label>
        <textarea
          onChange={(e) => setLongDesc(e.target.value)}
          name="thanh"
          id="message"
          rows={6}
          cols={90}
          className="border border-opacity-75"
        ></textarea>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center">
            <p className=" text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            onChange={handlePreviewAvatar}
          />
          <img src={image} className="w-full h-full" />
        </label>
      </div>
      <div className="w-full flex flex-col my-4">
        <label className="text-left">Company name</label>
        <input
          type="text"
          className="w-full input-form"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <div className="mb-9 my-4">
        {valueInput.map((item) => (
          <SelectForm option={item} />
        ))}
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-left text-lg font-semibold">
          Developer Contact Information
        </label>
        <div className="w-full">
          <p className="text-base text-left">Name</p>
          <input
            type="text"
            className="input-form w-full"
            onChange={(e) => setAppName(e.target.value)}
          />
        </div>
        <div>
          <p className="text-base text-left">Email address</p>
          <InputFormEmail />
        </div>
      </div>
      <div>
        {linksInput.map((item) => (
          <InputForm key={item.label} itemUrl={item} />
        ))}
      </div>
      <div className="mt-12 text-right">
        <button className="text-green-600 font-medium px-4">Saved</button>
        <button
          className="border-white text-white bg-blue-500 px-4 rounded"
          onClick={addInformationClick}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
