import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/title.jsx'
import Modal from "./components/Modal.jsx"

function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button>Add todo</button>
      </div>
      <div className='todo__wrapper'>

      
        <Todo title="Finish Frontend Simplified"/>
        <Todo title="Finish Interview Section"/>
        <Todo title="Get rich"/>
      </div>
      <Modal
      title="Are you sure?"/>
    </div>
  );
}

export default App;