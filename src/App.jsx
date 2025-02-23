import './App.css'
import {useEffect, useState} from 'react'

const serverUrl = 'http://192.168.88.33:3000'

async function getToDo(setTodoList) {
  const response = await fetch(`${serverUrl}/todo`)
  const serverTodo = await response.json()
  setTodoList(serverTodo.todo)
}

async function postToDo(newTodo, setTodoList) {
  const response = await fetch(`${serverUrl}/todo`, {
    method: "POST",
    body: newTodo
  })
  const serverTodo = await response.json()
  setTodoList(serverTodo.todo)
}

async function deleteToDo(index, setTodoList) {
  const response = await fetch(`${serverUrl}/todo`, {
    method: "DELETE",
    body: index
  })
  const serverTodo = await response.json()
  setTodoList(serverTodo.todo)
}

let interval;

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    clearInterval(interval)
    interval = setInterval(() => getToDo(setTodoList), 2000)
    getToDo(setTodoList)    
  }, [])

  return (
    <div className="container">
      <header className="menu">
        <h1 className="menu__title">To do List</h1>
        <form 
          id="todo_form"
          className="menu__form"
          onSubmit={
            (event) => {
              event.preventDefault();
              if(newTodo === '') {
                setError('Per favore, inserisci un testo!');
              } else {
                postToDo(newTodo, setTodoList)
                setNewTodo('')
              }
            }
          }
        >
          <input 
            className="menu__input"
            id="todo_input"
            value={newTodo} 
            onChange={
              (event) => {
                setError('');
                setNewTodo(event.target.value)
              }
            }
          />
          <button className="menu__add-button" type="submit">Add</button>
          {
            error ? 
              <p className="menu__error">Per favore, inserisci un testo!</p> :
              null
          }
        </form>
      </header>
      <main className="todo">
        <ul id="todo_list" className="todo__list">
          {
            todoList.map((todo) => 
              <li key={todo.id} className='todo__item'>
                <span className='todo__text'>{todo.text}</span>
                <button 
                  className='todo__done-button'
                  onClick={
                    () => {
                      deleteToDo(todo.id, setTodoList)
                    }
                  }
                >
                  Done
                </button>
              </li>
            )
          }
        </ul>
      </main>
    </div>
  )
}

export default App
