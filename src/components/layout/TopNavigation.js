import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getRootCategories } from '../../../store/actions/catalog/category'
import CategoryMenu from './CategoryMenu'

class TopNavigation extends Component {

    componentDidMount() {
        this.props.getRootCategories()
    }

    render() {
        return (
            <Navbar bg="warning" variant="light" expand="lg" className="mb-4">
                <Container fluid="true">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <CategoryMenu categories={this.props.categories} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    } 
}

const mapStateToProps = state => ({
    categories: state.catalog.categories
})

export default connect(mapStateToProps, {
    getRootCategories
})(TopNavigation)