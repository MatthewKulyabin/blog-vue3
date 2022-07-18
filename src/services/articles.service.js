import httpService from './http.service';

const articlesEndPoint = 'articles/';

const ArticlesService = {
  get: async () => {
    const { data } = await httpService.get(articlesEndPoint);
    return data;
  },
  delete: async (id) => {
    const { data } = await httpService.delete(articlesEndPoint + id);
    console.log(data);
    return data;
  },
  post: async (payload) => {
    const { data } = await httpService.post(articlesEndPoint, payload);
    return data;
  },
  put: async (id, payload) => {
    console.log(id, payload);
    const { data } = await httpService.put(articlesEndPoint + id, payload);
    return data;
  },
};

export default ArticlesService;
