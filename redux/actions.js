 const USER_ACTION = {
    SELECT_POST: 'SELECT_POST',
    SELECT_USERS: 'SELECT_USERS',
    TOGGLE_FAVORITE: 'TOGGLE_FAVORITE'

}
const selectPost = (post) => {
    return {
        type: USER_ACTION.SELECT_POST,
        payload: post
    }
}
export const toggleFavorite = (post) => {
    return {
        type: USER_ACTION.TOGGLE_FAVORITE,
        payload: post
    }
}
export const selectUsers = (categories) => {
    return {
        type: USER_ACTION.SELECT_USERS,
        payload: categories
    }
}
export default USER_ACTION;