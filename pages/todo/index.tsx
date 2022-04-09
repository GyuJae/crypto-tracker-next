import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import ToDo from "../../components/ToDo";
import ToDoForm from "../../components/ToDoForm";
import ToDoHeader from "../../components/ToDoHeader";
import {
  doingSelector,
  doneSelector,
  isDarkState,
  toDoSelector,
} from "../../libs/client/atoms";

const Index: NextPage = () => {
  const isDark = useRecoilValue(isDarkState);
  const toDos = useRecoilValue(toDoSelector);
  const doings = useRecoilValue(doingSelector);
  const dones = useRecoilValue(doneSelector);
  return (
    <div
      className={
        isDark ? "bg-rose-900 text-rose-200" : "bg-gray-100 text-black"
      }
    >
      <ToDoHeader />
      <div className="flex flex-col items-center py-10 h-[100vh]">
        <ToDoForm />
        <div className="flex space-x-4">
          <ul className="py-10">
            {toDos.map((toDo) => (
              <ToDo key={toDo.id} {...toDo} />
            ))}
          </ul>
          <ul className="py-10">
            {doings.map((toDo) => (
              <ToDo key={toDo.id} {...toDo} />
            ))}
          </ul>
          <ul className="py-10">
            {dones.map((toDo) => (
              <ToDo key={toDo.id} {...toDo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
