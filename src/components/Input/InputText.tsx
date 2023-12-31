import { useState } from "react";

function InputText({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
  name,
}: {
  labelTitle: string;
  labelStyle: string;
  type: string;
  containerStyle: string;
  defaultValue: string;
  placeholder: string;
  updateFormValue: ({ updateType, value }: { updateType: string; value: string }) => void;
  updateType: string;
  name: string;
}) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (val: string) => {
    setValue(val);
    updateFormValue({ updateType, value: val });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
      </label>
      <input
        type={type || "text"}
        value={value}
        placeholder={placeholder || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateInputValue(e.target.value)}
        name={name}
        className="input  input-bordered w-full "
      />
    </div>
  );
}

export default InputText;
