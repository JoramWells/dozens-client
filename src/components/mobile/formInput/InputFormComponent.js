import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateInput } from "../../utilities/Validator";

const InputFormComponent = ({
  placeholder,
  Icon,
  validators,
  type,
  value,
  onChange,
}) => {
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };
  return (
    <div data-testid="input_form">
      <div
      style={{width:"18rem"}}
        className="bg-white w-full my-4 flex flex-row  ring-1 ring-gray-100 p-1  rounded-md " 
      >
        {Icon && <Icon className="h-5 m-1 text-gray-500" />}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          className="w-full focus:outline-none text-gray-700 rounded-md p-1"
          onChange={handleChange}
        />
      </div>
      <div className="h-2 flex justify-start">
        {error && <p className="text-xs text-red-400 -mt-1">{error.message}</p>}
      </div>
    </div>
  );
};
InputFormComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validators: PropTypes.array,
  onChange: PropTypes.func,
  Icon: PropTypes.func,
};
InputFormComponent.defautlProps = {
  value: "",
  placeholder: "",
  type: "",
  validators: [],
  onChange: "",
  Icon: "",
};
export default InputFormComponent;
