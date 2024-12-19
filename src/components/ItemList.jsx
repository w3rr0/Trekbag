import { useState } from "react";
import { initialItems } from "../lib/constants";

export default function ItemList() {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {/* <Item item={} />
      <Item item={} />
      <Item item={} /> */}
      {initialItems.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
