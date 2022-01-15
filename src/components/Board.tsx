import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ToDo, toDoState } from "../atoms";
import DraggableCard from "./DraggableCard";

interface AreaProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
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

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface FormProps {
  toDo: string;
}

interface Props {
  toDos: ToDo[];
  boardId: string;
}

function Board({ toDos, boardId }: Props) {
  const setToDoState = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormProps>();

  const onValid = ({ toDo }: FormProps) => {
    setToDoState((prev) => ({
      ...prev,
      [boardId]: [{ id: Date.now(), text: toDo }, ...prev[boardId]],
    }));
    setValue("toDo", "");
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, { isDraggingOver, draggingFromThisWith }) => (
          <Area
            isDraggingOver={isDraggingOver}
            draggingFromThisWith={Boolean(draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo.id} index={index} toDo={toDo} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
