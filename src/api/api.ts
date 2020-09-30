import axios from 'axios'
import { UserType } from '../types/types'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'd24401c4-48d2-41f7-90e2-7b6baed1bd5b' },
})
export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}
export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsReqired = 2,
}
export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
