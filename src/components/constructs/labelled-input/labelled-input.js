import {
  Wrapper,
  Input,
  IconContainer,
  InputContainer,
  TooltipContainer,
  Tooltip,
} from "./labelled-input-styles";
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
  Icon,
  tooltipText,
}) => (
  <Wrapper>
    <label htmlFor={name}>{label}</label>
    <InputContainer>
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
      <IconContainer>{Icon}</IconContainer>
      <Tooltip>{tooltipText}</Tooltip>
    </InputContainer>
  </Wrapper>
);

export default LabelledInput;
