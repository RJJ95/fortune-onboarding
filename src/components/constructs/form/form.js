import { FormWrapper, ButtonGroup } from "./form-style";
import ButtonOutlined from "../../primitives/button-outlined";
import ButtonSolid from "../../primitives/button-solid";
import Loader from "../loader";
import getFormElement from "../../../tools/getFormElement";

const Form = ({ submitForm, isDisabled, formElements, isLoading }) => (
  <FormWrapper>
    {formElements.map((formElement, i) => {
      const FormElement = getFormElement(formElement.type);
      return (
        <FormElement
          key={i}
          label={formElement.label}
          placeholder={formElement.placeholder}
          value={formElement.value}
          onChange={formElement.onChange}
          disabled={formElement.disabled}
          type={formElement.type}
          options={formElement.options}
          tooltipText={formElement.tooltipText}
          Icon={formElement.Icon}
          formElements={formElement.formElements}
        />
      );
    })}
    <ButtonGroup>
      <ButtonOutlined disabled={isLoading} color="venetianRed">
        Skip
      </ButtonOutlined>
      <ButtonSolid
        onClick={() => submitForm()}
        disabled={isLoading || isDisabled}
        type="submit"
        color="royalVessel"
      >
        {isLoading ? <Loader /> : "Next"}
      </ButtonSolid>
    </ButtonGroup>
  </FormWrapper>
);

export default Form;
