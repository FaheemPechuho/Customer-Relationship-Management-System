import axios from "axios";

const REST_API_BASE = 'http://localhost:8090/api/tasks';

export const listTask = ()=> axios.get(REST_API_BASE);

export const createTask = async (task) => {
    const response = await axios.post(REST_API_BASE, task);
    return response.data;
};

export const getTask = (taskId) => axios.get(REST_API_BASE+'/' + taskId)

export const updateTask = (taskId, task) => axios.put(REST_API_BASE + '/' + taskId, task);

export const deleteTask = (taskId) => axios.delete(REST_API_BASE + '/' + taskId);