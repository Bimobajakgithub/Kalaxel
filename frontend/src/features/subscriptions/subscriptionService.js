import api from "../../services/api";

export const subscriptionService = {

  getPlans: async () => {
    const response = await api.get("/subscriptions/plans");
    return response.data;
  },

  getMine: async () => {
    const response = await api.get("/subscriptions");
    return response.data;
  },

  getHistory: async () => {
    const response = await api.get("/subscriptions/history");
    return response.data;
  },

  checkout: async (checkoutData) => {
    const response = await api.post("/subscriptions/checkout", checkoutData);
    return response.data; // Biasanya mengembalikan token pembayaran atau URL redirect (e.g., Midtrans Snap URL)
  },

  cancelSubscription: async () => {
    const response = await api.post("/subscriptions/cancel");
    return response.data;
  },
};