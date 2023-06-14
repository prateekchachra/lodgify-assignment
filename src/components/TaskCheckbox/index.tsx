import React, { useEffect, useState } from "react";

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

export const TaskCheckbox = ({
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

  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => setIsChecked(checked), [task]);

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
        checked={isChecked}
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
