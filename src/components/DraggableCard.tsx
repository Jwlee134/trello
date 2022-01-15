import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ToDo } from "../atoms";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${({ theme, isDragging }) =>
    isDragging ? "#74b9ff" : theme.cardColor};
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface Props {
  toDo: ToDo;
  index: number;
}

function DraggableCard({ toDo, index }: Props) {
  return (
    <Draggable key={toDo.id} draggableId={String(toDo.id)} index={index}>
      {(props, { isDragging }) => (
        <Card
          isDragging={isDragging}
          ref={props.innerRef}
          {...props.dragHandleProps}
          {...props.draggableProps}
        >
          {toDo.text}
        </Card>
      )}
    </Draggable>
  );
}

export default memo(DraggableCard);
