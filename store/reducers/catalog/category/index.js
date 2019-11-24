import { 
    GET_CATEGORIES, 
    GET_CATEGORY_PRODUCTS,
    LAYERED_NAVIGATION,
    CURRENT_CATGORY,
    CATALOG_PAGE_TITLE
} from '../../../actions/types'

const initialState = {
    categories: [],
    currentCategory: {},
    catalogPageTitle: "",
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
        case CURRENT_CATGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case CATALOG_PAGE_TITLE:
            return {
                ...state,
                catalogPageTitle: action.payload
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