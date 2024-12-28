import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    } else if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }
    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 ? (
        <EmptyView />
      ) : (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {/* <Item item={} />
      <Item item={} />
      <Item item={} /> */}
      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
