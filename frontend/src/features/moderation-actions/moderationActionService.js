import api from "../../services/api";

export const moderationActionService = {

  getMine: async () => {
    const response = await api.get("/moderation-actions/me");
    return response.data;
  },

  dismissAction: async (id, dismissData = {}) => {
    const response = await api.patch(`/moderation-actions/${id}/dismiss`, dismissData);
    return response.data;
  },
};