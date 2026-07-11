import api from "../../services/api";

export const loginUser = async (data) => {
  // Ditambahkan /auth mengikuti struktur router backend
  const response = await api.post("/auth/login", data);
  
  // Simpan token dan data user ke localStorage setelah login sukses
  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
  }
  if (response.data?.user) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response.data;
};

export const registerUser = async (data) => {
  // Ditambahkan /auth mengikuti struktur router backend
  const response = await api.post("/auth/register", data);
  return response.data;
};

// Tambahkan ini juga sekalian agar fitur auth di tokomu lengkap
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};