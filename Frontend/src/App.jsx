import { useEffect, useState } from 'react';
import Card from './components/Card';
import { getAllTasks, addTask } from './api/TaskApi';
import { useFormik } from 'formik';
import { basicSchema } from '../Schema';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const onSubmit = async (values, actions) => {
    actions.resetForm();
    const newTask = values.task;
    const task = await addTask({ taskName: newTask });
    setTodoList((prev) => [...prev, task]);
    toast('Task Added', { theme: 'dark' });
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
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
  const pendingTasks = [
    ...todoList.filter((task) => task.status === 'pending'),
  ];
  const completedTasks = [
    ...todoList.filter((task) => task.status === 'completed'),
  ];

  const completeStatus = (id, updatedTime) => {
    const taskIndex = todoList.findIndex((task) => task.id === id);
    setTodoList((prev) => {
      const updatedTaskList = prev.map((task, index) => {
        if (index === taskIndex) {
          return {
            ...task,
            status: 'completed',
            updatedAt: updatedTime,
          };
        }
        return task;
      });
      return updatedTaskList;
    });
    toast.success('Task completed', {
      theme: 'colored',
    });
  };

  const deletedTask = (id) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
    toast.error('Task deleted successfully', { theme: 'colored' });
  };

  return (
    <div className="lg:px-28 bg-[#181818] min-h-[100vh] h-[100%]  mx-auto p-5">
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
            className="text-[#181818] ml-2 px-5 h-10 b-0 rounded-sm  bg-[#ffffffaf]">
            Add
          </button>
        </div>
        <p className="text-red-600/70 mt-1 text-[13px]">{errors.task}</p>
      </form>
      <div className="ml-[2px] flex items-center gap-4 text-[#c7c7c7bf] mt-2">
        <span>All - {todoList.length} </span>
        <span className="border-l-2 pl-2 border-yellow-500 leading-none">
          Pending - {pendingTasks.length}
        </span>
        <span className="border-l-2 pl-2 border-emerald-500 leading-none">
          Completed - {completedTasks.length}
        </span>
      </div>
      <div className="text-[white] flex justify-start flex-wrap gap-5 mt-16 text-[20px] ">
        <Card
          todoList={todoList}
          deletedTask={deletedTask}
          completeStatus={completeStatus}
        />
        <ToastContainer
          style={{ fontSize: '16px', width: '300px' }}
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          transition:Bounce
        />
      </div>
    </div>
  );
};

export default App;
