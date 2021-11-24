import { Wrapper, Input } from "./labelled-input-styles";
const LabelledInput = ({
  label,
  type,
  placeholder,
  required,
  value,
  onChange,
  disabled,
  name,
  error,
}) => (
  <Wrapper>
    <label htmlFor={name}>{label}</label>
    <Input
      type={type || "text"}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      name={name}
      error={error}
      step="any"
    />
  </Wrapper>
);

export default LabelledInput;
