import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkState, toDoState } from "../libs/client/atoms";
import { cls } from "../libs/utils";

interface IToDoForm {
  toDo: string;
}

const ToDoForm = () => {
  const isDark = useRecoilValue(isDarkState);
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IToDoForm>();
  const onSubmit: SubmitHandler<IToDoForm> = ({ toDo }) => {
    setToDos((oldTodos) => [
      {
        id: oldTodos.length + 1,
        text: toDo,
        category: "TO_DO",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      ...oldTodos,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <form
        className="flex space-x-4 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          autoComplete="off"
          className={cls(
            "px-2 py-1 text-lg w-96 border-b-2 focus:outline-none rounded-sm",
            isDark ? "bg-rose-800 border-gray-100" : "bg-gray-100 border-black"
          )}
          {...register("toDo", { required: true })}
        />
        <button className="hover:animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
