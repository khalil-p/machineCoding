import { useState } from "react";

const checkBoxesData = [
  {
    id: "0",
    label: "Select All",
    children: [
      {
        id: "1",
        label: "Fruits",
        children: [
          {
            id: "1-1",
            label: "Citrus",
            children: [
              { id: "1-1-1", label: "Orange" },
              { id: "1-1-2", label: "Lemon" },
            ],
          },
          { id: "1-2", label: "Apple" },
          {
            id: "1-3",
            label: "Berries",
            children: [
              { id: "1-3-1", label: "Strawberry" },
              { id: "1-3-2", label: "Blueberry" },
            ],
          },
        ],
      },
      {
        id: "2",
        label: "Vegetables",
        children: [
          { id: "2-1", label: "Potato" },
          {
            id: "2-2",
            label: "Leafy Greens",
            children: [
              { id: "2-2-1", label: "Spinach" },
              { id: "2-2-2", label: "Kale" },
            ],
          },
        ],
      },
      { id: "3", label: "Grains" },
      { id: "4", label: "Dairy" },
    ],
  },
];

const CheckBoxes = ({ data, checked, setChecked }) => {
  const handleOnChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        if (node.children) {
          node.children.forEach((child) => {
            newState[child.id] = isChecked;
            child.children && updateChildren(child);
          });
        }
      };
      updateChildren(node);
      // if all my children are checked mark the parent as checked
      const verifyChecked = (node) => {
        if (!node.children) return newState[node.id];
        const allChildrenChecked = node.children.every((child) =>
          verifyChecked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      checkBoxesData.forEach((node) => verifyChecked(node));

      return newState;
    });
  };
  console.log({ checked });
  return (
    <div>
      {data?.map((node) => {
        return (
          <div key={node.id} className="parent">
            <div className="flex items-center font-semibold">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={checked[node.id] || false}
                onChange={(e) => handleOnChange(e.target.checked, node)}
              />
              <span className="ml-2">{node.label}</span>
            </div>
            {node.children && (
              <CheckBoxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

function NestedCkeckboxes() {
  const [checked, setChecked] = useState({});
  return (
    <>
      <h1 className="font-bold">Nested CheckBoxes</h1>
      <CheckBoxes
        checked={checked}
        setChecked={setChecked}
        data={checkBoxesData}
      />
    </>
  );
}

export default NestedCkeckboxes;
