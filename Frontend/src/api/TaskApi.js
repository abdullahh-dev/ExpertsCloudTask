import axios from 'axios';
import { handleApiCall } from '../utils/helpers';
const BASEURL = 'https://expertscloudtask.onrender.com/api/tasks';
// import.meta.env.VITE_BASE_URL
export const addTask = async (taskData) => {
  const res = await handleApiCall(() =>
    axios.post(`${BASEURL}/createTask`, taskData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );
  return res.data;
};

export const getAllTasks = async () => {
  const res = await handleApiCall(() => axios.get(`${BASEURL}/getAllTasks`));
  return res.data;
};

export const handleComplete = async (id) => {
  const taskId = id;
  const res = await handleApiCall(() =>
    axios.patch(`${BASEURL}/updateTask/${taskId}`)
  );
  return res;
};

export const handleDelete = async (id) => {
  const taskId = id;
  const res = await handleApiCall(() =>
    axios.delete(`${BASEURL}/deleteTask/${taskId}`)
  );
  return res.message;
};
