import api from "../../services/api";

export const scriptMediaService = {

  getByQuestionId: async (questionId) => {
    const response = await api.get(`/script-media/question/${questionId}`);
    return response.data;
  },

  createMedia: async (questionId, formData) => {
    const response = await api.post(`/script-media/question/${questionId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteMedia: async (id) => {
    const response = await api.delete(`/script-media/${id}`);
    return response.data;
  },
};