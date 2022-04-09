import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../libs/client/atoms";

const ToDo: React.FC<IToDo> = ({ id, text, createdAt, category }) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    if ((name && name === "TO_DO") || name === "DOING" || name === "DONE") {
      setToDos((oldToDos) => {
        const newToDo: IToDo = {
          id,
          text,
          createdAt,
          category: name,
          updatedAt: Date.now(),
        };
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        return [
          ...oldToDos.slice(0, targetIndex),
          newToDo,
          ...oldToDos.slice(targetIndex + 1),
        ];
      });
    }
  };

  return (
    <li id={id + ""}>
      <div>{text}</div>
      <div>
        {category === "TO_DO" && (
          <div>
            <button name="DOING" onClick={onClick}>
              Doing
            </button>
            <button name="DONE" onClick={onClick}>
              Done
            </button>
          </div>
        )}
        {category === "DOING" && (
          <div>
            <button name="TO_DO" onClick={onClick}>
              To Do
            </button>
            <button name="DONE" onClick={onClick}>
              Done
            </button>
          </div>
        )}
        {category === "DONE" && (
          <div>
            <button name="TO_DO" onClick={onClick}>
              To Do
            </button>
            <button name="DOING" onClick={onClick}>
              Doing
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ToDo;
