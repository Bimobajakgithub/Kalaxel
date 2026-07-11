import api from "../../services/api";

export const commentService = {

  getByEntity: async (entityType, entityId) => {
    const response = await api.get(`/comments/${entityType}/${entityId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/comments/detail/${id}`);
    return response.data;
  },

  createComment: async (entityType, entityId, commentData) => {
    const response = await api.post(`/comments/${entityType}/${entityId}`, commentData);
    return response.data;
  },

  updateComment: async (id, commentData) => {
    const response = await api.put(`/comments/${id}`, commentData);
    return response.data;
  },

  deleteComment: async (id) => {
    const response = await api.delete(`/comments/${id}`);
    return response.data;
  },
};