import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "@atlaskit/css-reset";

const Index: NextPage = () => {
  const [winReady, setwinReady] = useState<boolean>(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  const onDragEnd = () => {};
  return (
    <div>
      {winReady ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <Droppable droppableId="one">
              {(magic) => (
                <ul ref={magic.innerRef} {...magic.droppableProps}>
                  <Draggable draggableId="first" index={0}>
                    {(magic) => (
                      <li ref={magic.innerRef} {...magic.draggableProps}>
                        <span {...magic.dragHandleProps}>🔥</span>
                        One
                      </li>
                    )}
                  </Draggable>
                  <Draggable draggableId="second" index={1}>
                    {(magic) => (
                      <li ref={magic.innerRef} {...magic.draggableProps}>
                        <span {...magic.dragHandleProps}>🔥</span>
                        Second
                      </li>
                    )}
                  </Draggable>
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      ) : null}
    </div>
  );
};

export default Index;
