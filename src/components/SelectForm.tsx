import React from "react";
import { Select } from "antd";

type optionSelect = {
  label: string;
  optionSelect: string[];
};
type optionProp = {
  option: optionSelect;
};

const { Option } = Select;

export default function SelectForm(option: optionProp) {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-left">
        {option.option.label}
      </label>
      <Select className="w-full my-2" mode="multiple" optionLabelProp="label">
        {option.option.optionSelect.map((item) => (
          <Option value={item}>
            <div className="">{item}</div>
          </Option>
        ))}
      </Select>
    </div>
  );
}
