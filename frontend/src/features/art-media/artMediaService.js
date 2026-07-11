import api from "../../services/api";

export const artMediaService = {
 
  getByArtId: async (artId) => {
    const response = await api.get(`/art-media/art/${artId}`);
    return response.data;
  },

  createMedia: async (artId, formData) => {
    const response = await api.post(`/art-media/art/${artId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteMedia: async (id) => {
    const response = await api.delete(`/art-media/${id}`);
    return response.data;
  },
};