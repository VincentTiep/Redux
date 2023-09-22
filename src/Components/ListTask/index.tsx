import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskAction,
  modifyTaskAction,
} from "../../Redux/Action/listTask";
import { IRootState, TObject } from "../../types/type";

const ListTask = () => {
  const listTaskRedux = useSelector((store: IRootState) => store.listTask);
  const dispatch = useDispatch();

  return (
    <>
      <div className="border">
        <h2>Todo Task</h2>
        <ul>
          {listTaskRedux.map((task: TObject, index: number) => (
            <li key={index}>
              <p>{task.text}</p>
              <Button
                className="m-2"
                onClick={() =>
                  dispatch(modifyTaskAction({ ...task, edit: true }))
                }
              >
                Sửa
              </Button>
              <Button
                className="m-2"
                onClick={() => dispatch(deleteTaskAction(task))}
              >
                Xóa
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListTask;
