import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "d24401c4-48d2-41f7-90e2-7b6baed1bd5b" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
