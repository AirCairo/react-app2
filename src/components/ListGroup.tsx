//import { MouseEvent } from "react";

import { useState } from "react";

// {items: [], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //let selectedIndex = 0;
  // Hook
  //const arr = useState(-1);
  //arr[0]; // variable (selecteedIndex)
  //arr[1]; // updater function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return;
  };

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found3</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            } //"list-group-item"
            key={item}
            //onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
