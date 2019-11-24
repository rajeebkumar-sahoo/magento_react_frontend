import axios from 'axios'

import apolloClient from '../../apollo-client'
import gql from 'graphql-tag'

import { 
    GET_CATEGORIES, 
    GET_CATEGORY_PRODUCTS,
    LAYERED_NAVIGATION,
    CURRENT_CATGORY,
    CATALOG_PAGE_TITLE
} from '../../types';

const headers = {
    headers: {
        authorization: "bearer h8yu3kv4dgw9rp3xsf44utq1iklaayn1"
    }
}




export const getRootCategories = () => dispatch => {
    
    const ROOT_CATEGORIES_QUERY = {query: gql`{
        category(id: 2){
            children{
                id,
                name,
                include_in_menu,
                is_anchor,
                children_count,
                children{
                    id,
                    name,
                    include_in_menu,
                    is_anchor,
                    breadcrumbs{
                        category_id,
                        category_name,
                        category_level,
                        category_url_key
                    },
                    children_count,
                    children{
                        id,
                        name,
                        include_in_menu,
                        is_anchor,
                        breadcrumbs{
                            category_id,
                            category_name,
                            category_level,
                            category_url_key
                        },
                        children_count
                    }
                }
            }
        }
    }`}
    apolloClient.query(ROOT_CATEGORIES_QUERY)
    .then(res => {
        console.log(res)
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data.category.children
        })
    }).catch(err => console.log(err))
}

export const setCurrentCategory = (category) => dispatch => {
    dispatch({
        type: CURRENT_CATGORY,
        payload: category
    })

    dispatch({
        type: CATALOG_PAGE_TITLE,
        payload: category.name
    })
}

export const getCategoryProducts = (categoryId) => dispatch => {
    const CATEGORY_PRODUCTS_QUERY = {query: gql`{
        products(
            filter: { category_id: { eq: "${categoryId}" } }
            pageSize: 20
            currentPage: 1
            sort: { name: DESC }
        ) {
            items {
                id,
                sku,
                name,
                thumbnail {
                    url
                }
            }
            filters {
                name
                filter_items_count
                request_var
                filter_items {
                    label
                    value_string
                    items_count
                }
            }
        }
    }`}

    apolloClient.query(CATEGORY_PRODUCTS_QUERY)    
    .then(res => {
        dispatch({
            type: GET_CATEGORY_PRODUCTS,
            payload: res.data.products.items
        })
        dispatch({
            type: LAYERED_NAVIGATION,
            payload: res.data.products.filters
        })
    }).catch(err => console.log(err))
}

