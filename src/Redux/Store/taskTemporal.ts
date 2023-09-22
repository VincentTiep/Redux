import { TAction } from "./listTask";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: any = [];

export default function appReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case "task/modifyTask": {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
}
