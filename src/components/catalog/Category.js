import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardDeck, Card, ListGroup, Button } from 'react-bootstrap'
import Product from './Product';

class Category extends Component {

    loopThroughProducts = () => {
        if (this.props.products) {
            return (
                <CardDeck>
                    {this.props.products.map((product) => (
                        <Card key={product.id} style={{flex: "1 0 21%", marginBottom: "15px"}}>
                            <Card.Img variant="top" src={product.thumbnail.url} />
                            <ListGroup variant="flush">
                                <ListGroup.Item>{product.name}</ListGroup.Item>
                                <ListGroup.Item>{product.sku}</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Footer>
                        </Card>
                    ))}
                </CardDeck>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            this.loopThroughProducts()
        )
    }
}

const mapPropsToState = (state) => ({
    products: state.catalog.categoryProducts
})

export default connect(mapPropsToState)(Category)
