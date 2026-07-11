import api from "../../services/api";

export const devLogService = {

  getAll: async () => {
    const response = await api.get("/devlog");
    return response.data;
  },

  getByCategory: async (category) => {
    const response = await api.get(`/devlog/category/${category}`);
    return response.data;
  },

  getByUserPublic: async (userId) => {
    const response = await api.get(`/devlog/user/${userId}/public`);
    return response.data;
  },

  getByUser: async (userId) => {
    const response = await api.get(`/devlog/user/${userId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/devlog/${id}`);
    return response.data;
  },

  incrementView: async (id) => {
    const response = await api.post(`/devlog/${id}/view`);
    return response.data;
  },

  createDevLog: async (formData) => {
    const response = await api.post("/devlog", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  updateDevLog: async (id, formData) => {
    const response = await api.put(`/devlog/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteDevLog: async (id) => {
    const response = await api.delete(`/devlog/${id}`);
    return response.data;
  },
};