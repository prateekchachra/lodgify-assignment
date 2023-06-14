import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { ContainerCard } from "./components/ContainerCard";
import { LodgifyProgressBar } from "./components/LodgifyProgressBar";
import { Heading } from "./components/Heading";
import { Group, TaskCheckedFunction } from "./utils/types";
import { GroupAccordion } from "./components/GroupAccordion";
import { getGroups } from "./services/groups";
import { calculateProgress, calculateTotalProgress } from "./utils/functions";

function App() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = React.useState<number>(-1);

  const totalProgress = useRef(calculateTotalProgress(groups));

  useEffect(() => {
    let mounted = true;
    getGroups().then((groupList) => {
      if (mounted) {
        totalProgress.current = calculateTotalProgress(groupList);
        setGroups(groupList);
        setProgress(calculateProgress(groupList, totalProgress.current));
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const onTaskChecked: TaskCheckedFunction = (
    checked,
    taskIndex,
    groupIndex
  ) => {
    let tasksArr = [...groups[groupIndex].tasks];
    let updatedTask = { ...tasksArr[taskIndex], checked };
    let updatedTasks = [
      ...tasksArr.slice(0, taskIndex),
      updatedTask,
      ...tasksArr.slice(taskIndex + 1, tasksArr.length),
    ];
    let updatedGroup = { ...groups[groupIndex], tasks: updatedTasks };
    const updatedGroups: Group[] = [
      ...groups.slice(0, groupIndex),
      updatedGroup,
      ...groups.slice(groupIndex + 1, groups.length),
    ];
    setGroups([...updatedGroups]);
    setProgress(calculateProgress(updatedGroups, totalProgress.current));
  };

  const handleAccordionChange = (groupIndex: number, expanded: boolean) =>
    expanded ? setExpandedIndex(groupIndex) : setExpandedIndex(-1);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100wv",
        paddingY: "48px",
        backgroundColor: "#e2e2e2",
      }}
    >
      <ContainerCard
        style={{
          width: "80%",
          marginLeft: "10%",
          marginTop: "48px",
        }}
      >
        <Box sx={{ marginLeft: "16px" }}>
          <Heading
            style={{
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            Lodgify Grouped Tasks
          </Heading>
          <LodgifyProgressBar
            progress={progress}
            style={{ marginBottom: "24px" }}
          />
        </Box>
        {groups.map((group, index) => (
          <GroupAccordion
            group={group}
            key={`group-${index}`}
            handleAccordionChange={handleAccordionChange}
            groupIndex={index}
            expandedIndex={expandedIndex}
            onTaskChecked={onTaskChecked}
          />
        ))}
      </ContainerCard>
    </Box>
  );
}

export default App;
