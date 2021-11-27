import { useState, useEffect } from "react";
import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import Form from "../../constructs/form";
import LabelledSelect from "../../constructs/labelled-select";
import LabelledInput from "../../constructs/labelled-input/";
import { ReactComponent as GenerateIbanIcon } from "../../../media/images/generate.svg";
import { useNavigate } from "react-router-dom";

const AddBankAccountSection = () => {
  const [bank, setBank] = useState("select");
  const [iban, setIban] = useState("");
  const [startingBalance, setStartingBalance] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  const formElements = [
    {
      label: "Select a bank",
      placeholder: "Select",
      required: true,
      value: bank,
      onChange: setBank,
      disabled: "",
      type: "select",
      options: [
        {
          name: "Select",
          value: "select",
        },
        {
          name: "ING",
          value: "ing",
        },
      ],
    },
    {
      label: "IBAN",
      placeholder: "NL21INGB6684756000",
      required: true,
      value: iban,
      onChange: setIban,
      disabled: "",
      type: "text",
      Icon: <GenerateIbanIcon onClick={generateIban} />,
      tooltipText: "Generate",
    },
    {
      label: "Enter a starting balance",
      placeholder: "1000",
      required: true,
      value: startingBalance,
      onChange: setStartingBalance,
      disabled: "",
      type: "number",
    },
  ];

  useEffect(() => {
    validateForm();
  });

  function submitForm() {
    setIsLoading(true);
    setIsDisabled(true);
    setTimeout(() => {
      // Send data to backend
      setIsLoading(false);
      navigate("/stocks");
    }, 5000);
  }

  function validateForm() {
    bank && iban && startingBalance
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }

  function generateIban() {}

  function getFormElement(type) {
    switch (type) {
      case "select":
        return LabelledSelect;
      default:
        return LabelledInput;
    }
  }

  return (
    <SectionWrapper>
      <SectionHeader>Add your first bank account</SectionHeader>
      <Form
        isDisabled={isDisabled}
        submitForm={submitForm}
        isLoading={isLoading}
      >
        {formElements.map((formElement, i) => {
          const FormElement = getFormElement(formElement.type);
          return (
            <FormElement
              key={i}
              label={formElement.label}
              placeholder={formElement.placeholder}
              required={formElement.required}
              value={formElement.value}
              onChange={formElement.onChange}
              disabled={formElement.disabled}
              type={formElement.type}
              options={formElement.options}
              tooltipText={formElement.tooltipText}
              Icon={formElement.Icon}
            />
          );
        })}
      </Form>
    </SectionWrapper>
  );
};

export default AddBankAccountSection;
