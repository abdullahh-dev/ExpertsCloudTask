import { useEffect, useState } from 'react';
import Card from './components/Card';
import { getAllTasks, addTask } from './api/TaskApi';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    getAllTasks().then((todos) => {
      setTodoList(todos);
    });
  }, []);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const handleComplete = () => {};

  return (
    <div className="lg:px-28 bg-[#212121] min-h-[100vh] h-[100%]  mx-auto p-5">
      <div>
        <input
          placeholder="Add a Task..."
          className="bg-[#272727] focus:bg-black hover:bg-black/40 px-2 w-[300px] h-[40px] border-[#f3f3f3] rounded-sm text-[#e9e9e9] placeholder-[#686868]"
          onChange={handleChange}
          value={newTask}
        />
        <button
          className="text-[#070707] ml-2 px-5 h-10 b-0 rounded-sm  bg-[#ffffffaf]"
          onClick={async () => {
            const task = await addTask({ taskName: newTask });

            setTodoList((prev) => [...prev, task]);
            setNewTask('');
          }}>
          Add
        </button>
      </div>
      <div className="ml-[2px] text-[#c7c7c7bf] mt-5">
        <span className="border-l-2 px-2 border-yellow-500 leading-none">
          Pending
        </span>
        <span className="ml-5 border-l-2 px-2 border-emerald-500 leading-none">
          Completed
        </span>
      </div>
      <div className="text-[white] flex justify-start flex-wrap gap-5 mt-16 text-[20px] ">
        <Card
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          todoList={todoList}
        />
      </div>
    </div>
  );
};

export default App;
