import React, { useState } from "react";

function CategoryFilter({categories,TASKS,setData}) {
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleClick(e){
    const filter = e.target.innerText
    setSelectedCategory(filter)
    if (filter === 'All'){
      setData(TASKS)
      return
    }
    setData(TASKS.filter(task => task.category === filter))
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category=>{
        return <button 
          onClick={handleClick} 
          key={category} 
          className={selectedCategory === category ? 'selected' : null}
        >{category}</button>
      })
      }
    </div>
  );
}

export default CategoryFilter;