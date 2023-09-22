import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/title.jsx";
import Modal from "./components/Modal.jsx";
import React, {
  useState, useEffect
} from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    console.log("onTodoDelete");
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
    console.log("cancel Modal");
  }
  function confirmlModal() {
    setShowModal(false);
    console.log("confirm Modal");
  }

  useEffect(() => {
  console.log('on mount')
  }, [])  
  
  useEffect(() => {
  console.log(`on mount and on ${showModal} change`)
}, [])  

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Get rich" />
      </div>
      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmlModal}
          title="Are you sure?"
        />
      )}
    </div>
  );
}

export default App;
