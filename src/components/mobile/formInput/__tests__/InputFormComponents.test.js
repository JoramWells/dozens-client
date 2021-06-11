import ReactDOM from "react-dom";
import InputFormComponent from "../InputFormComponent";
import { render, cleanup, screen } from "@testing-library/react";
import { MailIcon } from "@heroicons/react/solid";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});
test("input form component renders without crashing", () => {
  const form = document.createElement("form");
  ReactDOM.render(<InputFormComponent />, form);
});

test("inputformcomponent is in the dom", () => {
  const { getByTestId } = render(
    <form>
      <InputFormComponent />
    </form>
  );
  expect(getByTestId("input_form")).toBeInTheDocument();
});

test("inputformcomponetn should handle props correctly", () => {
  const handleChange = () => {
    console.log("Changed");
  };
  const props = {
    placeholder: "john doe",
    Icon: MailIcon,
    type: "text",
    value: "Joram Bramuel",
    onChange: handleChange,
  };

  render(
    <InputFormComponent
      placeholder={props.placeholder}
      Icon={props.Icon}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
  const formElement = screen.getByTestId("input_form");
  expect(formElement).toBeInTheDocument();
});

test("inputformcomponent matches snapshot", () => {
  const handleChange = () => {
    console.log("Changed");
  };
  const props = {
    placeholder: "john doe",
    Icon: MailIcon,
    type: "text",
    value: "Joram Bramuel",
    onChange: handleChange,
  };
  const tree = renderer
    .create(
      <InputFormComponent
        placeholder={props.placeholder}
        Icon={props.Icon}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
