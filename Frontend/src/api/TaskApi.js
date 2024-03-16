import axios from 'axios';
import { handleApiCall } from '../utils/helpers';
const BASEURL = import.meta.env.VITE_BASE_URL;

export const addTask = async (taskData) => {
  const res = await handleApiCall(() =>
    axios.post(`${BASEURL}/api/createTask`, taskData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );
  return res.data;
};

export const getAllTasks = async () => {
  const res = await handleApiCall(() =>
    axios.get(`${BASEURL}/api/getAllTasks`)
  );

  return res.data;
};

export const handleComplete = async (id) => {
  const taskId = id;
  const res = await handleApiCall(() =>
    axios.patch(`${BASEURL}/api/updateTask/${taskId}`)
  );
  return res.message;
};
