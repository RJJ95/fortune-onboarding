import { NameContainer } from "./labelled-name-input-style";
import LabelledInput from "../labelled-input";

const LabelledNameInput = ({ formElements }) => (
  <NameContainer>
    {formElements.map((formElement, i) => (
      <LabelledInput
        key={i}
        label={formElement.label}
        placeholder={formElement.placeholder}
        value={formElement.value}
        onChange={formElement.onChange}
        disabled={formElement.disabled}
      />
    ))}
  </NameContainer>
);

export default LabelledNameInput;
