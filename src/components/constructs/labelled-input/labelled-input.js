import { Wrapper } from "./labelled-input-styles";
const LabelledInput = ({
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
  disabled,
  name,
}) => (
  <Wrapper>
    <label for={name}>{label}</label>
    <input
      type={type || "text"}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      name={name}
    />
  </Wrapper>
);

export default LabelledInput;
