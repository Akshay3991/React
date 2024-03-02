import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsConText = createContext({
    todoItems: [],
    addNewItem: () => { },
    DeleteItem: () => { },
});
const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === 'NEW_ITEM') {
        newTodoItems = [
            ...currTodoItems,
            { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
        ]
    }
    else if (action.type === 'DELETE_ITEM') {
        newTodoItems = currTodoItems.filter(item => item.name !== action.payload.itemName);

    }
    return newTodoItems;
}

const TodoItemsContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type: 'NEW_ITEM',
            payload: {
                itemName,
                itemDueDate,
            },
        }
        dispatchTodoItems(newItemAction);
    };

    const DeleteItem = (todoItemName) => {

        const deleteItemAction = {
            type: 'DELETE_ITEM',
            payload: {
                itemName: todoItemName,
            },
        }
        dispatchTodoItems(deleteItemAction);
    }
    return (
        <TodoItemsConText.Provider value={{
            todoItems: todoItems,
            addNewItem: addNewItem,
            DeleteItem: DeleteItem,
        }}>
            {children}
        </TodoItemsConText.Provider>
    );
}
export default TodoItemsContextProvider;