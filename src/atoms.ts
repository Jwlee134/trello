import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: ToDo[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    "To Do": [
      { id: 1, text: "asdf" },
      { id: 2, text: "asdfasdf" },
      { id: 3, text: "asdfasdf" },
    ],
    Doing: [],
    Done: [],
  },
});
