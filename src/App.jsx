import Button from './components/Button';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Card from './components/Card';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState([]);

  const onTitleChange = e => {
    setData({ ...data, title: e.target.value });
    console.log(data);
  };

  const onDescChange = e => {
    setData({ ...data, desc: e.target.value });
    console.log(data);
  };

  const onclick = () => {
    if (data.title != '' && data.desc != '') {
      setTodo([...todo, data]);
      console.log(todo);
      setData({ title: '', desc: '' });
    }
  };

  const deleteTodo = index => {
    const todoCopy = [...todo];
    todoCopy.splice(index, 1);
    setTodo(todoCopy);
    console.log(`Deleted To Do at ${index + 1} `);
  };

  return (
    <>
      <div className="container">
        <div className="to_do">
          <div className="to_do_main">
            <h1>TO-DO </h1>
            <div className="to_do_head">
              <div className="todo-head-panel">
                <Input onchange={onTitleChange} value={data.title} />
                <TextArea onchange={onDescChange} value={data.desc} />
              </div>
              <Button onclick={onclick}>ADD </Button>
            </div>
          </div>
          <div className="todos">
            {/* <Card/> */}

            {todo.map((item, index) => {
              return (
                <div className="todo_card">
                  <h3> {item.title}</h3>
                  <p>{item.desc}</p>
                  <i
                    class="fa-solid fa-trash"
                    onClick={() => {
                      deleteTodo(index);
                    }}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
