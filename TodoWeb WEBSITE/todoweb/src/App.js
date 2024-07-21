import { useCallback, useMemo, useState } from 'react';
import './App.css';
import useFetch from './components/useFetch';
import Todos from './components/Todos';
function App() {
  let [todoItem, setTodoItem] = useState([]);

  let [uname, setUname] = useState('');
  let [upassword, setUpassword] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();
  }
  //fetch api using custom hook
  const [data] = useFetch("https://dummyjson.com/quotes")

  // console.log(data.quotes);
  
  // ///////////////////////////
  // usememo hook

  let [count,setCount] = useState(0);
  const [todos,setTodos] = useState([]);
  const Increment = () =>{
    setCount((c)=> c+1)
  }
  const addTodo = useCallback( (num) => {
    setTodos((t) => [...t,`New Todo ${num}`]);
  },[todos])
  let [ name,setName] = useState('')
  const expensiveCal = (num) =>{
    for(let i=0; i< 100000000000; i++)
    return num;
  }
  const calculation = useMemo(()=>
  expensiveCal(count)
  ,[count]
  ) 


  let saveTodoList = (event) => {
    event.preventDefault();
    let todoName = event.target.todoName.value;
    if (!todoItem.includes(todoName)) {
      let finalTodoList = [...todoItem, todoName];
      setTodoItem(finalTodoList);
    }
    else {
      alert("Todo Item Already Exists in the the TodoList!")
    }
  }

  let list = todoItem.map((value, index) => {

    return (
      <TodoListItems value={value} key={index} indexnum={index} todoItem={todoItem} setTodoItem={setTodoItem}></TodoListItems>
    );

  })
  return (
    <>

      <div className="App bg-[yellowgreen]  border-[3px] border-[black]">
        <h1 className='text-[28px] text-center font-bold underline'>Todo List</h1>
        <br />
        <br />
        <br />
        <form onSubmit={saveTodoList}>
          <input placeholder='Enter Todo here!' name='todoName' className='ml-[20px] text-[whitesmoke] font-bold bg-[green]' type="text" />
          <button className='text-[whitesmoke] h-[100px] font-bold bg-[black]'>Save</button>
        </form>
        <div className='DisplayTodolist p-[10px] relative '>
          <ul className=''>
            {list}
          </ul>
        </div>
      </div>
      <hr />
      <br />
      <hr />
      <div className='container'>
        <div className="font-serif font-bold">
          <div className='w-[100vw]' >
            <form className="flex flex-col w-[60vw] m-[auto]" onSubmit={handleSubmit}>
              <div className='text-start '>
                <label>User Name</label>
                <input type="text" className='rounded-[10px] bg-black' onChange={(event) => setUname(event.target.value)} value={uname} />
              </div>
              <div className='text-start '>
                <label>Password</label>
                <input type="text" className='' onChange={(event) => setUpassword(event.target.value)} value={upassword} />
              </div>
              <div className="text-start ">
                <button className=' bg-[black] text-[bisque]'>Login</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <hr />
      <br />
      <hr />
      <br />
      {/* Usecallback hook */}
      <h2 className='bg-[yellowgreen] underline text-center h-[60px] font-serif font-bold text-[23px]'>Usecallback hook</h2>
      <div>
        Count: {count}
        <button onClick={Increment}>+</button>
      </div>
      <hr />
      <Todos todos={todos} addTodo={addTodo}></Todos>


      {/* ///////////////////// */}
      {/* usememo hook */}
      <div>
        <h2 className='bg-[yellowgreen] underline text-center h-[60px] font-serif font-bold text-[23px] '>usememo hook</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <h1>Count: {count}</h1>
        <input type="text" onChange={(e)=> setName(e.target.value)} />
        <h1>Name: {name}</h1>
      </div>
      <br />
      <hr />
      {/* custom hook */}
      <div>
        <h1 className='bg-[yellowgreen] underline text-center h-[60px] font-serif font-bold text-[23px] '>Custom Hook</h1>
        {/* {data.quotes.map((e, i) => {
          return (
            <div  key={i}  className='border-[4px] w-[70vw] p-[7px] border-[purple]'>
              <p  className='font-mono'>{e.quote}</p>
              <h2 className='font-bold font-serif text-[purple]'>{e.author}</h2>
            </div>

          )

        })} */}

      </div>

    </>
  );
}


export default App;


function TodoListItems({ value, indexnum, todoItem, setTodoItem }) {
  let deleteRow = () => {
    let finalData = todoItem.filter((value, index) => index != indexnum)
    setTodoItem(finalData);
  }
  let [status, setStatus] = useState(false);
  let checkStatus = () => {
    setStatus(!status)
  }
  return (

    <li className={`text-[whitesmoke] h-[30px] font-bold ${(status) ? 'completetodo' : ''}`} onClick={checkStatus} >{indexnum + 1} {value} <span onClick={deleteRow} className='absolute right-[10px] border-[3px] p-[4px] text-[18px] border-[yellowgreen]'>&times;</span></li>
  );
}
