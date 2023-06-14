import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App Component", function () {
  it("should have the Lodgify grouped tasks heading", function () {
    let { getByText } = render(<App />);
    expect(getByText("Lodgify Grouped Tasks")).toBeInTheDocument();
  });
});
