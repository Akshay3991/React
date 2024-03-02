import {  useContext, useRef } from "react";
import { IoBagAdd } from "react-icons/io5";
import { TodoItemsConText } from "../store/todo-items-store";

function Addtodo() {
    const {addNewItem} = useContext(TodoItemsConText)

    const TodoNameElement = useRef();
    const DueDateElement = useRef();

    const handleAddButtonclick = (event) => {
        event.preventDefault();
        const todoName = TodoNameElement.current.value;
        const dueDate = DueDateElement.current.value;
        TodoNameElement.current.value = "";
        DueDateElement.current.value = "";
        addNewItem(todoName, dueDate);


    };

    return (

        <div className="container text-center">
            <form className="row" onSubmit={handleAddButtonclick}>
                <div className="col-6">
                    <input ref={TodoNameElement} type="text" placeholder="Enter to do here" />
                </div>
                <div className="col-4">
                    <input ref={DueDateElement} type="date" />
                </div>
                <div className="col-2"> <button className="btn  btn-success" > <IoBagAdd /> </button>  </div>
            </form >
        </div >

    );

}
export default Addtodo;