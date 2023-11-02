import React from "react";
import Task from "./Task";

function TaskList({data,setData}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {data.map((task, index) => {
        return <Task key={index} task={task} data={data} setData={setData} />
      })}
    </div>
  );
}

export default TaskList;