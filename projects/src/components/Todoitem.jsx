import { RiDeleteBin3Fill } from "react-icons/ri";
import { useContext } from "react";

import { TodoItemsConText } from "../store/todo-items-store";

function TodoItem({ todoname, tododate}) {
    const { DeleteItem } = useContext(TodoItemsConText);

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    {todoname}
                </div>
                <div className="col-4">
                    {tododate}
                </div>
                <div className="col-2"> <button className="btn btn-danger" onClick={() => DeleteItem(todoname)}><RiDeleteBin3Fill /></button>

                </div>
            </div>
        </div>
    );

}
export default TodoItem;