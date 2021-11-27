import { FormWrapper, ButtonGroup } from "./form-style";
import ButtonOutlined from "../../primitives/button-outlined";
import ButtonSolid from "../../primitives/button-solid";
import Loader from "../loader";

const Form = ({ submitForm, isDisabled, children, isLoading }) => (
  <FormWrapper>
    {children}
    <ButtonGroup>
      <ButtonOutlined disabled={isLoading} color="venetianRed">
        Cancel
      </ButtonOutlined>
      <ButtonSolid
        onClick={() => submitForm()}
        disabled={isLoading || isDisabled}
        type="submit"
        color="royalVessel"
      >
        {isLoading ? <Loader /> : "Next"}
      </ButtonSolid>
    </ButtonGroup>
  </FormWrapper>
);

export default Form;
