import { useEffect, useState } from 'react';
import Card from './components/Card';
import { getAllTasks, addTask } from './api/TaskApi';
import { useFormik } from 'formik';
import { basicSchema } from '../Schema';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const onSubmit = async (values, actions) => {
    actions.resetForm();
    const newTask = values.task;
    const task = await addTask({ taskName: newTask });
    setTodoList((prev) => [...prev, task]);
  };
  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: {
      task: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  useEffect(() => {
    getAllTasks().then((tasks) => {
      setTodoList(tasks);
    });
  }, []);

  const completeStatus = (id) => {
    const taskIndex = todoList.findIndex((task) => task.id === id);
    setTodoList((prev) => {
      const updatedTaskList = prev.map((task, index) => {
        if (index === taskIndex) {
          return { ...task, status: 'completed' };
        }
        return task;
      });
      return updatedTaskList;
    });
  };

  const deletedTask = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="lg:px-28 bg-[#212121] min-h-[100vh] h-[100%]  mx-auto p-5">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            name="task"
            placeholder="Add a Task..."
            className="bg-[#272727] focus:bg-black hover:bg-black/40 px-2 w-[300px] h-[40px] border-[#f3f3f3] rounded-sm text-[#e9e9e9] placeholder-[#686868]"
            onChange={handleChange}
            value={values.task}
          />
          <button
            type="submit"
            className="text-[#070707] ml-2 px-5 h-10 b-0 rounded-sm  bg-[#ffffffaf]">
            Add
          </button>
        </div>
        <p className="text-red-600">{errors.task}</p>
      </form>
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
          todoList={todoList}
          deletedTask={deletedTask}
          completeStatus={completeStatus}
        />
      </div>
    </div>
  );
};

export default App;
