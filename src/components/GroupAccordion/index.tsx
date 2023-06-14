import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { Group, TaskCheckedFunction } from "../../utils/types";
import { GroupHeading } from "../GroupHeading";
import { TaskCheckbox } from "../TaskCheckbox";
import { RowBox } from "../RowBox";

type GroupAccordionProps = {
  group: Group;
  groupIndex: number;
  expandedIndex: number;
  onTaskChecked: TaskCheckedFunction;
  handleAccordionChange: (groupIndex: number, expanded: boolean) => void;
};

const expandIcon = (expanded: boolean) =>
  expanded ? (
    <RowBox>
      <Typography>Hide </Typography>
      <ExpandLessIcon />
    </RowBox>
  ) : (
    <RowBox>
      <Typography>Show </Typography>
      <ExpandMoreIcon />
    </RowBox>
  );

export const GroupAccordion = ({
  group,
  groupIndex,
  expandedIndex,
  handleAccordionChange,
  onTaskChecked,
}: GroupAccordionProps) => {
  const { tasks } = group;
  const expanded = expandedIndex === groupIndex;
  const handleChange = (event: React.SyntheticEvent, expanded: boolean) =>
    handleAccordionChange(groupIndex, expanded);

  return (
    <Accordion
      disableGutters
      expanded={expandedIndex === groupIndex}
      sx={{ paddingX: "8px", paddingY: "12px", borderWidth: 1 }}
      onChange={handleChange}
    >
      <AccordionSummary
        expandIcon={expandIcon(expanded)}
        sx={{
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(0deg)",
          },
          borderWidth: 1,
        }}
      >
        <GroupHeading group={group} />
      </AccordionSummary>
      <AccordionDetails sx={{ marginLeft: "4px", marginTop: "12px" }}>
        {tasks.map((task, index) => (
          <TaskCheckbox
            key={`task-${index}`}
            groupIndex={groupIndex}
            onTaskChecked={onTaskChecked}
            task={task}
            index={index}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
