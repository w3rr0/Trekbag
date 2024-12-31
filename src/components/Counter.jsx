export default function Counter({ itemsLength, packetItemsLength }) {
  return (
    <p>
      <b>{packetItemsLength}</b> / {itemsLength} items packed
    </p>
  );
}
