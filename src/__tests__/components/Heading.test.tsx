import React from "react";
import { render } from "@testing-library/react";
import { Heading } from "../../components/Heading";

describe("Heading", () => {
    it("should render children correctly", () => {
        const {getByText} = render(<Heading>Test</Heading>);
        expect(getByText('Test')).toBeInTheDocument();
    })
});
