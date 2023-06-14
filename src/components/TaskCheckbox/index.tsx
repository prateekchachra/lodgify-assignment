import React from "react";

import { Task, TaskCheckedFunction } from "../../utils/types";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

type TaskCheckboxProps = {
  task: Task;
  index: number;
  groupIndex: number;
  onTaskChecked: TaskCheckedFunction;
};

const TaskCheckboxWithoutMemoize = ({
  task,
  index,
  groupIndex,
  onTaskChecked,
}: TaskCheckboxProps) => {
  const handleChange = (event: React.SyntheticEvent, checked: boolean) => {
    event.stopPropagation();
    onTaskChecked(checked, index, groupIndex);
  };

  const { description, checked } = task;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Checkbox
        data-testid="checkboxtest"
        checked={checked}
        sx={{
          color: "#cdcdcd",
          "&.Mui-checked": {
            color: "#00b797",
          },
        }}
        onChange={handleChange}
      />
      <Typography
        sx={{ fontSize: "16px", marginLeft: "8px", fontWeight: "500" }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export const TaskCheckbox = React.memo(
  TaskCheckboxWithoutMemoize,
  (prevProps, nextProps) => nextProps.task.checked === prevProps.task.checked
);
