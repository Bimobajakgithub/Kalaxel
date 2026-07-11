import api from "../../services/api";

export const jobPostingService = {

  getAll: async () => {
    const response = await api.get("/job-postings");
    return response.data;
  },

  getByUserPublic: async (userId) => {
    const response = await api.get(`/job-postings/user/${userId}/public`);
    return response.data;
  },

  getByUser: async (userId) => {
    const response = await api.get(`/job-postings/user/${userId}`);
    return response.data;
  },

  getByStatus: async (status) => {
    const response = await api.get(`/job-postings/status/${status}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/job-postings/${id}`);
    return response.data;
  },

  createJob: async (jobData) => {
    const response = await api.post("/job-postings", jobData);
    return response.data;
  },

  updateJob: async (id, jobData) => {
    const response = await api.put(`/job-postings/${id}`, jobData);
    return response.data;
  },

  deleteJob: async (id) => {
    const response = await api.delete(`/job-postings/${id}`);
    return response.data;
  },
};