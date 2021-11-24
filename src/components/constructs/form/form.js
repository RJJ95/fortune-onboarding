import { FormWrapper, ButtonGroup } from "./form-style";
import ButtonOutlined from "../../primitives/button-outlined";
import ButtonSolid from "../../primitives/button-solid";

const Form = ({ submitForm, isDisabled, children }) => (
  <FormWrapper>
    {children}
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
  </FormWrapper>
);

export default Form;
