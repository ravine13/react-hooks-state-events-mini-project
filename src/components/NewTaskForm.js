import React, { useState } from "react";

function NewTaskForm({ categories, data, setData }) {
  const [category, setCategory] = useState('All')
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  function handleSelect(e){
    setCategory(e.target.value)
  }
  function handleInput(e){
    setText(e.target.value)
  }
  function onTaskFormSubmit(e){
    e.preventDefault()
    if (text.length === 0 || category.length === 0 ){
      setError('Please enter all task details')
      return
    }
    setData([...data, {text,category}])
    setCategory('')
    setText('')
    setError('')
  }

  return (
    <>
      {error.length > 0 ? <p style={{ color: 'red' }}>{error}</p> : null}
      <form onSubmit={onTaskFormSubmit} className="new-task-form">
        <label>
          Details
          <input type="text" name="text" onChange={handleInput} value={text}/>
        </label>
        <label>
          Category
          <select onChange={handleSelect} name="category" value={category}>
            {/* render <option> elements for each category here */}
            {categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            })}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    </>
  )
}

export default NewTaskForm;