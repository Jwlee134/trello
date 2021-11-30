import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    toDo: ["a", "b", "c"],
    doing: ["d"],
    done: ["e"],
  },
});
