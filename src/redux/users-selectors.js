import {createSelector} from 'reselect';

const getUsersSelector = (state) => {
    return state.ladCatalogPage.users;
}
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u=>true) }
)

export const getPageSize = (state) => {
    return state.ladCatalogPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.ladCatalogPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.ladCatalogPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.ladCatalogPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.ladCatalogPage.followingInProgress;
}