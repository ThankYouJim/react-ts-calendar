export type Task = {
  id: string,
  value: string,
  createdDateTime: Date,
};

export type TaskFrequencyEntry = {
  taskId: string,
  frequency: number,
};

export type Day = {
  date: Date,
  tasks: Set<string>,
};
