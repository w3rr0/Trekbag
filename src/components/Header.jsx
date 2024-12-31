import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ itemsLength, packetItemsLength }) {
  return (
    <header>
      <Logo />
      <Counter
        itemsLength={itemsLength}
        packetItemsLength={packetItemsLength}
      />
    </header>
  );
}
