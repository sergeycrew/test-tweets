import axios from 'axios';

axios.defaults.baseURL = 'https://644863feb88a78a8f0ebda62.mockapi.io/';

export const getUsers = async page => {
  try {
    const { data } = await axios.get(`/tweets?page=${page}&limit=3`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, userFollowers) => {
  try {
    const resp = await axios.put(`/tweets/${userId}`, {
      followers: userFollowers,
    });
    const data = resp.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
