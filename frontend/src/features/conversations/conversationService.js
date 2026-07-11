import api from "../../services/api";

export const conversationService = {

  getAllConversations: async () => {
    const response = await api.get("/conversations");
    return response.data;
  },

  getConversationById: async (id) => {
    const response = await api.get(`/conversations/${id}`);
    return response.data;
  },

  createConversation: async (conversationData) => {
    const response = await api.post("/conversations", conversationData);
    return response.data;
  },

  deleteConversation: async (id) => {
    const response = await api.delete(`/conversations/${id}`);
    return response.data;
  },
};