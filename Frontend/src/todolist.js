import { useState } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };

    if (task.taskName.trim(' ') === '') {
      alert('Enter a Task');
    } else {
      setTodoList([...todoList, task]);
      setNewTask('');
    }
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const handleComplete = (id) => {
    const updatedTodoList = todoList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          color: 'emerald',
        };
      }
      return task;
    });

    setTodoList(updatedTodoList);
  };

  return (
    <div className="max-w-[1400px] mx-auto p-5 h-[800px]">
      <div>
        <input
          placeholder="Add a Task..."
          className="bg-[#272727] focus:bg-black hover:bg-black/40   px-2 w-[300px] h-[40px] border-[#f3f3f3] rounded-sm text-[#e9e9e9] placeholder-[#686868]"
          onChange={handleChange}
          value={newTask}
        />
        <button
          className="text-[#070707] ml-2 px-5 h-10 b-0 rounded-sm bg-[#ffffffaf]"
          onClick={addTask}>
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
        {todoList.map((task) => {
          return (
            <div
              key={task.id}
              className={`bg-[#272727] border-l-2 border-${
                task.color || 'yellow'
              }-500 p-5 rounded-sm w-[400px] flex flex-col gap-9`}>
              <span className="text-[18px] text-[#c7c7c7bf]">
                Task#{task.id}
              </span>
              <span className={`text-2xl tracking-wider`}>{task.taskName}</span>
              <span className="flex justify-end gap-2">
                <button
                  onClick={() => handleComplete(task.id)}
                  className="bg-emerald-600/70 text-[14px]  w-[70px] p-[6px] rounded-md ">
                  Complete
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-600/70 text-[14px] w-[60px] p-[6px]  rounded-md">
                  Delete
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
