import Head from "next/head";
import { useSetRecoilState } from "recoil";
import { isDarkState } from "../libs/client/atoms";

const ToDoHeader = () => {
  const setIsDark = useSetRecoilState(isDarkState);
  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <div className="w-full flex justify-between items-center py-5 px-10">
      <Head>
        <title>Trello</title>
      </Head>
      <div>Trello</div>
      <div className="cursor-pointer" onClick={toggleDark}>
        Toggle Dark
      </div>
    </div>
  );
};

export default ToDoHeader;
