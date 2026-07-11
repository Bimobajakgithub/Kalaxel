import api from "../../services/api";

export const forumService = {

  getAll: async () => {
    const response = await api.get("/forum");
    return response.data;
  },

  getByUser: async (userId) => {
    const response = await api.get(`/forum/user/${userId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/forum/${id}`);
    return response.data;
  },

  createForum: async (forumData) => {
    const response = await api.post("/forum", forumData);
    return response.data;
  },

  updateForum: async (id, forumData) => {
    const response = await api.put(`/forum/${id}`, forumData);
    return response.data;
  },

  deleteForum: async (id) => {
    const response = await api.delete(`/forum/${id}`);
    return response.data;
  },
};