import { useEffect, useState } from 'react'
import { Todocard } from './components/todocard'
import axios from 'axios'

function App() {
  const [todos, setTodo] = useState([]);
  //  METHOD 1 FOR USEEFFECT
  async function Chagetodo() {
  try {
      const res = await axios.get("http://localhost:3000/api/v1/todos/all");
      setTodo(res.data);
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
  // async function onComplete({todo}) {
  //   const todotitle =  todo.title;
  //   const status = todo.completed;
  //   try{
  //     const response = await axios.post("http://localhost:3000/api/v1/todos/update",
  //       {
  //         tittle: todotitle,
  //         completed: (status ? false : true)
  //       }
  //     );
  //     if(response.status==200){
  //       alert("todo updated succesfully");
  //       Chagetodo();
  //     }
  //     else alert("status not good")
  //   }
  //   catch(err){
  //     alert("post request failed. Update not completed")
  //   }
  // }

  return (<>
    <h1 className='font-bold text-xl lg:text-3xl'>To-Do List below: </h1>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-4'>
    {
      todos.map(function(t){
        return <Todocard key={t.id} todo={t} />
      })
    }
    </div>
    <br />
  <button onClick={Chagetodo} className='bg-red-700 hover:bg-red-400 active:bg-green-800 border-8 border-b-blue-900 border-r-blue-900'>Change todo list </button>
  {console.log(todos)}
  </>
  )
}

export default App
