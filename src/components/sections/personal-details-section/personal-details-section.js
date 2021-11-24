import { useState, useEffect } from "react";
import LabelledInput from "../../constructs/labelled-input/labelled-input";
import Form from "../../primitives/form";
import SectionWrapper from "../../primitives/section-wrapper";
import {
  NameContainer,
  H1,
  ButtonGroup,
} from "./personal-details-section-styles";
import ButtonOutlined from "../../primitives/button-outlined";
import ButtonSolid from "../../primitives/button-solid";

const PersonalDetailsSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

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
    console.log("executing function");
    validateEmail();
    console.log("email is validated");
    if (!emailIsInvalid) {
      // Send data to backend
      console.log("email is valid");
    } else {
      console.log("email is not valid");
    }
  }

  return (
    <SectionWrapper>
      <H1>Enter your personal details</H1>
      <Form>
        <NameContainer>
          <LabelledInput
            label="First name"
            placeholder="Sherlock"
            required={true}
            value={firstName}
            onChange={setFirstName}
            disabled={false}
          />
          <LabelledInput
            label="Last name"
            placeholder="Holmes"
            required={true}
            value={lastName}
            onChange={setLastName}
            disabled={false}
          />
        </NameContainer>
        <LabelledInput
          label="Email"
          placeholder="s.holmes@britannica.co.uk"
          required={true}
          value={email}
          onChange={setEmail}
          disabled={false}
          type="email"
          error={emailIsInvalid}
        />
        <LabelledInput
          label="Date of birth"
          placeholder="dd/mm/yyyy"
          required={true}
          value={birthday}
          onChange={setBirthday}
          disabled={false}
          type="date"
        />
        <ButtonGroup>
          <ButtonOutlined color="venetianRed">Cancel</ButtonOutlined>
          <ButtonSolid
            onClick={() => submitForm()}
            disabled={isDisabled}
            type="submit"
            color="royalVessel"
          >
            Next
          </ButtonSolid>
        </ButtonGroup>
      </Form>
    </SectionWrapper>
  );
};

export default PersonalDetailsSection;
