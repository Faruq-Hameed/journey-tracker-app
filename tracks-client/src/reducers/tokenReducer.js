export const tokenReducer = (state = {}, action) => {
    switch (action.type) {
        case "set_token":
        return {...state, token: action.payload};
        case "get_token":
        return state.token;
        case "remove_token":
        return {...state, token: null};
        default:
        return state;
    }
}