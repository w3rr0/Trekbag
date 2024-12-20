import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {/* <Button type="secondary">Mark all as complete</Button>
      <Button type="secondary">Mark all as incomplete</Button>
      <Button type="secondary">Reset to initial</Button>
      <Button type="secondary">Remove all items</Button> */}
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}
