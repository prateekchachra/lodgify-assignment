export type Task = {
  description: string;
  value: number;
  checked: boolean;
};

export type Group = {
  name: string;
  tasks: Task[];
};

export type TaskCheckedFunction = (
  checked: boolean,
  index: number,
  groupIndex: number
) => void;
