import React from "react";

function Task({task, data, setData}) {
  function deleteTask(text){
    setData(data.filter(item => item.text !== text))
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={() => deleteTask(task.text)} className="delete">X</button>
    </div>
  )
}

export default Task;