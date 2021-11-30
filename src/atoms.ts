import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b", "c"],
    Doing: ["d"],
    Done: ["e"],
  },
});
