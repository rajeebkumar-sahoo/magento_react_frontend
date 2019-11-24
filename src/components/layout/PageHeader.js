import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

function PageHeader(props) {
    return (
        <Container fluid>
            <header>
                <h2>{props.catalogPageTitle}</h2>
            </header>
        </Container>
    )
}

const mapPropsToStates = (state) => ({
    catalogPageTitle: state.catalog.catalogPageTitle
})

export default connect(mapPropsToStates, {
    
})(PageHeader)