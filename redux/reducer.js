import { DATA } from '../data/usersData';
import USER_ACTION from './actions';

const initialState = {
    users: DATA,
    filter: [],
    favorited: [],
    categories: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION.TOGGLE_FAVORITE:
            if (state.favorited.includes(action.payload)) {
                return {
                    ...state,
                    favorited: state.favorited.filter((item) => item !== action.payload)
                };
            } else {
                return {
                    ...state,
                    favorited: [...state.favorited, action.payload]
                };
            }

       
        case USER_ACTION.SELECT_USERS:
            return {
                ...state,
                filter: action.payload
            };
        case USER_ACTION.SELECT_POST:
            return {
                ...state,
                selectedPost: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
