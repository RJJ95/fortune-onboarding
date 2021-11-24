const LabelledSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={onChange}>
    {options.map((option, i) => (
      <option key={i} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
);

export default LabelledSelect;
