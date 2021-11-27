import LabelledInput from "../components/constructs/labelled-input";
import LabelledSelect from "../components/constructs/labelled-select";

function getFormElement(type) {
  switch (type) {
    case "select":
      return LabelledSelect;
    default:
      return LabelledInput;
  }
}

export default getFormElement;
