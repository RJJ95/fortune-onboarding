import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import Form from "../../constructs/form";
import LabelledSelect from "../../constructs/labelled-select";
import LabelledInput from "../../constructs/labelled-input/";
import LabelledIbanInput from "../../constructs/labelled-iban-input/";

const AddBankAccountSection = () => {
  const formElements = [
    {
      label: "Select a bank",
      placeholder: "",
      required: true,
      value: "",
      onChange: "",
      disabled: "",
      type: "select",
      options: [
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
      type: "iban",
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

  function getFormElement(type) {
    switch (type) {
      case "select":
        return LabelledSelect;
      case "iban":
        return LabelledIbanInput;
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
            />
          );
        })}
      </Form>
    </SectionWrapper>
  );
};

export default AddBankAccountSection;
