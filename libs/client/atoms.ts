import { atom, selector } from "recoil";

export const isDarkState = atom<boolean>({
  key: "isDarkState",
  default: false,
});

type ToDoCategory = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: ToDoCategory;
  createdAt: number;
  updatedAt: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === "TO_DO");
  },
});

export const doingSelector = selector({
  key: "doingSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === "DOING");
  },
});

export const doneSelector = selector({
  key: "doneSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return toDos.filter((toDo) => toDo.category === "DONE");
  },
});
