import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.boardColor};
`;

interface Props {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: Props) {
  return (
    <Droppable droppableId={boardId}>
      {(props) => (
        <Wrapper ref={props.innerRef} {...props.droppableProps}>
          {toDos.map((toDo, index) => (
            <DraggableCard key={toDo} toDo={toDo} index={index} />
          ))}
          {props.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
