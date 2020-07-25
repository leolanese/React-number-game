// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import NumberList from "../src/NumberList";

describe("Validate App", function () {

  test("Smoke test to Renders App", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  test("NumberList Component", () => {
    const { container } = render(<App />);
    expect(container.contains(<NumberList />)).toBe(false)
  });

  test("App exist and have the Components", () => {
    const { queryByTestId } = render(
        <section
            className="GameApp">
          <NumberList />
        </section>
    );
    expect(queryByTestId(/className/i)).toBeTruthy();
  });

});
