import { TObject, iniValue } from "../../types/type";

export type TTask = {
  id: "";
  edit: false;
  text: "";
};
export type TAction = { type: string; payload: TObject };

const initialState = [iniValue];

// Use the initialState as a default value
export default function appReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case "task/addTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      return (state = [...cloneState, action.payload]);
    }
    case "task/deleteTask": {
      const cloneState = JSON.parse(JSON.stringify(state));

      return (state = cloneState.filter(
        (cs: TObject) => cs.id !== action.payload.id
      ));
    }

    case "task/updateTask": {
      const cloneState = JSON.parse(JSON.stringify(state));
      const cloneActionPayload = JSON.parse(JSON.stringify(action.payload));
      return cloneState.map((todo: TObject) =>
        todo.id === cloneActionPayload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    }

    default:
      return state;
  }
}
