import { useState, useEffect } from "react";
import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import Form from "../../constructs/form";
import { ReactComponent as GenerateIbanIcon } from "../../../media/images/generate.svg";
import { useNavigate } from "react-router-dom";
import validateForm from "../../../tools/validateForm";

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
      value: bank,
      onChange: setBank,
      disabled: isLoading,
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
      value: iban,
      onChange: setIban,
      disabled: isLoading,
      Icon: <GenerateIbanIcon onClick={generateIban} />,
      tooltipText: "Generate",
    },
    {
      label: "Enter a starting balance",
      placeholder: "1000",
      value: startingBalance,
      onChange: setStartingBalance,
      disabled: isLoading,
      type: "number",
    },
  ];

  useEffect(() => {
    validateForm([bank, iban, startingBalance], setIsDisabled);
  }, [bank, iban, startingBalance]);

  function submitForm() {
    setIsLoading(true);
    setIsDisabled(true);
    setTimeout(() => {
      // Send data to backend
      setIsLoading(false);
      navigate("/stocks");
    }, 5000);
  }

  function generateIban() {}

  return (
    <SectionWrapper>
      <SectionHeader>Add your first bank account</SectionHeader>
      <Form
        isDisabled={isDisabled}
        submitForm={submitForm}
        isLoading={isLoading}
        formElements={formElements}
      />
    </SectionWrapper>
  );
};

export default AddBankAccountSection;
