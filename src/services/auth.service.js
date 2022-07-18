import httpService from './http.service';

const authEndPoint = 'users/';

const AuthService = {
  post: async (payload) => {
    const { data } = await httpService.post(authEndPoint, payload);
    return data;
  },
  get: async (payload) => {
    const { data } = await httpService.get(authEndPoint);
    return data;
  },
};

export default AuthService;
