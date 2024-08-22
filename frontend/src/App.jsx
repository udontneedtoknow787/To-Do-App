import { useEffect, useState } from 'react'
import { Todocard } from './components/todocard'
import axios from 'axios'

function App() {
  const [todos, setTodo] = useState([]);
  //  METHOD 1 FOR USEEFFECT
  async function Chagetodo() {
  try {
      const res = await axios.get("https://sum-server.100xdevs.com/todos");
      setTodo(res.data.todos);
    } catch (error) {
      console.log("server not responding!!!")
      alert("Server not Responding!!")
    }
  }
  
  // Chagetodo();
  // useEffect(()=>{Chagetodo();},[]);

  // METHOD 2 FOR USEEFFECT
  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/todos").then(
  //     function(res){
  //       setTodo(res.data.todos);
  //     }
  //   )
  // },[])

  return (<>
    <h1>To-Do List below: </h1>
    {
      todos.map(function(t){
        return <Todocard key={t.id} todo={t} />
      })
    }
    <br />
  <button onClick={Chagetodo} className='bg-red-700 hover:bg-red-400 active:bg-green-800 border-8 border-b-blue-900 border-r-blue-900'>Change todo list </button>
  {console.log(todos)}
  </>
  )
}

export default App
