import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(props) => (
            <ul ref={props.innerRef} {...props.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(props) => (
                  <li
                    ref={props.innerRef}
                    {...props.dragHandleProps}
                    {...props.draggableProps}
                  >
                    One
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(props) => (
                  <li
                    ref={props.innerRef}
                    {...props.dragHandleProps}
                    {...props.draggableProps}
                  >
                    Two
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
