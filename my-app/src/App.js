import './styles.css';
import { useReducer } from 'react';

const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

const reducer = (state, { type, payload })=> {

}

const App = () => {
  const [{currentOperator, previousOperator, operation}, dispatch] = useReducer(reducer, {});

  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 }})
  return (
    <div className="calculator">
      <div className="print">
        <div className="previousOperator">{previousOperator} {operation} </div>
        <div className="currentOperator"> {currentOperator} </div>
      </div>


      {/* All of the buttons*/}

      <button className="span-two"> CE </button> {/* This is just the clear everything button */}
      <button> C </button> {/* This is the clear button */} 
      <button> ÷ </button> {/* Divide symbol  ÷  */}
      <button> 7 </button> 
      <button> 8 </button>
      <button> 9 </button>
      <button> × </button>  {/* Multiplication symbol ×*/}
      <button> 4 </button>
      <button> 5 </button> 
      <button> 6 </button> 
      <button> - </button>
      <button> 1 </button>
      <button> 2 </button>
      <button> 3 </button>
      <button> + </button>
      {/*<button> +/- </button>*/}
      <button> 0 </button>
      <button> . </button>
      <button className="span-two"> = </button>
    </div>
  );
}

export default App;
