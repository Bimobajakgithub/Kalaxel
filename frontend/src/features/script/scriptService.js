import api from "../../services/api";

export const scriptService = {

  getAll: async () => {
    const response = await api.get("/script");
    return response.data;
  },

  getByUser: async (userId) => {
    const response = await api.get(`/script/user/${userId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/script/${id}`);
    return response.data;
  },

  incrementView: async (id) => {
    const response = await api.post(`/script/${id}/view`);
    return response.data;
  },

  createScript: async (scriptData) => {
    const response = await api.post("/script", scriptData);
    return response.data;
  },

  updateScript: async (id, scriptData) => {
    const response = await api.put(`/script/${id}`, scriptData);
    return response.data;
  },

  deleteScript: async (id) => {
    const response = await api.delete(`/script/${id}`);
    return response.data;
  },
};