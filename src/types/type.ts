import rootReducer from "../Redux/Store";

export interface TObject {
  id: object;
  edit: boolean;
  text: string;
}

export const iniValue = {
  id: {},
  edit: false,
  text: "",
};

export type IRootState = ReturnType<typeof rootReducer>;
