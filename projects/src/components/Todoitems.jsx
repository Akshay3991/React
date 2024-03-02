import { TodoItemsConText } from "../store/todo-items-store";
import TodoItem from "./Todoitem";
import { useContext } from "react";


const TodoItems = () => {
    const {todoItems} = useContext(TodoItemsConText);
    return <>
        <div className="items-container">
            {todoItems.map((item) => (
                <TodoItem key={item.name} tododate={item.duedate} todoname={item.name}  ></TodoItem>
                
            ))}
        </div> 
    </>
}
export default TodoItems;