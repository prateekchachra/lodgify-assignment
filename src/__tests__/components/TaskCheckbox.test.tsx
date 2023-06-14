import React from "react";
import { TaskCheckbox } from "../../components/TaskCheckbox";
import { fireEvent, render, within } from "@testing-library/react";
import { Task } from "../../utils/types";

const MOCK_TASK: Task = {
    description: 'test1',
    value: 21,
    checked: true
};
const mockOnTaskChecked = jest.fn();

describe("TestCheckbox", () => {
    it("should render children correctly", () => {
        const { getByTestId } = render(<TaskCheckbox task={MOCK_TASK} index={0} groupIndex={0} onTaskChecked={mockOnTaskChecked} />);
        const checkbox =  within(getByTestId('checkboxtest')).getByRole('checkbox');
        expect(checkbox).toHaveProperty('checked', true);
        fireEvent.click(checkbox)
        expect(mockOnTaskChecked).toBeCalledTimes(1);
    })
});