import LabelledInput from "../components/constructs/labelled-input";
import LabelledSelect from "../components/constructs/labelled-select";
import LabelledNameInput from "../components/constructs/labelled-name-input";

function getFormElement(type) {
  switch (type) {
    case "select":
      return LabelledSelect;
    case "name":
      return LabelledNameInput;
    default:
      return LabelledInput;
  }
}

export default getFormElement;
