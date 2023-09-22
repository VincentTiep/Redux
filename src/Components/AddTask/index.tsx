import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { addTaskAction, updateTaskAction } from "../../Redux/Action/listTask";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { IRootState, TObject, iniValue } from "../../types/type";

const AddTask = () => {
  const listTaskRedux = useSelector((store: IRootState) => store.taskTemporal);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<TObject>(iniValue);

  useEffect(() => {
    console.log("listTaskRedux", listTaskRedux);
    setIsEditing(listTaskRedux.edit);
    setCurrentTodo(listTaskRedux);
  }, [listTaskRedux]);

  return (
    <div className="bg-body-secondary m-2 p-2">
      {isEditing ? (
        <>
          <label htmlFor="inputAddress">Edit Tasks</label>
          <br />
          <input
            className="m-3"
            type="textarea"
            placeholder="Edit Todo..."
            value={currentTodo.text}
            style={{ height: "50px", width: "70%" }}
            onChange={(e) =>
              setCurrentTodo({ ...currentTodo, text: e.target.value })
            }
          />
          <Button
            onClick={() => {
              dispatch(
                updateTaskAction({
                  ...listTaskRedux,
                  text: currentTodo,
                  edit: false,
                })
              );
              setIsEditing(false);
            }}
          >
            Update
          </Button>
        </>
      ) : (
        <>
          <label htmlFor="inputAddress">Add Tasks</label>
          <br />
          <input
            className="m-3"
            type="textarea"
            placeholder="Add Todo..."
            value={todo}
            style={{ height: "50px", width: "70%" }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            onClick={() => {
              dispatch(
                addTaskAction({
                  id: new Date(),
                  text: todo.trim(),
                  edit: isEditing,
                })
              );
              setTodo("");
            }}
          >
            Add
          </Button>
        </>
      )}
    </div>
  );
};

export default AddTask;
