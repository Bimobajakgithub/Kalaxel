import api from "../../services/api";

export const conceptArtService = {

  getAll: async () => {
    const response = await api.get("/concept-arts");
    return response.data;
  },

  getByCategory: async (category) => {
    const response = await api.get(`/concept-arts/category/${category}`);
    return response.data;
  },

  getByUser: async (userId) => {
    const response = await api.get(`/concept-arts/user/${userId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/concept-arts/${id}`);
    return response.data;
  },

  incrementView: async (id) => {
    const response = await api.post(`/concept-arts/${id}/view`);
    return response.data;
  },

  createArt: async (artData) => {
    const response = await api.post("/concept-arts", artData);
    return response.data;
  },

  updateArt: async (id, artData) => {
    const response = await api.put(`/concept-arts/${id}`, artData);
    return response.data;
  },

  deleteArt: async (id) => {
    const response = await api.delete(`/concept-arts/${id}`);
    return response.data;
  },
};