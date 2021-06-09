import React from "react";
import ReactDOM from "react-dom";
import MobileNavigationBar from "../MobileNavigationBar";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

afterEach(cleanup);
it("renders without crashing", () => {
  const nav = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MobileNavigationBar} />
      </Switch>
    </BrowserRouter>,
    nav
  );
});

it("renders Navbar correctly", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MobileNavigationBar} />
      </Switch>
    </BrowserRouter>
  );
  expect(getByTestId("mobile_nav")).toBeInTheDocument();
});
// it("renders Navbar correctly", () => {
//     const { getByTestId } = render(<MobileNavigationBar />);
//     expect(getByTestId("mobile_nav")).toHaveTextContent("bram");
//   });

// it("matches snapshot",()=>{
//     const tree = renderer.create(<MobileNavigationBar />).toJSON()
//     expect(tree).toMatchSnapshot()
// })
