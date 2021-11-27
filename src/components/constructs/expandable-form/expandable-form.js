import Form from "../form";
import getFormElement from "../../../tools/getFormElement";

const ExpandableForm = ({ formElements }) => {
  return (
    <Form>
      {formElements.map((formElement, i) => {
        const FormElement = getFormElement(formElement.type);
        return (
          <FormElement
            key={i}
            label={formElement.label}
            placeholder={formElement.placeholder}
            required={formElement.required}
            value={formElement.value}
            onChange={formElement.onChange}
            disabled={formElement.disabled}
            type={formElement.type}
            options={formElement.options}
            tooltipText={formElement.tooltipText}
            Icon={formElement.Icon}
          />
        );
      })}
    </Form>
  );
};

export default ExpandableForm;
