import { useContext } from "react";
import { TodoItemsConText } from "../store/todo-items-store";
const WelcomeMessage = () => {
    const contextObj = useContext(TodoItemsConText);
    const todoItems = contextObj.todoItems;
    return todoItems.length === 0 && <p>Enjoy your day</p>
}
export default WelcomeMessage;