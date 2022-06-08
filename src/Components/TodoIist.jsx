import React from "react";
import "./Todoinput.css";
import { FaTrash } from "react-icons/fa";


const Todolist = ({ todos, deleteTodo }) => {
  // const [state, setstate] = useState()
  // const isComplete = () => {
  //   isComplete=true;
  // }
    
  return (
    <div>
      {todos.map((el) => {
        //console.log(el)
        return (
       
            <div className="items-list" key={el.id} >
             
              <h3>{el.value}</h3>
              <button className="complete-btn" onClick={()=>(deleteTodo(el.id))}>
                <FaTrash className="trash-icon" title="Delete Todo" />
              
              </button>
            </div>
         
        );
      })}
    </div>
  );
};

export default Todolist;
