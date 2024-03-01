import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'




// function App() {

//   let [name, setName] = useState("");
//   let intialState= [];
//   const [posts, dispatch] = useReducer(reducer, intialState)

//   const reducer=(post, action)=>{

//   }

//   const handleSubmit=()=>{
//     dispatch({type:"add_post", payload:name})
//   }

//   console.log(name)

//   return (
//     <><form action="" onSubmit={handleSubmit}>
//       <input type = "text" onChange={(e)=>setName(e.target.value)}/>
//     </form>
//     </>
//   )
// }

// export default App


function App() {
  return (
    <div className="App">
        <TaskList />
    </div>
  )
}

export default App