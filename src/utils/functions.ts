import { Group } from "./types";

export const calculateProgress = (
  groups: Group[],
  totalProgress: number
): number => {
  if (groups.length === 0 || totalProgress === 0) return 1;
  let tasksForAllGroups = groups.map((item) => item.tasks);
  let netProgressOfAllGroups: number[] = [];
  netProgressOfAllGroups = tasksForAllGroups.map((tasksArr) =>
    tasksArr
      .filter((task) => task.checked)
      .reduce((prev, current) => prev + current.value, 0)
  );

  let netProgress = netProgressOfAllGroups.reduce(
    (prev, current) => current + prev
  );
  return Math.round((netProgress / totalProgress) * 100);
};
export const calculateTotalProgress = (groups: Group[]): number => {
  if (groups.length === 0) return 1;
  let tasksForAllGroups = groups.map((item) => item.tasks);
  let totalProgressOfAllGroups: number[] = [];

  totalProgressOfAllGroups = tasksForAllGroups.map((tasksArr) =>
    tasksArr.reduce((prev, current) => prev + current.value, 0)
  );
  let totalProgress = totalProgressOfAllGroups.reduce(
    (prev, current) => current + prev
  );
  return totalProgress;
};
