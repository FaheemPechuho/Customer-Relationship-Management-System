import axios from "axios";

const REST_API_BASE = 'http://localhost:8090/api/users';

export const listUser = ()=> axios.get(REST_API_BASE);

// export const createUser = (user)=> axios.post(REST_API_BASE, user);
export const createUser = async (user) => {
      const response = await axios.post(REST_API_BASE, user);
      return response.data;
  };

export const getUser = (userId) => axios.get(REST_API_BASE+'/' + userId)

export const updateUser = (userId, user) => axios.put(REST_API_BASE + '/' + userId, user);

export const deleteUser = (userId) => axios.delete(REST_API_BASE + '/' + userId);