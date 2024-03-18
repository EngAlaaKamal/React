import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import ButtonComponent from '../reusableComponents/Button'
import './todo.css'

 const ToDo=()=> {
    const [todoslist, setTodoslist]=useState([])
    const [newtodo, setNewtodo]=useState('')

    const handleAddTodo=()=>{
        if(newtodo!==''){
            setTodoslist([ ...todoslist, {id:todoslist.length, title:newtodo}])
            setNewtodo('')
        }
    }

    const handleDeleteTodo=(id)=>{
        const newtodolist=todoslist.filter((todo)=>{
            return todo.id!==id
        })
        setTodoslist(newtodolist)
    }


    const [selectedTodos, setSelectedTodos] = useState([]);

    const handleOptionChange = (id) => {
        if (selectedTodos.includes(id)) {
          setSelectedTodos(selectedTodos.filter((selectedId) => selectedId !== id));
        } else {
          setSelectedTodos([...selectedTodos, id]);
        }
      };

  return (
    <div>
      <input
        type='text'
        class='form-control d-inline-block w-25 mt-5'
        value={newtodo}
        onChange={(e)=>setNewtodo(e.target.value)}
        placeholder='enter new todo'
      />
      <ButtonComponent onClick={handleAddTodo} variant='info'>Add Todo</ButtonComponent>
      <hr/>
      <ul>
      {todoslist.map((todo,index)=>(
          <li key={todo.id}>
          <div class='d-flex justify-content-evenly'> 
          
          <h4 style={{ textDecoration: selectedTodos.includes(todo.id) ? 'line-through' : 'none' }}>
          <Form className='d-inline-block m-1'>
          <Form.Check
            type="checkbox"
            id='item'
            value=''
            onChange={()=>handleOptionChange(todo.id)}
          />
          </Form>
          {todo.title} 
          </h4> 

          <ButtonComponent onClick={()=>handleDeleteTodo(todo.id)} variant='danger'>Delete</ButtonComponent>
          </div>
          </li>
      ))}
      </ul>
      
    </div>
  )
}


export default ToDo