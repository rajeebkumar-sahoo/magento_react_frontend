import React, { Component } from 'react'
import { Container, Breadcrumb } from 'react-bootstrap'
import { connect } from 'react-redux'
import './styles/breadcrumbs.css'

class Breadcrumbs extends Component {

    getIsActive = (isActive) => (isActive ? "active":"")

    getBreadcrumbItem = (item, isActive = false) => {
        return (
            <Breadcrumb.Item 
                key={item.category_id}
                // {...this.getIsActive(isActive)}
                href="#">
                {item.category_name}
            </Breadcrumb.Item>    
        )
    }

    getBreadcrumbsForCategory = () => {
        const breadcrumb_items = this.props.currentCategory.breadcrumbs
        if(breadcrumb_items && breadcrumb_items.length) {
            return(
                breadcrumb_items.map((item, index) => (
                    (this.getBreadcrumbItem(
                        item, 
                        index == breadcrumb_items.length-1 ? true : false
                    ))
                ))
            )
        } else {
            return (
                ''
            )
        }
    }

    render() {
        return (
            <Breadcrumb id="breadcrumbs">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                {this.getBreadcrumbsForCategory()}
            </Breadcrumb>
        )
    }
}

const mapPropsToState = (state) => ({
    currentCategory: state.catalog.currentCategory
})

export default connect(mapPropsToState)(Breadcrumbs)
