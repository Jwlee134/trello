import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.boardColor};
`;

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e"];

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(props) => (
              <Board ref={props.innerRef} {...props.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable draggableId={toDo} index={index}>
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
                ))}
                {props.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
