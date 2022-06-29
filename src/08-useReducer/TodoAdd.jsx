import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {


          const {onInputChange,description,onResetForm} = useForm({
            description: ''
          })
const OnSubmit = (e) => {
  e.preventDefault()
  if(description.lenght <= 1) return;
    const NewNotes = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }
    onNewTodo(NewNotes)
    onResetForm();
  }
  return (
    <>
      <form onSubmit={OnSubmit}>
    <input type="text" placeholder="¿Qué hay que hacer?" name='description' className="form-control" value={description} onChange={onInputChange}/>
    <button type="submit" className="btn btn-outline-primary mt-3">
            Agregar
           </button>
            </form>
    </>
  )
}
