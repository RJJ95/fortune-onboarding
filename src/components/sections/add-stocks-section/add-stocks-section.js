import { useState } from "react";
import SectionWrapper from "../../primitives/section-wrapper";
import SectionHeader from "../../primitives/section-header";
import ExpandableForm from "../../constructs/expandable-form";

const AddStocksSection = () => {
  const [expandedForm, setExpandedForm] = useState("form1");

  const [stocks, setStocks] = useState({
    form1: {
      market: "",
      stock: "",
      amount: "",
    },
  });

  const formElements = [
    {
      label: "Select a market",
      dataType: "market",
      placeholder: "Select",
      value: "",
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
      dataType: "stock",
      placeholder: "Select",
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
      dataType: "amount",
      placeholder: "100",
      disabled: "",
      type: "number",
    },
  ];

  function onAdd() {
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
            setStocks={setStocks}
            stocks={stocks}
          />
        );
      })}
    </SectionWrapper>
  );
};

export default AddStocksSection;
