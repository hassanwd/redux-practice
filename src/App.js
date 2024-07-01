import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {INC,DEC} from './Actions'

const App = () => {

  const count = useSelector(state => state.count)   
  const SignUp = useSelector(state => state.SignUp)

  console.log(count,SignUp);
  const dispatch = useDispatch()

  return (  
    <div>
      <button onClick={() => {dispatch(DEC())}}>DEC</button>
      Count: {count}
      <button onClick={() => {dispatch(INC())}}>INC</button>

      {SignUp && <p>SignUp Successfully Done</p>}
    </div>
  )
}

export default App