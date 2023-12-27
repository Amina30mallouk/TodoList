import React, { useState } from "react"; 
import Create from "../create";

function Home(){

  const [todos,setTodos] = useState([])
    return (
        <div className='home'>
        <h1>Welcome to Todo App</h1>
        <Create />
        {
          todos.lenght === 0 
          ?
          <div><h2>No Record</h2></div> 
          :
          todos.map(todo => (
              <div>
              {todo}
              </div>
          )) 
        }
      </div>
    );
}

export default Home 