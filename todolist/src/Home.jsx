import React, { useState,useEffect } from "react"; 
import Create from "./create";
import axios from "axios"; 
import { BsCircleFill, BsFillTrashFill , BsFillCheckCircleFill } from "react-icons/bs"; 

function Home(){

  const [todos,setTodos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);
  
  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/'+id)
    .then(result => location.reload())
    .catch(err => console.log(err));
    } 
    
    
    const handleDelete = (id) => {
      axios.delete('http://localhost:3001/delete/'+id)
      .then(result => location.reload())
      .catch(err => console.log(err));
      }


 

    return (
        <div className='home'>
          <div className="Title">
            <h1>To Do List</h1>
          </div>
        
        <Create />
        <br/>

        {
            todos.length === 0
            ?
            <div><h2>No Record</h2></div> 
            :
        
            todos.map(todo => (
              <div className="task">
                 <div className="checkbox" onClick={ () => handleEdit(todo._id)}>
                  {todo.done ?  <BsFillCheckCircleFill className='icone'></BsFillCheckCircleFill> : <BsCircleFill className='icone' />
                  }

                          <p className={todo.done ? "line_through" : ""}> {todo.task} </p> 
                  </div>

                    <div onClick={() => handleDelete(todo._id)}>
                      <span><BsFillTrashFill className="icone"/></span>
                    </div>   
                 
              </div>
            
          )) 
        }
      </div>
    );
}

export default Home 
