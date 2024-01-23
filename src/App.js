import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add_Data, back_Data } from './actions'
import "./style/App.css"
import { messages } from './data'

const App = () => {
const count = useSelector(store => store.count);
console.log(count);
const dispatch = useDispatch();
  return (
    <div className='steps'>
      <div className="numbers">
        <div className={count >= 1 ? "active" : "" }>1</div>
        <div className={count >= 2 ? "active" : "" }>2</div>
        <div className={count >= 3 ? "active" : "" }>3</div>
        <div className={count >= 4 ? "active" : "" }>4</div>
        <div className={count >= 5 ? "active" : "" }>5</div>
        <div className={count >= 6 ? "active" : "" }>6</div>
        <div className={count >= 7 ? "active" : "" }>7</div>
        <div className={count >= 8 ? "active" : "" }>8</div>
        <div className={count >= 9 ? "active" : "" }>9</div>
        <div className={count >= 10 ? "active" : ""}>10</div>
      </div>
      <p className="message">
      Step {count < 11 && count > 0 ? count : ""}: {messages[count-1]}
      </p>
      <div className='buttons'>
      <button className = "previousbtn" onClick={() => dispatch(back_Data())}>Previous</button>
      <button className = "nextbtn" onClick={() => dispatch(add_Data())}>Next</button>
      </div>
    </div>
  )
}

export default App