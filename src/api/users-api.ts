import { instance, APIResponseType, GetItemsType } from './api'

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  followUser(id: number) {
    return instance.post<APIResponseType>(`follow/${id}`).then((response) => response.data)
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then((response) => response.data) as Promise<
      APIResponseType
    >
  },
}
