import { useState } from "react";
import LabelledInput from "../../constructs/labelled-input/labelled-input";
import Form from "../../primitives/form";
import SectionWrapper from "../../primitives/section-wrapper";
import { NameContainer, H1 } from "./personal-details-section-styles";

const PersonalDetailsSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
        />
      </Form>
    </SectionWrapper>
  );
};

export default PersonalDetailsSection;
