import api from "../../services/api";

export const messageService = {

  getUnreadCount: async () => {
    const response = await api.get("/messages/unread-count");
    return response.data;
  },


  getByConversationId: async (conversationId) => {
    const response = await api.get(`/messages/conversation/${conversationId}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/messages/${id}`);
    return response.data;
  },

  sendMessage: async (conversationId, formData) => {
    const response = await api.post(`/messages/conversation/${conversationId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteAttachment: async (id) => {
    const response = await api.delete(`/messages/attachments/${id}`);
    return response.data;
  },

  deleteMessage: async (id) => {
    const response = await api.delete(`/messages/${id}`);
    return response.data;
  },
};