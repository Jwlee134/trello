import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.cardColor};
`;

interface Props {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: Props) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(props) => (
        <Card
          ref={props.innerRef}
          {...props.dragHandleProps}
          {...props.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default memo(DraggableCard);
