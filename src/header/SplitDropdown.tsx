import { Button, Dropdown, Form, FormControl } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import { useRef, useState } from "react";

interface SplitDropdownProps {
  setUrlParams: (urlParams: {
    urlType: string;
    searchParam: string | undefined;
  }) => void;
  setTitle: (title: string) => void;
}
export default function SplitDropdown(props: SplitDropdownProps) {
  const [searchTitle, setSearchTitle] = useState<string>("Search by Name");
  let searchParam = useRef<HTMLInputElement | null>(null);
  return (
    <Form>
      <Dropdown>
        <Button
          variant={"success"}
          onClick={() => {
            props.setTitle(searchTitle);
            props.setUrlParams({
              urlType: searchTitle.toLowerCase(),
              searchParam: searchParam.current?.value,
            });
          }}
        >
          {searchTitle}
        </Button>
        <DropdownToggle split variant={"success"} id={"dropdown-split-basic"} />
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSearchTitle("Search by Name")}>
            Search by Name
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setSearchTitle("Search by First Letter")}
          >
            Search by First Letter
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSearchTitle("Search by Ingredient")}>
            Search by Ingredient
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <FormControl type={"text"} ref={searchParam} />
    </Form>
  );
}
