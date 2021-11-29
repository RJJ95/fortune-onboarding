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
  data,
  onAdd,
  formId,
  expanded,
  setStocks,
  stocks,
}) => {
  function handleChange(data, dataType) {
    setStocks((prevStocks) => ({
      ...prevStocks,
      [formId]: {
        ...[formId],
        [dataType]: data,
      },
    }));
  }

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
              value={stocks[formId][formElement.dataType]}
              onChange={(e) => handleChange(e, formElement.dataType)}
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
