import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [data, setData] = useState(TASKS)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} TASKS={TASKS} setData={setData} />
      <NewTaskForm data={data} setData={setData} categories={CATEGORIES} />
      <TaskList data={data} setData={setData} />
    </div>
  )
}

export default App;