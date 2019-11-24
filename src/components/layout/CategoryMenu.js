import React, { Component, Fragment } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { 
    getCategoryProducts,
    setCurrentCategory
} from '../../../store/actions/catalog/category'

class CategoryMenu extends Component {

    loadCategory = (category) => {
        this.props.getCategoryProducts(category.id)
        this.props.setCurrentCategory(category)
    }

    getNavLink = (category) => {
        if(category.include_in_menu) {
            return (
                <Nav.Link key={category.id} href="#" 
                    onClick={() => (this.loadCategory(category))}>
                    {category.name}
                </Nav.Link>
            )
        }
    }

    getNavDropdownLink = (category) => {
        return (
            <NavDropdown 
                key={category.id} 
                title={category.name} 
                id="basic-nav-dropdown">
                    {this.loopOverCategoryTree(category.children)}
            </NavDropdown>
        )
    }

    loopOverCategoryTree(categories) {
        return (
            categories.map((category, index) => (
                category.children_count > 0
                    ? this.getNavDropdownLink(category)
                    : this.getNavLink(category)
            ))
        )        
    }

    render() {
        return (
            <Fragment>
                { this.loopOverCategoryTree(this.props.categories) }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
    getCategoryProducts,
    setCurrentCategory
})(CategoryMenu)
