import React from "react";
import PropTypes from "prop-types";

const InputFormComponent = ({ placeholder, Icon, type, value, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div
      className="bg-white w-full my-4 flex flex-row  ring-1 ring-gray-200 p-1 rounded-md"
      data-testid="input_form"
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
  );
};
InputFormComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  Icon: PropTypes.func,
};
InputFormComponent.defautlProps = {
  value: "",
  placeholder: "",
  type: "",
  onChange: "",
  Icon: "",
};
export default InputFormComponent;
