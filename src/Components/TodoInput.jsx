import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import "./Todoinput.css";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
   
    setValue(e.target.value);
  };
  

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <div className="input-div">
            <input
              type="text"
              value={value}
              placeholder="Write Something"
              onChange={handleChange}
            />
          </div>
          <button className="plus" disabled={!value} onClick={(e)=>{
             console.log(value);
            addTodo(value);
            setValue("");
          }}>
            <VscAdd title="addTodo" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoInput;
