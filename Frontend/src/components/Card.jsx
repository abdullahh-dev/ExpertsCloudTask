import React from 'react';
import { handleComplete, handleDelete } from '../api/TaskApi';
const Card = ({ todoList, completeStatus, deletedTask }) => {
  return (
    <>
      {todoList.map((task) => {
        const createdTime = new Date(task.createdAt).toLocaleString('en-PK', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Karachi',
        });
        const updatedTime = new Date(task.updatedAt).toLocaleString('en-PK', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Asia/Karachi',
        });

        return (
          <div
            key={task.id}
            className={`bg-[#272727] border-l-2 ${
              task.status === 'pending'
                ? 'border-yellow-500'
                : 'border-emerald-500'
            } p-5 rounded-sm w-[300px] shadow-md hover:shadow-2xl flex flex-col gap-4`}>
            <span className="text-[18px] text-[#c7c7c7bf]">Task#{task.id}</span>
            <span className={`text-2xl tracking-wider`}>{task.taskName}</span>

            <span className="text-[13px]">
              <p>
                <span className="font-medium">status:</span>{' '}
                <span
                  className={`${
                    task.status === 'pending'
                      ? 'text-yellow-500'
                      : 'text-emerald-500'
                  }`}>
                  {' '}
                  {task.status}{' '}
                </span>
              </p>
              <p>
                <span className="font-medium">created at :</span> {createdTime}
              </p>
              <p>
                {' '}
                <span className="font-medium">created at :</span> {updatedTime}
              </p>
            </span>
            <span className="flex justify-end gap-2">
              <button
                onClick={async () => {
                  const status = await handleComplete(task.id);
                  if (status) {
                    completeStatus(task.id);
                  }
                }}
                className="bg-emerald-600/70 text-[14px] w-[70px] p-[6px] rounded-md ">
                Complete
              </button>
              <button
                onClick={async () => {
                  const delStatus = await handleDelete(task.id);
                  if (delStatus) {
                    deletedTask(task.id);
                  }
                }}
                className="bg-red-600/70 text-[14px] w-[60px] p-[6px]  rounded-md">
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
