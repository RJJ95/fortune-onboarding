import { useState } from "react";
import SectiontWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import ExpandableForm from "../../constructs/expandable-form";

const AddStocksSection = () => {
  const [stocks, setStocks] = useState([
    {
      market: "",
      stock: "",
      amount: "",
    },
  ]);
  const formElements = [
    {
      label: "Select a market",
      placeholder: "Select",
      required: true,
      value: "",
      onChange: "",
      disabled: "",
      type: "select",
      options: [
        {
          name: "Select",
          value: "select",
        },
        {
          name: "AEX",
          value: "aex",
        },
      ],
    },
    {
      label: "Select a stock",
      placeholder: "Select",
      required: true,
      value: "",
      onChange: "",
      disabled: "",
      type: "select",
      options: [
        {
          name: "Select",
          value: "select",
        },
        {
          name: "Googl",
          value: "googl",
        },
      ],
    },
    {
      label: "How many do you have",
      placeholder: "100",
      required: true,
      value: "",
      onChange: "",
      disabled: "",
      type: "number",
    },
  ];
  return (
    <SectiontWrapper>
      <SectionHeader>Add some stocks</SectionHeader>
      {stocks.map((stock, i) => (
        <ExpandableForm
          key={i}
          expanded={false}
          formElements={formElements}
          data={stock}
        />
      ))}
    </SectiontWrapper>
  );
};

export default AddStocksSection;
