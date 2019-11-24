import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProductBySku } from '../../../store/actions/catalog/category'

class Product extends Component {

    componentDidMount() {
        this.props.getProductBySku(this.props.sku)
    }

    render() {
        return (
            <div>
                {
                    this.props.productCollection.map(product => (
                        <p key={product.id}>{product.id}|{product.sku}|{product.name}|</p>
                    ))
                }
                
            </div>
        )
    }
}

const mapPropsToState = (state) => ({
    productCollection: state.catalog.productCollection
})

export default connect(mapPropsToState, {
    getProductBySku
})(Product)
