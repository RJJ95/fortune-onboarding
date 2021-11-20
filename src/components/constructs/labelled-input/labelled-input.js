import { Wrapper } from "./labelled-input-styles";
const LabelledInput = ({
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
  disabled,
}) => (
  <Wrapper>
    <label>{label}</label>
    <input
      type={type || "text"}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  </Wrapper>
);

export default LabelledInput;
