import api from "../../services/api";

export const devLogMediaService = {

  getByLogId: async (logId) => {
    const response = await api.get(`/devlog-media/log/${logId}`);
    return response.data;
  },

  createMedia: async (logId, formData) => {
    const response = await api.post(`/devlog-media/log/${logId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteMedia: async (id) => {
    const response = await api.delete(`/devlog-media/${id}`);
    return response.data;
  },
};