import { useState, useEffect } from "react";
import LabelledInput from "../../constructs/labelled-input/labelled-input";
import SectionWrapper from "../../primitives/section-wrapper";
import { NameContainer } from "./personal-details-section-styles";
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
    if (firstName && lastName && email && birthday) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
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

  return (
    <SectionWrapper>
      <SectionHeader>Enter your personal details</SectionHeader>
      <Form
        isDisabled={isDisabled}
        submitForm={submitForm}
        isLoading={isLoading}
      >
        <NameContainer>
          <LabelledInput
            label="First name"
            placeholder="Sherlock"
            required={true}
            value={firstName}
            onChange={setFirstName}
            disabled={isLoading}
          />
          <LabelledInput
            label="Last name"
            placeholder="Holmes"
            required={true}
            value={lastName}
            onChange={setLastName}
            disabled={isLoading}
          />
        </NameContainer>
        <LabelledInput
          label="Email"
          placeholder="s.holmes@britannica.co.uk"
          required={true}
          value={email}
          onChange={setEmail}
          disabled={isLoading}
          type="email"
          error={emailIsInvalid}
        />
        <LabelledInput
          label="Date of birth"
          placeholder="dd/mm/yyyy"
          required={true}
          value={birthday}
          onChange={setBirthday}
          disabled={isLoading}
          type="date"
        />
      </Form>
    </SectionWrapper>
  );
};

export default PersonalDetailsSection;
