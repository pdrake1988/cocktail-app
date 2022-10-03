import ParamValues from "../interfaces/ParamValues";
import { Dropdown } from "react-bootstrap";

interface DropdownMenuProps {
  setUrlParams: (urlParams: ParamValues) => void;
  setTitle: (title: string) => void;
}
export default function DropdownMenu(props: DropdownMenuProps) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter Cocktails
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            props.setUrlParams({
              urlType: "popular",
              searchParam: null,
            });
            props.setTitle("Popular Cocktails");
          }}
        >
          Popular Cocktails
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            props.setUrlParams({ urlType: "latest", searchParam: null });
            props.setTitle("Latest Cocktails");
          }}
        >
          Latest Cocktails
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            props.setUrlParams({ urlType: "random", searchParam: null });
            props.setTitle("Random Cocktails");
          }}
        >
          Random Cocktails
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
