import Addtodo from "./components/addtodo";
import Appname from "./components/Appname";
import TodoItems from "./components/Todoitems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";




function App() {//functional components




  return (
    <TodoItemsContextProvider>
      <center className="todo-container">

        <Appname></Appname>
        <Addtodo></Addtodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>


      </center>
    </TodoItemsContextProvider>
  );
}


export default App;