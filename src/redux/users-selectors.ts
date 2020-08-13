import { AppStateType } from "./redux-store"
import { createSelector } from "reselect"

export const getUsersSelector = (state: AppStateType) => {
  return state.ladCatalogPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users
})

export const getPageSize = (state: AppStateType) => {
  return state.ladCatalogPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
  return state.ladCatalogPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
  return state.ladCatalogPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
  return state.ladCatalogPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
  return state.ladCatalogPage.followingInProgress
}
