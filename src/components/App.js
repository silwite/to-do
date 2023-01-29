import React,{useState} from "react";


function App() {
  const [items,setItems]=useState([""]);
  const [text,setText]=useState("");
 
  function handleChange(event){
    const val= event.target.value;
 setText(val);
  }
  function addItems(){
    setItems(prev=>{return [...prev,text];})
    setText("") ;
  }
  function handlchange(event){
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  }
  function clear(){
    setItems([]);
  }
 
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={text}/>
        <button onClick={addItems}>
          Add
        </button>
        <button onClick={clear}>
          clear
        </button>
      </div>
      <div>
      <ul>
          {items.map((todoItem) => (
            <li onClick={handlchange}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;