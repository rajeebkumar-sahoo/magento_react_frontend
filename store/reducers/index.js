import { combineReducers } from 'redux'
import leads from './leads'
import catalog from './catalog/category'

export default combineReducers({
    leads,
    catalog
})