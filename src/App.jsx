import './App.css'
import {useState} from 'react'


function App() {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="container">
      <header className="menu">
        <h1 className="menu__title">To do List</h1>
        <form id="todo_form" className="menu__form" onSubmit={(event) =>{
          event.preventDefault();
          if(newTodo === '') {
            setError('Per favore, inserisci un testo!');
          } else {
            setTodoList([...todoList, newTodo])
            setNewTodo('')
          }
        }}>
          <input className="menu__input" id="todo_input" value={newTodo} onChange={(event)=>{
            setError('');
            setNewTodo(event.target.value)
          }}/>
          <button className="menu__add-button" type="submit">Add</button>
          {
            error ? 
              <p className="menu__error">Per favore, inserisci un testo!</p> :
              null
          }
        </form>
      </header>
      <main className="todo">
        <ul id="todo_list" className="todo__list">{
          todoList.map((text, i) => <li key={i} className='todo__item'>
            <span className='todo__text'>{text}</span>
            <button className='todo__done-button' onClick={() => {
              setTodoList(todoList.filter((_, z) => z !== i))
            }}>Done</button>
          </li>)
        }</ul>
      </main>
    </div>
  )
}

export default App
