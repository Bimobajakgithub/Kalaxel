import api from "../../services/api";

export const likeService = {
  getLikeCount: async (entityType, entityId) => {
    const response = await api.get(`/likes/${entityType}/${entityId}`);
    return response.data; 
  },

  getLikeStatus: async (entityType, entityId) => {
    const response = await api.get(`/likes/${entityType}/${entityId}/status`);
    return response.data; 
  },

  likeEntity: async (likeData) => {
    const response = await api.post("/likes", likeData);
    return response.data;
  },

  unlikeEntity: async (likeData) => {
    const response = await api.delete("/likes", { data: likeData });
    return response.data;
  },
};