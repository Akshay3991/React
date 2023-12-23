import { useState } from "react";
import Addtodo from "./components/addtodo";
import Appname from "./components/Appname";
import TodoItems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {//functional components
  
  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, duedate: itemDueDate },];
    settodoItems(newTodoItems);
  }
  const handleDeleteItem = (todoItemName) =>{
      const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    settodoItems(newTodoItems);

  }
  return <center className="todo-container">

    <Appname></Appname>
    <Addtodo onNewItem={handleNewItem} ></Addtodo>
    {
      todoItems.length ===0 && <WelcomeMessage ></WelcomeMessage>
    }
    <TodoItems todoitems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>


  </center>




}


export default App;