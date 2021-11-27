function validateForm(fieldsToValidate, setIsDisabled) {
  fieldsToValidate.every((field) => field !== "")
    ? setIsDisabled(false)
    : setIsDisabled(true);
}

export default validateForm;
