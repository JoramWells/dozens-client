import React from "react";
import ReactDOM from "react-dom";
import MobileNavigationBar from "../MobileNavigationBar";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer"

afterEach(cleanup)
it("renders without crashing", () => {
  const nav = document.createElement("div");
  ReactDOM.render(<MobileNavigationBar />, nav);
});

it("renders Navbar correctly", () => {
  const { getByTestId } = render(<MobileNavigationBar home="jay" />);
  expect(getByTestId("mobile_nav")).toHaveTextContent("jay");
});
it("renders Navbar correctly", () => {
    const { getByTestId } = render(<MobileNavigationBar home="bram" />);
    expect(getByTestId("mobile_nav")).toHaveTextContent("bram");
  });

  it("matches snapshot",()=>{
      const tree = renderer.create(<MobileNavigationBar home="home" />).toJSON()
      expect(tree).toMatchSnapshot()
  })
