import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

axios.interceptors.response.use((res) => {
  console.log(res);
  res.data = { content: res.data };
  return res;
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
