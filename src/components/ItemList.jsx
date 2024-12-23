export default function ItemList({ items }) {
  return (
    <ul>
      {/* <Item item={} />
      <Item item={} />
      <Item item={} /> */}
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
}
