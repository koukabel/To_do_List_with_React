import React from "react";

function Items({ itemsArr, setitemsArr, text }) {
  const removeItem = (index) => {
    const newElements = itemsArr.filter((_, i) => i !== index);
    setitemsArr(newElements);
  };

  return (
    <>
      <ul>
        {itemsArr.map((todo, index) => (
          <li key={index} value={text} onClick={() => removeItem(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Items;
