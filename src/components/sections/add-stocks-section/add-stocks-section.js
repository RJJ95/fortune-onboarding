import { useState } from "react";
import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import ExpandableForm from "../../constructs/expandable-form";

const AddStocksSection = () => {
  const [expandedForm, setExpandedForm] = useState("form1");

  const [stocks, setStocks] = useState({
    form1: {
      market: "AEX",
      stock: "ADYEN",
      amount: "143",
    },
  });

  const formElements = [
    {
      label: "Select a market",
      placeholder: "Select",
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
      value: "",
      onChange: "",
      disabled: "",
      type: "number",
    },
  ];

  function onAdd(formId) {
    const newForm = `form${Object.keys(stocks).length + 1}`;
    setExpandedForm(newForm);
    setStocks((prevStocks) => ({
      ...prevStocks,
      [newForm]: {
        market: "",
        stock: "",
        amount: "",
      },
    }));
  }

  return (
    <SectionWrapper>
      <SectionHeader>Add some stocks</SectionHeader>
      {Object.entries(stocks).map((stock, i) => {
        return (
          <ExpandableForm
            key={i}
            formElements={formElements}
            data={stock[1]}
            formId={stock[0]}
            onAdd={onAdd}
            expanded={expandedForm === stock[0]}
          />
        );
      })}
    </SectionWrapper>
  );
};

export default AddStocksSection;
