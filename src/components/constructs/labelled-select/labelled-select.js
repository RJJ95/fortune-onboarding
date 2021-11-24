import { Wrapper, SelectIcon, SelectContainer } from "./labelled-select-style";

const LabelledSelect = ({ value, onChange, options, label, name }) => (
  <Wrapper>
    <label htmlFor={name}>{label}</label>
    <SelectContainer>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <SelectIcon />
    </SelectContainer>
  </Wrapper>
);

export default LabelledSelect;
