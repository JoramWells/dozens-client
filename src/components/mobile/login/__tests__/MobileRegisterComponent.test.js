import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobileRegisterComponent from "../MobileRegisterComponent";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MobileRegisterComponent} />
      </Switch>
    </BrowserRouter>,
    div
  );
});

it("renders register correctly", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MobileRegisterComponent} />
        </Switch>
      </BrowserRouter>
    );
    expect(getByTestId("register_div")).toBeInTheDocument();
  });
