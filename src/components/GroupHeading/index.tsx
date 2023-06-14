import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/AssignmentOutlined";
import { Group } from "../../utils/types";
import { useMemo } from "react";

type GroupHeadingProps = {
  group: Group;
};

export const GroupHeading = ({ group }: GroupHeadingProps) => {
  const { name, tasks } = group;
  const areAllChecked = useMemo(
    () => tasks.filter((task) => !task.checked).length === 0,
    [tasks]
  );
  return (
    <Typography
      color={areAllChecked ? "#0fbb9d" : "#171717"}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AssignmentIcon
        sx={{ stroke: "#ffffff", strokeWidth: 1, marginRight: "8px" }}
      />
      {name}
    </Typography>
  );
};
