import TodoItem from "./Todoitem";

const TodoItems = ({ todoitems,onDeleteClick }) => {
    return <>
        <div className="items-container">
            {todoitems.map((item) => (
                <TodoItem key={item.name} tododate={item.duedate} todoname={item.name} onDeleteClick={onDeleteClick} ></TodoItem>
                
            ))}
        </div>
    </>
}
export default TodoItems;