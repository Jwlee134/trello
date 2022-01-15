import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface AreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Area = styled.div<AreaProps>`
  background-color: ${({ isDraggingOver, draggingFromThisWith }) =>
    isDraggingOver
      ? "#dfe6e9"
      : draggingFromThisWith
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

interface Props {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: Props) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, { isDraggingOver, draggingFromThisWith }) => (
          <Area
            isDraggingOver={isDraggingOver}
            draggingFromThisWith={Boolean(draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} index={index} toDo={toDo} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
