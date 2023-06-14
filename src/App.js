import './App.css';
import {useState ,useEffect} from 'react'

function App() {
  const [toDos , setToDos] = useState([])
  const [toDo ,setToDo] = useState('')

  const rmvTodo=(index)=>{
    console.log(index);
    const newTodo = [...toDos]
      newTodo.splice(index,1)
      setToDos(newTodo)
  }
  
  return (
    <div className="App">
      <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input value={toDo} onChange={(e)=>{ setToDo(e.target.value)} } type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id : Date.now(),text : toDo , status : false}])} className="fas fa-plus"></i>
      </div>

      {toDos.map((obj,index)=>{
      return( 
      <div className="todos">
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
              setToDos(toDos.filter((obj2)=>{
                if(obj2.id === obj.id){
                  obj.status = e.target.checked
                  console.log(obj2);
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" index={index} />

          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i className="fas fa-times" onClick={()=>rmvTodo(index)}></i>
        </div>
      </div>
      </div> 
      )})}

    </div>
    <div>


    </div>
    </div>
  )
}

export default App;
