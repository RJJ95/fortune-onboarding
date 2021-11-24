import { useState } from "react";
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
import { theme } from "../../../config/theme";

const PersonalDetailsSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState(0);

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
          <ButtonOutlined color={theme.colors.red}>Cancel</ButtonOutlined>
          <ButtonSolid color={theme.colors.royalVessel}>Next</ButtonSolid>
        </ButtonGroup>
      </Form>
    </SectionWrapper>
  );
};

export default PersonalDetailsSection;
