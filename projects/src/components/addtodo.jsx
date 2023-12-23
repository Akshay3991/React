import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";

function Addtodo({ onNewItem }) {

    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleNamechange = (event) => {
        setTodoName(event.target.value);

    };
    const handleDatechange = (event) => {
        setDueDate(event.target.value);
    };
    const handleAddButtonclick = (event) => {
        event.preventDefault();
        onNewItem(todoName, dueDate);
        setDueDate("");
        setTodoName("");

    };

    return (

        <div className="container text-center">
            <form className="row" onSubmit={handleAddButtonclick}>
                <div className="col-6">
                    <input type="text" value={todoName} placeholder="Enter to do here" onChange={handleNamechange} />
                </div>
                <div className="col-4">
                    <input type="date" value={dueDate} onChange={handleDatechange} />
                </div>
                <div className="col-2"> <button className="btn  btn-success" > <IoBagAdd /> </button>  </div>
            </form >
        </div >

    );

}
export default Addtodo;