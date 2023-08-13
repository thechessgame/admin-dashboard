import { useState } from "react";

function TextAreaInput({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  updateType,
}: {
  labelTitle: string;
  labelStyle: string;
  type: string;
  containerStyle: string;
  defaultValue: string;
  placeholder: string;
  updateFormValue: ({ updateType, value }: { updateType: string; value: string }) => void;
  updateType: string;
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
      <textarea
        value={value}
        className="textarea textarea-bordered w-full"
        placeholder={placeholder || ""}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateInputValue(e.target.value)}
      ></textarea>
    </div>
  );
}

export default TextAreaInput;
