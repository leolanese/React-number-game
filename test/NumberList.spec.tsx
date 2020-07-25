// @ts-nocheck
import React from "react";
import {findByText, fireEvent, getByText, render} from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom/extend-expect";
import NumberList from "../src/NumberList";
import ReactDOM from "react-dom";

describe("Validate App", function () {

    test("Smoke test to Renders NumberList", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NumberList />, div);
    });

    test("NumberList children Component", () => {
        const { container } = render(<App />);
        expect(container.contains(<Game />)).toBe(false)
    });

    test("selecting the 0 number box expectation 144 multiple", () => {
        const { container } = render(<NumberList />);

        const BoxNumberSelected = getByText(container,".box no-active");

        expect(BoxNumberSelected.textContent).toBe(undefined);
        fireEvent.click(findByText(0));

        const boxActivated = await findByText("active");
        expect(boxActivated).toHaveLength(144)
    });

    test("selecting a 2 number box expectation 72 multiple", () => {
        const { container } = render(<NumberList />);

        const BoxNumberSelected = getByText(container,".box no-active");

        expect(BoxNumberSelected.textContent).toBe(undefined);
        fireEvent.click(findByText(2));

        const boxActivated = await findByText("active");
        expect(boxActivated).toHaveLength(72)
    });

    test("selecting the 144 number box expectation 1 multiple", () => {
        const { container } = render(<NumberList />);

        const BoxNumberSelected = getByText(container,".box no-active");

        expect(BoxNumberSelected.textContent).toBe(undefined);
        fireEvent.click(findByText(144));

        const boxActivated = await findByText("active");
        expect(boxActivated).toHaveLength(1)
    });

});
