import * as actionType from './const'; 

const initialState = {
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.PRE_LOAD_ACTIVE:
        return {
            ...state,
            loading: true
        }
        case actionType.PRE_LOAD_DISACTIVE:
        return {
            ...state,
            loading: false
        }
        default:
            return {
                ...state
            };
    }
}

export default reducer;