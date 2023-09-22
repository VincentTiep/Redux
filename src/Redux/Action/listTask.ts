import { TObject } from "../../types/type";

export const addTaskAction = (payload: TObject) => ({
  type: "task/addTask",
  payload: payload,
});
export const modifyTaskAction = (payload: TObject) => ({
  type: "task/modifyTask",
  payload: payload,
});

export const updateTaskAction = (payload: TObject) => ({
  type: "task/updateTask",
  payload: payload,
});

export const deleteTaskAction = (payload: TObject) => ({
  type: "task/deleteTask",
  payload: payload,
});
