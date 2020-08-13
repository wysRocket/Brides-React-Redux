import axios from "axios"
import { ProfileType } from "../types/types"

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "d24401c4-48d2-41f7-90e2-7b6baed1bd5b" },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
      return response.data
    })
  },

  followUser(id: number) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data
    })
  },

  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data
    })
  },
}
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status })
  },
  savePhoto(photoFile: any) {
    const formData = new FormData()
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile)
  },
}
export enum resultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsReqired = 2,
}
type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: resultCodeEnum
  messages: Array<string>
}
type LoginResponseType = {
  data: { userId: number }
  resultCode: resultCodeEnum
  messages: Array<string>
}
export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then((res) => res.data)
  },
  login(email: string, password: string, rememberMe = false) {
    return instance
      .post<LoginResponseType>(`auth/login`, { email, password, rememberMe })
      .then((res) => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}
