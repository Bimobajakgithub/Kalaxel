import api from "../../services/api";

export const tutorialMediaService = {

  getByTutorialId: async (tutorialId) => {
    const response = await api.get(`/tutorial-media/tutorial/${tutorialId}`);
    return response.data;
  },

  createMedia: async (tutorialId, formData) => {
    const response = await api.post(`/tutorial-media/tutorial/${tutorialId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteMedia: async (id) => {
    const response = await api.delete(`/tutorial-media/${id}`);
    return response.data;
  },
};