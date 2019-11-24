import { 
    GET_CATEGORIES, 
    GET_CATEGORY_PRODUCTS,
    LAYERED_NAVIGATION
} from '../../../actions/types'

const initialState = {
    categories: [],
    categoryProducts: [],
    layeredNavigation: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_CATEGORY_PRODUCTS:
            return {
                ...state,
                categoryProducts: action.payload
            }
        case LAYERED_NAVIGATION:
            return {
                ...state,
                layeredNavigation: action.payload
            }
        default:
            return state
    }
}