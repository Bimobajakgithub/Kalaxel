import api from "../../services/api";

export const tutorialService = {

  getAll: async () => {
    const response = await api.get("/tutorial");
    return response.data;
  },

  getByUser: async (userId) => {
    const response = await api.get(`/tutorial/user/${userId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/tutorial/${id}`);
    return response.data;
  },

  incrementView: async (id) => {
    const response = await api.post(`/tutorial/${id}/view`);
    return response.data;
  },

  createTutorial: async (tutorialData) => {
    const response = await api.post("/tutorial", tutorialData);
    return response.data;
  },

  updateTutorial: async (id, tutorialData) => {
    const response = await api.put(`/tutorial/${id}`, tutorialData);
    return response.data;
  },

  deleteTutorial: async (id) => {
    const response = await api.delete(`/tutorial/${id}`);
    return response.data;
  },
};