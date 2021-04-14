import uuid from 'uuid';
export default function TodoReducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [...state,{task: action.newTask, id: uuid(), completed: false}]
    case 'REMOVE':
      return state.filter(item => item.id !== action.id)
    case 'EDIT':
      return state.map(item => item.id === action.id ? {...state, task: action.updatedItem}: item)
    default:
      return state
  }
}
