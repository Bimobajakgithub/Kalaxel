import api from "../../services/api";

export const moderationService = {

  getQueue: async () => {
    const response = await api.get("/moderation/queue");
    return response.data;
  },

  deleteEntity: async (entityType, entityId) => {
    const response = await api.delete(`/moderation/${entityType}/${entityId}`);
    return response.data;
  },

  deleteReports: async (entityType, entityId) => {
    const response = await api.delete(`/moderation/${entityType}/${entityId}/reports`);
    return response.data;
  },
};