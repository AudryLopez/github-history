import { Dropdown } from "@nextui-org/react";

export default function Select() {
  return (
    <Dropdown>
      <Dropdown.Button flat>Branch</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="github-history">github-history</Dropdown.Item>
        <Dropdown.Item key="github-history-backend">github-history-backend</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
