import React, {useState, useEffect} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import List from './List'
import {db} from '../firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'

const style = {
    bg: ``,
    container: `bg-slate-100 max-w-[500px] m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
    count: `text-center p-2`
}

const ToDo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

// Create todo
const createTodo = async (e) => {
  e.preventDefault(e)
  if(input === ''){
    alert('Please enter a Valid todo')
    return
  }
  await addDoc(collection(db, 'todos'), {
    text: input,
    completed: false,
  })
}
// Read todo from firebase
useEffect (() =>{
  const q = query(collection(db, 'todos'))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let todosArr = []
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
return () => unsubscribe()
}, [])
// Update todo
const toggleComplete = async (todo) => {
  await updateDoc(doc(db,'todos', todo.id), {
    completed: !todo.completed
  })
  setInput('')
}
// Delete todo
const deleteTodo = async (id) => {
  await deleteDoc(doc(db, 'todos', id))
}

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Sprint</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add Todo"></input>
          <button className={style.button}><AiOutlinePlus size={30}></AiOutlinePlus></button>
        </form>
        <ul>
          {todos.map((todos, index) => (
            <List 
            key={index} 
            todo={todos} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}/>
          ))}
        </ul>
        {todos.length < 1 ? null : <p className={style.count}>{`You have ${todos.length} Todos`}</p>}
      </div>
    </div>
  )
}

export default ToDo