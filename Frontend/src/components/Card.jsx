import React from 'react';
import { handleComplete, handleDelete } from '../api';
import { timeConversion } from '../utils/timeCovert';
import { Flip, Slide, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ todoList, completeStatus, deletedTask }) => {
  return (
    <>
      {todoList.map((task) => {
        const createdTime = timeConversion(task.createdAt);
        const updatedTime = timeConversion(task.updatedAt);

        return (
          <div
            key={task.id}
            className={`bg-[#242424] border-l-2 ${
              task.status === 'pending'
                ? 'border-yellow-500'
                : 'border-emerald-500'
            } px-3 py-3 rounded-md w-[300px] md:w-[300px] lg:[300px] shadow-md flex flex-col gap-3`}>
            <span className="text-[13px] text-[#c7c7c7bf]">Task#{task.id}</span>
            <span className={`text-2xl  tracking-wider font-bold`}>
              {task.taskName}
            </span>

            <span className="text-[12px] bg-[#181818] p-2 rounded-md">
              <p>
                <span className="font-medium">status:</span>{' '}
                <span
                  className={`${
                    task.status === 'pending'
                      ? 'text-yellow-500'
                      : 'text-emerald-500'
                  }`}>
                  {' '}
                  {task.status}
                </span>
              </p>
              <p>
                <span className="font-medium">created at :</span> {createdTime}
              </p>
              <p>
                {' '}
                <span className="font-medium">updated at :</span> {updatedTime}
              </p>
            </span>
            <span className="flex justify-end">
              <button
                onClick={async () => {
                  if (task.status === 'completed') {
                    toast.info('Task already completed', {
                      theme: 'colored',
                    });
                    return;
                  }
                  const status = await handleComplete(task.id);
                  const { message, updatedTask } = status;
                  if (message == 'Task updated successfully') {
                    completeStatus(task.id, updatedTask.updatedAt);
                  }
                }}
                className="bg-emerald-600/70 text-[12px] w-[60px] p-[4px] rounded-md ">
                Complete
              </button>
              <button
                onClick={async () => {
                  const delStatus = await handleDelete(task.id);
                  if (delStatus) {
                    deletedTask(task.id);
                  }
                }}
                className="bg-red-600/70 ml-1 text-[12px] w-[60px] p-[4px] rounded-md">
                Delete
              </button>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Card;
