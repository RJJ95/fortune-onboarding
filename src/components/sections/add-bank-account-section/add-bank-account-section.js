import { useState, useEffect } from "react";
import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import Form from "../../constructs/form";
import { ReactComponent as GenerateIbanIcon } from "../../../media/images/generate.svg";
import { useNavigate } from "react-router-dom";
import validateForm from "../../../tools/validateForm";
import generateRandomNumber from "../../../tools/generateRandomNumber";

const AddBankAccountSection = () => {
  const [bank, setBank] = useState("");
  const [iban, setIban] = useState("");
  const [startingBalance, setStartingBalance] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [tooltipText, setTooltipText] = useState("Generate");

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
      tooltipText: tooltipText,
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

  function getBankCode() {
    switch (bank) {
      case "ing":
        return "ingb";
      case "abn amro":
        return "abna";
      case "rabobank":
        return "rabo";
      default:
        return "ingb";
    }
  }

  function generateIban() {
    if (bank === "select") {
      setTooltipText("Select a bank first");
      setTimeout(() => setTooltipText("Generate"), 1500);
    } else {
      const checkDigits = `${generateRandomNumber()}${generateRandomNumber()}`;
      let bankAccount = "";
      for (let i = 0; i <= 10; i++) {
        bankAccount = bankAccount + generateRandomNumber();
      }
      const generatedIban = `NL${checkDigits}${getBankCode().toUpperCase()}${bankAccount}`;
      setIban(generatedIban);
    }
  }

  function onSkip() {
    navigate("/stocks");
  }

  return (
    <SectionWrapper>
      <SectionHeader>Add your first bank account</SectionHeader>
      <Form
        isDisabled={isDisabled}
        submitForm={submitForm}
        isLoading={isLoading}
        formElements={formElements}
        onSkip={onSkip}
      />
    </SectionWrapper>
  );
};

export default AddBankAccountSection;
