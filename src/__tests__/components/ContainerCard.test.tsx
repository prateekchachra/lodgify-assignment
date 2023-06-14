import React from "react";
import { ContainerCard } from "../../components/ContainerCard";
import { render } from "@testing-library/react";

describe("ContainerCard", () => {
    it("should render children correctly", () => {
        const {getByText} = render(<ContainerCard><h1>Test</h1></ContainerCard>);
        expect(getByText('Test')).toBeInTheDocument();
    })
});
