import { Col, Container, Navbar } from "react-bootstrap";
import ParamValues from "../interfaces/ParamValues";
import DropdownMenu from "./DropdownMenu";
import SplitDropdown from "./SplitDropdown";

interface HeaderProps {
  setUrlParams: (urlParams: ParamValues) => void;
  setTitle: (title: string) => void;
  title: string;
}
export default function Header(props: HeaderProps) {
  return (
    <header className={"bg-info"}>
      <Container>
        <Navbar>
          <Col>
            <DropdownMenu
              setUrlParams={props.setUrlParams}
              setTitle={props.setTitle}
            />
          </Col>
          <Col>
            <SplitDropdown
              setUrlParams={props.setUrlParams}
              setTitle={props.setTitle}
            />
          </Col>
          <Col>
            <Navbar.Brand>Cocktail App</Navbar.Brand>
          </Col>
          <Col>
            <h3>{props.title}</h3>
          </Col>
          <Col>
            <a href={"https://pdrake.me"}>Home Page</a>
          </Col>
        </Navbar>
      </Container>
    </header>
  );
}
