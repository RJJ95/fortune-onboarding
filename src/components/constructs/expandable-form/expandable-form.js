import {
  FormWrapper,
  ButtonGroup,
  FormContainer,
  SummaryContainer,
  Summary,
} from "./expandable-form-style";
import ButtonOutlined from "../../primitives/button-outlined";
import ButtonSolid from "../../primitives/button-solid";
import Loader from "../loader";
import getFormElement from "../../../tools/getFormElement";

const ExpandableForm = ({
  submitForm,
  isDisabled,
  formElements,
  isLoading,
  expanded,
  data,
  onAdd,
  formId,
}) => {
  return (
    <FormWrapper expanded={expanded}>
      <FormContainer expanded={expanded}>
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
            />
          );
        })}
        <ButtonGroup>
          <ButtonOutlined disabled={isLoading} color="venetianRed">
            Skip
          </ButtonOutlined>
          <ButtonSolid
            onClick={() => onAdd(formId)}
            disabled={isLoading || isDisabled}
            color="yellowGreen"
          >
            Add
          </ButtonSolid>
          <ButtonSolid
            onClick={() => submitForm()}
            disabled={isLoading || isDisabled}
            color="royalVessel"
          >
            {isLoading ? <Loader /> : "Next"}
          </ButtonSolid>
        </ButtonGroup>
      </FormContainer>
      <SummaryContainer expanded={expanded}>
        <Summary>
          {data.market}, {data.stock}, {data.amount}
        </Summary>
      </SummaryContainer>
    </FormWrapper>
  );
};

export default ExpandableForm;
