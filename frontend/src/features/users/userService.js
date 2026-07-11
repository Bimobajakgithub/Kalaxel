import api from "../../services/api";

export const userService = {

  getMe: async () => {
    const response = await api.get("/users");
    return response.data;
  },

  updateProfile: async (userData) => {
    const response = await api.put("/users", userData);
    return response.data;
  },

  updateAvatar: async (formData) => {
    const response = await api.patch("/users/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  getProfile: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
};