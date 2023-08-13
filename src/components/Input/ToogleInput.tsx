import { useState } from "react";

function ToogleInput({
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
  defaultValue: boolean;
  placeholder: string;
  updateFormValue: ({ updateType, value }: { updateType: string; value: boolean }) => void;
  updateType: string;
}) {
  const [value, setValue] = useState<boolean>(defaultValue);

  const updateToogleValue = () => {
    setValue(!value);
    updateFormValue({ updateType, value: !value });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label cursor-pointer">
        <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
        <input
          type="checkbox"
          className="toggle"
          checked={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateToogleValue()}
        />
      </label>
    </div>
  );
}

export default ToogleInput;
