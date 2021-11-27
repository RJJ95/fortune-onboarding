import { useState, useEffect } from "react";
import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import Form from "../../constructs/form";
import { useNavigate } from "react-router-dom";

const PersonalDetailsSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    validateForm();
  });

  function validateForm() {
    firstName && lastName && email && birthday
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }

  function validateEmail() {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!regex.test(email)) {
      setEmailIsInvalid(true);
    } else {
      setEmailIsInvalid(false);
    }
  }

  function submitForm() {
    setIsLoading(true);
    setIsDisabled(true);
    setTimeout(() => {
      validateEmail();
      if (!emailIsInvalid) {
        // Send data to backend
        setIsLoading(false);
        navigate("/add-bank-account");
      }
    }, 5000);
  }

  const formElements = [
    {
      type: "name",
      formElements: [
        {
          label: "First name",
          placeholder: "Sherlock",
          disabled: isLoading,
          value: firstName,
          onChange: setFirstName,
        },
        {
          label: "Last name",
          placeholder: "Holmes",
          disabled: isLoading,
          value: lastName,
          onChange: setLastName,
        },
      ],
    },
    {
      type: "email",
      label: "Email",
      placeholder: "s.holmes@britannica.co.uk",
      value: email,
      onChange: setEmail,
      disabled: isLoading,
      error: emailIsInvalid,
    },
    {
      type: "date",
      label: "Date of birth",
      placeholder: "dd/mm/yyyy",
      value: birthday,
      onChange: setBirthday,
      disabled: isLoading,
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader>Enter your personal details</SectionHeader>
      <Form
        isDisabled={isDisabled}
        submitForm={submitForm}
        isLoading={isLoading}
        formElements={formElements}
      />
    </SectionWrapper>
  );
};

export default PersonalDetailsSection;
