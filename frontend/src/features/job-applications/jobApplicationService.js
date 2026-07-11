import api from "../../services/api";

export const jobApplicationService = {

  getByJobId: async (jobId) => {
    const response = await api.get(`/job-applications/job/${jobId}`);
    return response.data;
  },

  getByUserId: async (userId) => {
    const response = await api.get(`/job-applications/user/${userId}`);
    return response.data;
  },

  getByApplicant: async () => {
    const response = await api.get("/job-applications");
    return response.data;
  },

  updateStatus: async (id, statusData) => {
    const response = await api.patch(`/job-applications/${id}/status`, statusData);
    return response.data;
  },

  createApplication: async (jobId, formData) => {
    const response = await api.post(`/job-applications/job/${jobId}`, formData, {
      headers: {
        // Penting karena mengirim file CV via Multer
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteApplication: async (id) => {
    const response = await api.delete(`/job-applications/${id}`);
    return response.data;
  },
};