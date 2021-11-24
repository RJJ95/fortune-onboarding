import { useState } from "react";
import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import Form from "../../constructs/form";
import LabelledSelect from "../../constructs/labelled-select";
import LabelledInput from "../../constructs/labelled-input/";
import { ReactComponent as GenerateIbanIcon } from "../../../media/images/generate.svg";

const AddBankAccountSection = () => {
  const [bank, setBank] = useState("select");
  const [iban, setIban] = useState("");
  const [startingBalance, setStartingBalance] = useState(0);
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
      value: "",
      onChange: "",
      disabled: "",
      type: "text",
      Icon: <GenerateIbanIcon onClick={generateIban} />,
      tooltipText: "Generate",
    },
    {
      label: "Enter a starting balance",
      placeholder: "1000",
      required: true,
      value: "",
      onChange: "",
      disabled: "",
      type: "number",
    },
  ];

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
      <Form>
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
