import LabelledInput from "../labelled-input";
import { Wrapper, GenerateIcon } from "./labelled-iban-input-style";

const LabelledIbanInput = ({
  label,
  placeholder,
  required,
  value,
  onChange,
  disabled,
  name,
  error,
}) => (
  <Wrapper>
    <LabelledInput
      label={label}
      type="iban"
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      name={name}
      error={error}
    />
    <GenerateIcon />
  </Wrapper>
);

export default LabelledIbanInput;
