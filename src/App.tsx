import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 930px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    console.log(draggableId, destination, source);
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      setTodos((prev) => {
        const copy = [...prev[source.droppableId]];
        copy.splice(source.index, 1);
        copy.splice(destination.index, 0, draggableId);
        return { ...prev, [source.droppableId]: copy };
      });
    } else {
      setTodos((prev) => {
        const sourceBoardCopy = [...prev[source.droppableId]];
        const destinationBoardCopy = [...prev[destination.droppableId]];
        sourceBoardCopy.splice(source.index, 1);
        destinationBoardCopy.splice(destination.index, 0, draggableId);
        return {
          ...prev,
          [source.droppableId]: sourceBoardCopy,
          [destination.droppableId]: destinationBoardCopy,
        };
      });
    }
    /* setTodos((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[source.droppableId].splice(source.index, 1);
      copy[destination.droppableId].splice(destination.index, 0, draggableId);
      return copy;
    }); */
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
